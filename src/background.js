import {useDispatch} from "react-redux";
import {add} from "./actions";

function Background() {
    const dispatch = useDispatch();
    const elem = document.querySelectorAll("video, iframe, div");
    let array = [];

    for (let i = 0; i < elem.length; i++) {
        array.push(i)
        console.log(i)
    }

    dispatch(add(array));
}

export default Background;
