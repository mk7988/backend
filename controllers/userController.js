

export const registrationController = (req,res) =>  {   
    try {
       res.send("hi ma registration")
    } catch (error) {
        console.log(error)
    }

}


export const loginController = (req,res) =>{
    try {
        res.send("hi i m login")
    } catch (error) {
        console.log(error)
    }
}