import LockOpenIcon from "@mui/icons-material/LockOpen"
import LockPersonIcon from "@mui/icons-material/LockPerson"
import { Tooltip } from "@mui/material"
import { BlockUserRequest, UnlockUserRequest } from "../../../models/Api"
export const UserRowButtons = ({
  userId,
  isBlocked,
  block,
  unlock,
}: {
  userId: number
  isBlocked: boolean
  block: (data: Pick<BlockUserRequest, "userId">) => void
  unlock: (data: UnlockUserRequest) => void
}) => {
  return (
    <div>
      <div className=" gap-3 flex flex-row justify-start">
        {isBlocked && (
          <div onClick={() => unlock({ userId })} className="cursor-pointer">
            <Tooltip title="Unlock user">
              <LockOpenIcon />
            </Tooltip>
          </div>
        )}
        {!isBlocked && (
          <div onClick={() => block({ userId })} className="cursor-pointer">
            <Tooltip title="Block user">
              <LockPersonIcon />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  )
}
