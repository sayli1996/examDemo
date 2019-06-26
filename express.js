var express=require('express');
var app=express();
var productfunction=function(req,res)
{
var product=[{
var id:1,
var pName:"Kurcurrey",
var quantity:500,
var price:1000
}]
};
res.send(product);

app.get('/product',productfunction);
var server=app.listen(2000);