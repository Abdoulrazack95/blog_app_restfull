var express     =   require("express");
    mongoose    =   require("mongoose");
    bodyParser  =   require("body-parser");
    app         =   express();

    mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });

// App configuration
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

// Mongoose Configuration
var blogSchema = new mongoose.Schema({
    title:      String,
    image:      String,
    body:       String,
    created:    {type:Date, default: Date.now}
})

var blog = mongoose.model("blog", blogSchema);


app.listen(process.env.PORT || 3000, function(){
    console.log("The server has Started");
})
