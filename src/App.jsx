import "./App.css";
import { useFetchRepositories } from "./hooks/dataAPI";

function App() {
  const { data, isLoading } =
    useFetchRepositories("repos");
  console.log(data);
  return (
    <>
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
  );
}

export default App;
