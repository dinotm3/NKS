
export default function getToken() {
  if (localStorage.getItem("token") != null) {
    return localStorage.getItem("token");
  } else {
    console.log("No token");
    return ;
  }
}
