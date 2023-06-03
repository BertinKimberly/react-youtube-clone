import React,{useState,useEffect} from 'react'
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=New`).then((data) =>
      setVideos(data.items)
    );
  }, [fetchFromAPI]);
  console.log(videos);
  return (
    <div>
      
    </div>
  )
}

export default Feed
