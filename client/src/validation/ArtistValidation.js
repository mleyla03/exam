import * as Yup from 'yup';

export const ArtistSchema = Yup.object().shape({

   
    imageURL: Yup.string().required("image is required"),
    names: Yup.string().required("names is required"),
    title:Yup.string().required("gender is gender")
    
    
})