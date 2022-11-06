import CollectionButton from "../../components/CollectionButton"
import { Layout } from "../../components/layout/Layout"
import QuizListItem from "../../components/QuizListItem"
import Sidebar from "../../components/Sidebar"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FolderOpenIcon from "@mui/icons-material/FolderOpen"
import ShareIcon from "@mui/icons-material/Share"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import AddCircle from "@mui/icons-material/AddCircle"

export const TrainingList = () => {
  return (
    <Layout>
      <div className="flex flex-row space-x-2 bg-gray-300">
        <Sidebar />
        <div className="flex flex-col w-1/2 h-screen space-y-2 mt-2">
          <QuizListItem />
          <QuizListItem />
          <QuizListItem />
        </div>
        <div className="flex "></div>
        <div className="w-[35%] h-max bg-white mt-2 rounded-2xl ">
          <CollectionButton />
          <div className="flex flex-col divide-y ml-5 mr-5">
            <div className="flex flex-col mt-8 space-y-2 mb-2">
              <div className="flex flex-row space-x-2">
                <LibraryBooksIcon />
                <p>Moja biblioteka</p>
              </div>
              <div className="flex flex-row space-x-2">
                <FolderOpenIcon />
                <p>Stworzone przeze mnie</p>
              </div>
              <div className="flex flex-row space-x-2">
                <FavoriteBorderIcon />
                <p>Polubione</p>
              </div>
              <div className="flex flex-row space-x-2">
                <ShareIcon />

                <p>Udostępnione</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row space-x-2">
                <FolderOpenIcon />
                <p>Kolekcja 1</p>
              </div>
              <div className="flex flex-row space-x-2">
                <FolderOpenIcon />
                <p>Kolekcja 2</p>
              </div>
              <div className="flex flex-row space-x-2">
                <FolderOpenIcon />
                <p>Kolekcja 3</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row ml-5 space-x-2 mt-5 mb-5">
            <AddCircle />
            <p className="text-yellow-500">Stwórz kolekcję</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
