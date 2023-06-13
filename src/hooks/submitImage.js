
 export const submitImage = async (data) => {
  let secure_url
  const formData = new FormData(data);
  const { type } = formData.get("image");
  try {

    if (formData.get('image') !== undefined) {
      
    
    if (type === "image/jpeg" || type === "image/png" || type === "image/jpg") {
      formData.append("upload_preset", "hawqbn07");
      formData.append("file", formData.get("image"));
      formData.append("timestamp", Date.now() / 1000);
      formData.append("api_key", "959914195224454");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dwy6oevco/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      secure_url = data.secure_url;
      console.log("Lo que responde cloduinary");
      console.log(data);
    }
  }
    console.log(formData.get("image"));
  } catch (error) {
    console.log(error);
  }
  return secure_url;
};
