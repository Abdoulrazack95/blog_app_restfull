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

//RESTFUL  ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
})

app.get("/blogs", function(req, res){
    blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }else{
            res.render("index", {blogs: blogs});
        }
    })
})

// NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("The server has Started");
})
