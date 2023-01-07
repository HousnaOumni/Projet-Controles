import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [data,setData] = useState([]);

    const getData = async(url) => {
        await fetch(url).then(res => res.json()).then(data => setData(data))
         .catch(error => console.log(error))
    }
    useEffect(() => {
        getData(url)
    },[url])

    return data;
}
