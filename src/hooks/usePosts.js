import axios from "../axios";
import { useQuery } from "react-query";

export default function usePosts() {
    return useQuery("posts", ()=> axios.get("/post").then(res => res.data))
}