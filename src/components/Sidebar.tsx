import { useNavigate } from "react-router"
import DropdownButton from "./DropdownButton"

export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <aside className="flex bg-white">
      <div className=" h-screen">
        <ul className="space-y-1">
          <li className="p-1">
            <DropdownButton />
          </li>

          <li
            className="hover:bg-gray-300 p-1 "
            onClick={() => navigate("/trainings")}
          >
            Przeglądaj
          </li>
          <li className="hover:bg-gray-300 p-1 ">Moja biblioteka</li>
          <li
            className="hover:bg-gray-300 p-1 "
            onClick={() => navigate("/panel")}
          >
            Ustawienia
          </li>
        </ul>
      </div>
    </aside>
  )
}
