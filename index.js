import express from "express";

const app = express();

app.use(express.json());

// funções disponíveis
app.get("/recursos", (req, res) => {
    
    res.send({"mensagem": "Você pode utilizar os endpoints: /recursos para listar todos os recursos, /cf converte Celsius para Fahrenheit, /fc converte Fahrenheit para Celsius, e /kc converte Celsius para Kelvin."})
})

// Celsius para Fahrenheit
// F = (C x 9/5) + 32
app.post("/cf", (req, res) => {
    const c = req.body.c;

    const f = (c * (9/5)) + 32;

    res.send({f})
})

// Fahrenheit para Celsius
// C = (F - 32) x 5/9
app.post("/fc", (req, res) => {
    const f = req.body.f;

    const c = ((f - 32) * (5/9))
    
    res.send({c})
})

// Celsius para Kelvin
// K = C + 273.15
app.post("/kc", (req, res) => {
    const c = req.body.c;

    const k = c + 273.15

    res.send({k})
})

app.listen(3000, () => {
    //return {"mensagem" : "Servidor funcionando!"}
    console.log("Servidor escutando na porta 3000!");
})