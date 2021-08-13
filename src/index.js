const express = require('express');
const app = express();
app.post('/products',(request,response)=> {
    return response.json([
        "produit 1",
        "produit 2",
        "produit 3",
        "produit 4",
    ]);
});
app.get('/products',(request,response)=> {
    return response.json([
        "produit 1",
        "produit 2",
        "produit 3",
        "produit 4",
    ]);
});
//show

app.get('/products/:id',(request,response)=> {
    return response.json("produit 1")
;     
});
//update
app.put('/products/:id',(request,response)=> {
    return response.json([
        "produit 10",
        "produit 2",
        "produit 3",
        "produit 4",
    ]);
});
//delete
app.delete('/products/:id',(request,response)=> {
    return response.json([
       
        "produit 2",
        "produit 3",
        "produit 4",
    ]);
});
app.listen(3333, ()=>{
    console.log('back-end started')
});