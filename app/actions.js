// "use server";
// import { redirect } from "next/navigation";

// const sessions = new Map();

// export async function login(formData){
//     const username = formData.get("username");
//     sessions.set("session1",username);
//     redirect("/dashboard");
// }
// export async function logout(){
//     sessions.delete("session1");
//     redirect("/");
// }
// export async function getSession(){
//     return sessions.get("session1");

// }