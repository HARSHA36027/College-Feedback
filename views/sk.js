<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <link rel="stylesheet" href="/main.css">
</head>
<body>
    <div class="head">
    <h2>Welcome</h2>
    <form method="post" action="/create">
    <button>Feed Again</button>
    </form>
    </div>
   <% for ( data of datas){ %>
    <div class="container">
     <div class="name">
        <p>Name: <%=data.name%></p>
    </div>
    <div class="content">
        <p><span class="feed">Feed: </span> <%= data.content %> </p>
        </div>
</div>
  <% } %>
</form>
</body>
</html>


body{
    background-color: whitesmoke;
}
.container{

    background-color: white;
    margin-top: 20px;
    font-size: 20px;

}
 
.name{
 display: flex;
 font-weight: bold;
 justify-content: left;
 background-color: white;
 align-items: center;
 padding-left: 20px;
 font-family: 'Courier New', Courier, monospace;
}
.content{
 padding-left: 140px;
 padding-bottom: 20px;
 font-family: 'Courier New', Courier, monospace;
}
.feed{
    font-weight: bold;
}

.head{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0px;
    background-color: wheat;
    z-index: 1;
}
button{
    font-family: 'Courier New', Courier, monospace;
    color: blue;
    width: 140px;
    height: 30px;
    font-size: 20px;
    background-color: white;
    border: 1px solid whitesmoke;
    border-radius: 6px;
}
h2{
    color: darkorange;
    font-family: 'Courier New', Courier, monospace;

}

