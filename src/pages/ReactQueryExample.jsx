import { Link } from "react-router-dom";
import { useFetchRepositories } from "../hooks/dataAPI";

const ReactQueryExample = () => {
    const { data, isLoading } =
    useFetchRepositories("repos");
  return (
    <>
    <Link to="/react-zustand">Zustand Example</Link>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      data?.map((item,index) => {
        return (
          <div key={index}>
            {item.title}
          </div>
        )
      })
    )}
  </>
  )
}

export default ReactQueryExample