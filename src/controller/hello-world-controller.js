const helloWorld = async (_req, res) =>{
    try {
    
    return res.status(200).json({
        success:true,
        body: "Hello World!!!"  
    });
        
    } catch (error) {
       return res.status(400).json({
            success: false,
            error:  error.message || JSON.stringify(error)
        });
    };
};

export default helloWorld;