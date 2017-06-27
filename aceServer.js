const express = require(`express`),
    app = express(),
    bodyParser = require(`body-parser`);

app.use(bodyParser.json());
app.use(express.static(`public2`));
app.listen(3042,()=>console.log(`server is listening on port 3042`))
