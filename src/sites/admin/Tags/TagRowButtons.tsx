import AddBoxIcon from "@mui/icons-material/AddBox"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Tooltip } from "@mui/material"
import { AcceptTagRequest, RejectTagRequest } from "../../../models/Api"

export const TagRowButtons = ({
  tagId,
  status,
  reject,
  accept,
  edit,
}: {
  tagId: number
  status: "pending" | "rejected" | "accepted" | ""
  reject: (data: RejectTagRequest) => void
  accept: (data: AcceptTagRequest) => void
  edit: ({ tagId }: { tagId?: number | undefined }) => void
}) => {
  return (
    <div>
      <div className=" gap-3 flex flex-row justify-start">
        <div onClick={() => edit({ tagId })} className="cursor-pointer">
          <Tooltip title="Edit">
            <EditIcon />
          </Tooltip>
        </div>

        {(status === "pending" || status === "rejected") && (
          <div onClick={() => accept({ tagId })} className="cursor-pointer">
            <Tooltip title="Accept">
              <AddBoxIcon />
            </Tooltip>
          </div>
        )}
        {(status === "pending" || status === "accepted") && (
          <div onClick={() => reject({ tagId })} className="cursor-pointer">
            <Tooltip title="Reject">
              <DeleteIcon />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  )
}
