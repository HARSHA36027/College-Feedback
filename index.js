const express= require("express");
const app=express();
const port=8000;
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static (path.join(__dirname,"public")));


     let datas=[
        {
            name:"Hii User",
            course:"courses",
            semister:"all sem",
            content:"Welocome to ACET "
            
           
     }
    ]
     
app.get("/submit",(req,res)=>{
    res.render("login.ejs");
});



app.post("/login",(req,res)=>{  

    let{username,password}=req.body;
    let id="acetcollege";
    let password1="acet12345678";
    if(id===username && password1===password){
        res.render("create.ejs");
    }
    else{
        res.render("tryagain.ejs");
    }
  });


    // app.post("/create",(req,res)=>{
        //      let{course,semister}=req.body;
            
             
        // let course1="BCA";
        //  let c1="bca";
        //   let course2="BBA";
        //     let course3="B.Tech";
        //       let course4="MCA";
        //       let sem1="1";
        //          let sem2="2";
        //             let sem3="3";
        //                let sem4="4";
        //                   let sem5="5";
        //                      let sem6="6";
        //                         let sem7="7"; 
        //                           let sem8="8";
                           
        //                       if(course1===course && (sem1===semister||sem2===semister||sem3===semister||sem4===semister
        //                         ||sem5===semister||sem6===semister)){
        //                            res.render("create.ejs");
        //                         }
                                    
        //                             else   if(course===course2 && (semister===sem1||semister===sem2||semister===sem3||
        //                             semister===sem4||semister===sem5||semister===sem6)){
        //                            res.render("create.ejs");
                                 
        //                             }
                                   
        //                             else if(course===course3 && (semister===sem1||semister===sem2||semister===sem3||
        //                             semister===sem4||semister===sem5||semister===sem6||semister===sem7||semister===sem8)){
        //                            res.render("create.ejs");
        //                             }
                                   
        //                          else if(course===course4 && (semister===sem1||semister===sem2||semister===sem3||
        //                             semister===sem4)){
        //                            res.render("create.ejs");
                                 
        //                             }
        //                             else{
        //                                 res.send("tata4");
        //                             }
// });


app.post("/main",(req,res)=>{
  let{name,course,semister,content}=req.body;
        let course1="BCA";
          let course2="BBA";
            let course3="B.Tech";
              let course4="MCA";
              let sem1="1";
                 let sem2="2";
                    let sem3="3";
                       let sem4="4";
                          let sem5="5";
                             let sem6="6";
                                let sem7="7"; 
                                  let sem8="8";
                           
                              if(course1===course && (sem1===semister||sem2===semister||sem3===semister||sem4===semister
                                ||sem5===semister||sem6===semister)){
                                  datas.push({name, course, semister,content});
                                    res.redirect("/main"); 
                                }
                                    
                                    else   if(course===course2 && (semister===sem1||semister===sem2||semister===sem3||
                                    semister===sem4||semister===sem5||semister===sem6)){
                                  datas.push({name, course, semister,content});
                                        res.redirect("/main");
                                    }
                                   
                                    else if(course===course3 && (semister===sem1||semister===sem2||semister===sem3||
                                    semister===sem4||semister===sem5||semister===sem6||semister===sem7||semister===sem8)){
                                    datas.push({name, course, semister,content});
                                            res.redirect("/main");
                                    }
                                   
                                 else if(course===course4 && (semister===sem1||semister===sem2||semister===sem3||
                                    semister===sem4)){
                                  datas.push({name, course, semister,content});
                               res.redirect("/main");
                                 
                                    }
                                    else{
                                        res.render("tryagaincourse");

                                    }
 
});
app.post("/feed",(req,res)=>{
res.render("create.ejs");
})

app.get("/main",(req,res)=>{
    res.render("main.ejs",{datas});
});

// app.post("/submit",(req,res)=>{
//     res.render("");
// });

app.listen(port,()=>{
    console.log("listen",port);
})
