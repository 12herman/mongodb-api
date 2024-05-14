 const MovieIndex = (req,res)=>{
    res.send("Get all movie lists");
};

 const MovieCreate = (req,res)=>{
    res.send("Post all movie lists");
};

 const MovieUpdate =(req,res)=>{
    res.send("Put single movie lists");
};

 const MovieDelete = (req,res)=>{
    res.send("Delete single movie lists");
};

module.exports ={
    MovieIndex,
    MovieCreate,
    MovieUpdate,
    MovieDelete
}