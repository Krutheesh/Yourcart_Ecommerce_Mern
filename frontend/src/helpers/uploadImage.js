const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`

const uploadImage  = async(image) => {
    const formData = new FormData()
    console.log(image)
    formData.append("file",image)
    formData.append("upload_preset","mern_product")
    
console.log(formData)
try{
    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
        
    })
  console.log(dataResponse)
    return dataResponse.json()
}catch(err){
    console.log(err)
}
    

}

export default uploadImage 