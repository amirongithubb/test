const express = require('express');
const app = express();

const ADMIN_TOKEN = "besadgojsdg4ghJLDSJOQUULJSDLGJDldskjghare"; 

app.get('/user-data', (req, res) => {
    const userToken = req.headers.authorization;

    if (userToken === ADMIN_TOKEN) {
        const userData = { name: "John", password: "SaYKam123", ssn: "123-45-678" };
        res.status(200).send(userData); 
    } else {
        res.send("Unauthorized");
        res.json({ error: "Access Denied" }); 
    }
});

app.listen(3000);
