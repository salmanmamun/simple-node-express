const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());


const port = 5000;


app.get('/', (req, res) => {
    res.send('Hellow WOW Im excirted to learn with nodemon happy happy happy');
});

const users = [
    { id: 0, name: 'sabana', email: 'sabana@gmail.com', phone: '15750000001' },
    { id: 1, name: 'sabnur', email: 'sabnur@gmail.com', phone: '15750000002' },
    { id: 2, name: 'srabonti', email: 'srabonti@gmail.com', phone: '15750000003' },
    { id: 3, name: 'sonia', email: 'sonia@gmail.com', phone: '15750000004' },
    { id: 4, name: 'suchorita', email: 'suchorita@gmail.com', phone: '15750000005' },
    { id: 5, name: 'ssuchina', email: 'ssuchina@gmail.com', phone: '15750000006' },

]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        // const searchResult = users.filter(user => user.name.toLocaleLowercase().includes(search));
        // res.send(searchResult);
    }
    else {
        res.send(users)
    }

    res.send(users)
});
// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
});



// Api dynamic
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);

})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orang', 'banana', 'appla'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Ymmi Ymmi tok marka fazli');
})


app.listen(port, () => {
    console.log('Listening to port', port);
});