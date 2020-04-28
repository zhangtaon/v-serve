import axios from "axios";
if (process.env.Authorization) {
    axios.defaults.headers.common[
        "Authorization"
    ] = process.env.Authorization;
}
export default {}