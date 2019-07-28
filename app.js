var express     =   require("express");
    mongoose    =   require("mongoose");
    bodyParser  =   require("body-parser");
    app         =   express();

    mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });

app.listen(process.env.PORT || 3000, function(){
    console.log("The server has Started");
})
