let users = ['ankit', 'rahul', 'priya']



const getuser = async (req, res) => {
    try {
        console.log(req.userid)
        res.send(users)
    } catch (error) {
        res.json({
            message: 'failed to get data'
        })
    }
}

const getteacher = async(req,res)=>{
    try {

        let teacher = ['Rajesh', 'Nandan', 'Pankaj']


        res.send(teacher)
        
    } catch (error) {
        
    }
}

export { getuser , getteacher}


