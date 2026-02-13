import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/user";

import { z } from "zod";

import { usernameValidation } from "@/Schema/schema";

const UsernameQuerySchema = z.object({
  username: usernameValidation,
});

//writing a get req so that we can check if username is valid or not or exists or not

//when the user will click on singup there we will check thats obv ,but here we want the functionality that as soon as the user types they see the message if username is valid or not

export async function GET(request: Request) {
    //localhost:3000/api/cuu?username=icarus
    
  await dbConnect();

  try {
    //username will be checked from url

    const { searchParams } = new URL(request.url);
    const queryParam = {
      username: searchParams.get("username"),
    };
      const result = UsernameQuerySchema.safeParse(queryParam);

       if (!result.success) {
         const usernameErrors =
           result.error.format().username?._errors || [];
         return Response.json(
           {
             success: false,
             message:
               usernameErrors?.length > 0
                 ? usernameErrors.join(",")
                 : "ivalid query parameter",
           },
           { status: 400 },
         );
       }
      
      const { username } = result.data;
      const existingVerifiedUser = await UserModel.findOne({
        username,
        isVerified: true,
      });
      if (existingVerifiedUser) {
        return Response.json(
          {
            success: false,
            message: "username is already taken",
          },
          {
            status: 400,
          },
        );
      }
      return Response.json(
        {
          success: true,
          message: "username is available",
        },
        {
          status: 200,
        },
      );

  } catch (error) {
    console.error(error);
    return Response.json(
      {
        success: false,
        message: "error checking username",
      },
      { status: 500 },
    );
  }
}
