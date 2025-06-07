import './App.css'
import Layout from "./components/Layout.tsx";
import Tasks from "./components/Tasks.tsx";

function App() {

  return (
    <>
        <Layout>
            <main className="w-full min-h-[75vh] max-h-[750px] overflow-y-auto">
                <Tasks />
            </main>
        </Layout>
    </>
  )
}

export default App
