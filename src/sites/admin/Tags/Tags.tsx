import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Container, Modal } from "@mui/material"
import axios, { AxiosError } from "axios"
import MUIDataTable from "mui-datatables"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { InputControl } from "../../../components/InputControl"

import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { Layout } from "../../../components/layout/Layout"
import yup from "../../../consts/yupLocaleEN"
import {
  AcceptTagRequest,
  AddTagRequest,
  EditTagRequest,
  RejectTagRequest,
  TagsResponse,
} from "../../../models/Api"
import { TagRowButtons } from "./TagRowButtons"
const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}
const columns = [
  { name: "Id", options: { filter: false } },
  { name: "Tag name", options: { filter: false } },
  {
    name: "Tag status",
    options: {
      filterOptions: {
        names: ["accepted", "rejected", "pending"],
      },
    },
  },
  { name: "Action", options: { sort: false, filter: false } },
]

const editTagValidationSchema = yup.object().shape({
  name: yup.string().min(3).max(30),
})
interface EditTagProps {
  name: string
}

const Tags = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editedTagId, setEditedTagId] = useState<number>(-1)
  const [modalMode, setModalMode] = useState<"edit" | "add">("add")

  const { control, handleSubmit, reset } = useForm<EditTagProps>({
    resolver: yupResolver(editTagValidationSchema),
    reValidateMode: "onChange",
  })

  const { data: tagsData, refetch: refetchTags } = useQuery<
    any,
    any,
    TagsResponse
  >(`/admin/tag`, async () => {
    const res = await axios.get(`/admin/tag`)
    return res.data
  })

  const rejectTagMutation = useMutation<any, AxiosError, RejectTagRequest>(
    async (data) => axios.put("/admin/tag/reject", { ...data }),
    {
      onSuccess: async (response) => {
        console.log("success rejecting")
        refetchTags()
      },
      onError: (error) => {
        console.log("error")
      },
    }
  )
  const acceptTagMutation = useMutation<any, AxiosError, RejectTagRequest>(
    async (data) => axios.put("/admin/tag/accept", { ...data }),
    {
      onSuccess: async (response) => {
        toast.success("Tag accepted successfully")
        refetchTags()
      },
      onError: (error) => {
        toast.error(
          (error?.response?.data as any)?.message || "Edit tag error.",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const addTagMutation = useMutation<any, AxiosError, AddTagRequest>(
    async (data) => axios.post("/admin/tag", { ...data }),
    {
      onSuccess: async (response) => {
        refetchTags()
        toast.success("Tag added successfully")
        setIsModalOpen(false)
      },
      onError: (error) => {
        toast.error(
          (error?.response?.data as any)?.message || "Edit tag error.",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const editTagMutation = useMutation<any, AxiosError, EditTagRequest>(
    async (data) => axios.put("/admin/tag", { ...data }),
    {
      onSuccess: async (response) => {
        refetchTags()
        toast.success("Tag edited successfully")
        setIsModalOpen(false)
      },
      onError: (error: AxiosError) => {
        toast.error(
          (error?.response?.data as any)?.message || "Edit tag error.",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  const handleReject = (data: RejectTagRequest) =>
    rejectTagMutation.mutate(data)
  const handleAccept = (data: AcceptTagRequest) =>
    acceptTagMutation.mutate(data)
  const handleEdit = ({ tagId }: { tagId?: number }) => {
    setIsModalOpen(true)
    tagId ? setModalMode("edit") : setModalMode("add")
    if (tagId) setEditedTagId(tagId)
  }
  const handleAdd = () => {
    setIsModalOpen(true)
    setModalMode("add")
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const onSubmitEdit = (props: AddTagRequest) => {
    editTagMutation.mutate({ name: props.name, tagId: editedTagId })
  }
  const onSubmitAdd = (props: AddTagRequest) => {
    addTagMutation.mutate({ name: props.name })
  }

  useEffect(() => {
    if (!isModalOpen) reset()
  }, [isModalOpen, reset])

  return (
    <Layout>
      <>
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
          <div className="text-center pb-4">
            <Button
              type="submit"
              variant="contained"
              onClick={handleAdd}
              style={{ borderRadius: 9999 }}
              startIcon={<AddIcon />}
            >
              ADD NEW TAG
            </Button>
          </div>
          <MUIDataTable
            title={"Tag List"}
            data={
              tagsData?.map((tag) => [
                tag.id,
                tag.name,
                tag.tagStatus,
                <TagRowButtons
                  tagId={tag?.id || -1}
                  reject={handleReject}
                  accept={handleAccept}
                  edit={handleEdit}
                  status={
                    (tag.tagStatus as "pending" | "rejected" | "accepted") || ""
                  }
                />,
              ]) || []
            }
            columns={columns}
            options={{
              selectableRows: "none",
              responsive: "standard",
              sortOrder: { name: "Id", direction: "asc" },
            }}
          />

          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title">
                {modalMode === "edit" ? "Edit tag" : "Add tag"}
              </h2>
              <div className="pt-4  text-center ">
                <div className="pb-4">
                  <InputControl
                    control={control}
                    name="name"
                    label="Tag Name"
                    autoFocus
                    autoComplete="f"
                    type="text"
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit(
                    modalMode === "edit" ? onSubmitEdit : onSubmitAdd
                  )}
                  style={{ borderRadius: 9999 }}
                  startIcon={modalMode === "edit" ? <EditIcon /> : <AddIcon />}
                >
                  {modalMode === "edit" ? "EDIT TAG" : "ADD TAG"}
                </Button>
              </div>
            </Box>
          </Modal>
        </Container>
      </>
    </Layout>
  )
}

export default Tags
