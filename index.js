const express = require('express');
const cors = require('cors');
const {resolve} = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(resolve(__dirname,'client','dist')));

app.get('/api/test', (req, res) => {
    res.send({
        success:true,
        message:'API test working',
        something:"Just some random text is going on here"
    });
});

app.get('/api/user',(req, res) =>{
    res.send({
        success:true,
        username:'FukuiMascot',
        email:'fukui@city.com',
        name:"Hapiryu Yumemaru"

    });
});

app.post('/api/sign-in',(req,res) => {
    console.log('Data from client:',req.body);

    res.send({
        success: true,
        postData: req.body, 
        moreData: 'Here is some more data'
    });
});

app.get('*',(req,res) =>{
    res.sendFile(resolve(__dirname,'client','dist','index.html'));
});

app.listen(PORT, () =>{
    console.log('Server running on PORT:' + PORT);
});