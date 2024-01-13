import React from "react";
import Api from "../../../libs/axios";

  export  const useUpdateProfile = () => {

    const updateProfile = async (update) => {
      const {data} = await Api.post("profile")
      
    }
    return {
      updateProfile
    }
}

export default useUpdateProfile ; 