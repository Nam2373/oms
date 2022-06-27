import axiosClient from "./setup/axiosClients";

// const userAPI = {
//     REGISTER: new Promise((res, reject) => {
//         res({
//             createAt: "2022-06-23T03:27:24.418426300Z",
//             data: 'Your account created successfully!',
//             uuid: '123456-12356',
//             statusCode: 200,
//         })
//     }),
//     LOGIN: new Promise((res, reject) => {
//         res({
//             createdAt: "2022-06-23T03:27:24.418426300Z",
//             data: {
//                 "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMDFAdGVzdC5sb2NhbCIsImV4cCI6MTY1NjU1OTY0NCwidXNlciI6eyJyb2xlIjoiQ3VzdG9tZXIiLCJ1c2VySWQiOjksImVtYWlsIjoidXNlcjAxQHRlc3QubG9jYWwifX0.rcIvEK643elsGvIBLjvvQaW0t3tT2uI17UfdxqV4Kiw",
//                 "refreshToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMDFAdGVzdC5sb2NhbCIsImV4cCI6MTY1NjU1OTY0NCwidXNlciI6eyJyb2xlIjoiQ3VzdG9tZXIiLCJ1c2VySWQiOjksImVtYWlsIjoidXNlcjAxQHRlc3QubG9jYWwifX0.rcIvEK643elsGvIBLjvvQaW0t3tT2uI17UfdxqV4Kiw"
//             },
//             uuid: "f8ca5a7c-1a65-44cb-b360-ae14a1d04982",
//             statusCode: 200

//         })
//     })

// }

const userAPI = {
    REGISTER: (payload) => {
        return axiosClient.post('/api/v1/users/register', payload)
    },
    LOGIN: (payload) => {
        return axiosClient.post('/api/v1/users/login', payload)
    }
}

export { userAPI }