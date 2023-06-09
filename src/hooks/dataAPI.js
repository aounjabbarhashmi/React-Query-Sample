import axios from "axios";
import { useQuery } from "react-query"

export  const postsData = async  ()=>{
    // const [_, _] = ctx.queryKey;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return data;
}
export function useFetchRepositories() {
    return useQuery(["repos"], postsData);
}