import axios from "./config"

export const login = (username, password) => axios({
    url: "/users/login",
    method: "post",
    data: {
        username,
        password
    }
})

//获取日志
export const getLoginLog = () => axios.get("/getloginlog")