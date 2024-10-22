import {URL} from "./url";

export const fetchData = async() => {
    let res = await fetch(URL);
    res = await res.json();
    return res;
}