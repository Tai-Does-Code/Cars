import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
      Credentials({
        credentials: {
          email: {},
          password: {},
        },
        authorize: async (credentials) => {
            const email = "test3@gmail.com";
            const password = "123";

            if(credentials.email === email && credentials.password === password) {
                return { email, password };

            }else{
                throw new Error("Invalid credentials.")
            }

        },
      }),
    ],
  })



// import NextAuth, { NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// // import GithubProvider from "next-auth/providers/github"

// import { db } from "./db"
 
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(db),
//   pages: {
//     signIn: '/sign_in',
//   },
//   providers: [
//     CredentialsProvider({
//                   credentials: {
//                     email: { label: "Email", type: "Email", placeholder: "jsmith@gmail.com" },
//                     password: { label: "Password", type: "password" }
//                   },
//                   async authorize(credentials) {
//                     const user = { id: "1", email: "jsmith@example.com" }
              
//                     if (user) {
//                       return user
//                     } else {
//                       return null
//                     }
//                   }
//                 })
//   ],
// })

// // export const authOptions: NextAuthOptions = {
// //     pages: {
// //         signIn: "/sign_in",
// //     },
// //     providers: [
// //         CredentialsProvider({
// //           credentials: {
// //             email: { label: "Email", type: "Email", placeholder: "jsmith@gmail.com" },
// //             password: { label: "Password", type: "password" }
// //           },
// //           async authorize(credentials) {
// //             const user = { id: "1", email: "jsmith@example.com" }
      
// //             if (user) {
// //               return user
// //             } else {
// //               return null
// //             }
// //           }
// //         })
// //       ]
// // }
