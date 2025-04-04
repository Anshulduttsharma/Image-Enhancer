import axios from "axios";

const API_KEY = "wxrzv12nzzibn5q3x";
const BASE_URL = "https://techhk.aoscdn.com/"
const MAXIMUM_RETRIES = 20

export const enhancedImageApi = async (file) => {
    // code to call api and get enhanced image url

    try {
        const taskId = await uploadImage(file)
        console.log("Image Uploaded Successfully, Task Id: ", taskId)


        const enhancedImageData = await pollEnhancedImage(taskId)
        console.log("Enhanced Image Data: ", enhancedImageData);

        console.log(enhancedImageData);
        return enhancedImageData;

    } catch (error) {
        console.log("Error enhancing image: ", error.message)
    }
}

const uploadImage = async (file) => {
    //code to upload image
    const formData = new FormData()
    formData.append("image_file", file)

    const { data } = await axios.post(`${BASE_URL}api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY
        }
    })

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! TaskId not found.")

    }
    return data?.data?.task_id;
}

const pollEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        //console.log(`Processing......(${retries}/${MAXIMUM_RETRIES})`);
        if (retries > MAXIMUM_RETRIES) {
            console.log("Max retries reached. please try again later.");
        }

        await new Promise((resolve) => setTimeout(resolve, 2000))

        return pollEnhancedImage(taskId, retries + 1)
    }
    return result;
}

const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(`${BASE_URL}api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY": API_KEY
        }
    })

    if (!data?.data) {
        throw new Error("Failed to fetch enhanced image.")

    }

    return data.data;
}


