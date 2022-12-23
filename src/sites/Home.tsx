import { Layout } from "../components/layout/Layout"

export const Home = () => {
  return (
    <Layout>
      <div className="flex flex-row ">
        <div>
          <p className="text-red-500 text-2xl font-bold">TODO</p>
        </div>
        <ul className="list-disc pl-6">
          <li>Yup Locale - tłumaczenia na polski</li>
          <li>Rejestracja</li>
          <li>Obrazek na logowaniu/rejestracji</li>
          <li>Error Screen</li>
          <li>Loadery na button'ach</li>
        </ul>
      </div>
    </Layout>
  )
}
