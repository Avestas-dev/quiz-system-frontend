import LockPersonIcon from "@mui/icons-material/LockPerson"
import { Box, Button, Modal, TextField } from "@mui/material"
import { Container } from "@mui/system"
import axios, { AxiosError } from "axios"
import dayjs from "dayjs"
import MUIDataTable from "mui-datatables"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toast } from "react-toastify"
import { Layout } from "../../../components/layout/Layout"
import {
  BlockUserRequest,
  GetAllUsersResponse,
  UnlockUserRequest,
} from "../../../models/Api"
import { modalStyle } from "../../../styles/globalStyles"
import { UserRowButtons } from "./UserRowButtons"
const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [blockedUserId, setBlockedUserId] = useState(-1)
  const [blockedDate, setBlockedDate] = useState(
    dayjs(new Date()).format("YYYY-MM-DDTHH:mm")
  )
  const { data: usersData, refetch: refetchUsers } = useQuery<
    any,
    any,
    GetAllUsersResponse
  >(`/admin/tag`, async () => {
    const res = await axios.get(`/admin/user/all`)
    return res.data
  })

  const blockUserMutation = useMutation<any, AxiosError, BlockUserRequest>(
    async (data) => axios.post("/admin/user/block", { ...data }),
    {
      onSuccess: async (response) => {
        toast.success("Blocked user successfully")
        refetchUsers()
      },
      onError: (error) => {
        toast.error(
          (error?.response?.data as any)?.message || "Block user error.",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )
  const unlockUserMutation = useMutation<any, AxiosError, UnlockUserRequest>(
    async (data) => axios.post("/admin/user/unlock", { ...data }),
    {
      onSuccess: async (response) => {
        toast.success("User unlocked successfully")
        refetchUsers()
      },
      onError: (error) => {
        toast.error(
          (error?.response?.data as any)?.message || "Unlock user error.",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const block = ({ userId }: Pick<BlockUserRequest, "userId">) => {
    if (userId) setBlockedUserId(userId)
    setIsModalOpen(true)
  }

  const handleBlock = (data: BlockUserRequest) => {
    blockUserMutation.mutate(data)
  }

  const unlock = ({ userId }: UnlockUserRequest) => {
    unlockUserMutation.mutate({ userId })
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  console.log(blockedDate)

  return (
    <Layout>
      <Container
        sx={{
          paddingX: 4,
          paddingY: 4,
          marginLeft: "auto",
          marginRight: "auto",
          flex: 1,
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
        }}
        maxWidth="xl"
      >
        <MUIDataTable
          title={"Users"}
          data={
            usersData?.map((user) => [
              user.id,
              user.email,
              user.isAdmin ? (
                <div className="font-bold text-blue-600">True</div>
              ) : (
                "False"
              ),
              dayjs(user.createdAt).format("DD-MM-YYYY HH:mm"),
              !!user.blockedDate &&
              dayjs(new Date()).isBefore(user.blockedDate) ? (
                <div className="font-bold text-red-600">True</div>
              ) : (
                "False"
              ),
              dayjs(user.blockedDate).format("DD-MM-YYYY HH:mm"),
              <UserRowButtons
                userId={user.id || -1}
                block={block}
                unlock={unlock}
                isBlocked={
                  !!user?.blockedDate &&
                  dayjs(new Date()).isBefore(user.blockedDate)
                }
              />,
            ]) || []
          }
          columns={[
            { name: "Id", options: { filter: false } },
            { name: "Email", options: { filter: false } },
            { name: "Admin" },
            { name: "Created at", options: { filter: false } },
            { name: "Blocked" },
            { name: "Block date", options: { filter: false } },
            { name: "Actions", options: { sort: false, filter: false } },
          ]}
          options={{
            selectableRows: "none",
            responsive: "standard",
            sortOrder: { name: "Id", direction: "asc" },
          }}
        />
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box sx={{ ...modalStyle, width: 400 }}>
            <h2 id="parent-modal-title">Block user</h2>
            <div className="pt-4  text-center ">
              <div className="pb-4">
                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  value={blockedDate}
                  onChange={(value) =>
                    setBlockedDate(value.target.value.slice(0, 16))
                  }
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                onClick={() =>
                  handleBlock({
                    userId: blockedUserId,
                    blockedTo: new Date(blockedDate).toISOString(),
                  })
                }
                style={{ borderRadius: 9999 }}
                startIcon={<LockPersonIcon />}
              >
                Block person
              </Button>
            </div>
          </Box>
        </Modal>
      </Container>
    </Layout>
  )
}

export default Users
