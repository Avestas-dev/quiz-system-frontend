import CollectionButton from "../../components/CollectionButton"
import { Layout } from "../../components/layout/Layout"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FolderOpenIcon from "@mui/icons-material/FolderOpen"
import ShareIcon from "@mui/icons-material/Share"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import AddCircle from "@mui/icons-material/AddCircle"
import { GetAllTrainings } from "./GetAllTrainings"
import { Container } from "@mui/material"

export const TrainingList = () => {
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
        <GetAllTrainings />
      </Container>
    </Layout>
  )
}
