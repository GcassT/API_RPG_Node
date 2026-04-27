
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//Ruta de prueba
app.get('/',(req,res) => {
    res.send('API RPG FUNCIONADO!');
});

let personajes = [];
let id_actual = 1;

//Crear un personaje
app.post('/personajes', (req, res) => {
    const nuevo_personaje = req.body;

    nuevo_personaje.id = id_actual ++;

    personajes.push(nuevo_personaje);

    res.status(201).json(nuevo_personaje);
});

//Devolver la lista con los personajes que tenemos
app.get('/personajes',(req, res) => {
    res.status(200).json(personajes);
});

//Consultar personaje por id
app.get('/personajes/:id', (req, res) => {
    const id_buscado = parseInt(req.params.id);

    const personaje_encontrado = personajes.find(p => p.id === id_buscado);
    if (personaje_encontrado != undefined) {
        res.status(200).json(personaje_encontrado);

    } else {
        res.status(404).json({error: 'Personaje No Encontrado'})
    }
        
});

//Actualizar personaje 
app.put('/personajes/:id',(req,res) => {
    const id_buscado = parseInt(req.params.id);

    const indice = personajes.findIndex(p => p.id === id_buscado);

    if (indice != -1) {
        personajes[indice] = {id: id_buscado, ...req.body};
        res.status(200).json(personajes[indice]);
    } else {
        res.status(404).json({error: 'Personaje no encontrado'});
    }
});

//Eliminar personaje
app.delete('/personajes/:id',(req, res) => {
    const id_buscado = parseInt(req.params.id);

    const indice = personajes.findIndex(p => p.id === id_buscado);

    if (indice != -1) {
        personajes.splice(indice, 1);

        res.status(200).json({mensaje: 'Personaje elimnado exitosamente'});
    } else {
        res.status(404).json({error: 'Personaje no encontrado'});
    }
    
})

//Batalla
app.post('/batalla',(req, res) => {
    const {id_personaje_1, id_personaje_2} = req.body;

    const personaje_1 = personajes.find(p => p.id === id_personaje_1);
    const personaje_2 = personajes.find(p => p.id === id_personaje_2);

     if (personaje_1 && personaje_2 != undefined) {

        const puntaje_1 = (personaje_1.estadisticas.fuerza + personaje_1.estadisticas.magia + personaje_1.estadisticas.conocimiento) - (personaje_2.estadisticas.agilidad);
        const puntaje_2 = (personaje_2.estadisticas.fuerza + personaje_2.estadisticas.magia + personaje_2.estadisticas.conocimiento) - (personaje_1.estadisticas.agilidad);

        const detalles = {
            [personaje_1.nombre]: puntaje_1,
            [puntaje_2.nombre]: puntaje_2
        };

        if (puntaje_1 > puntaje_2) {
            res.status(200).json({mensaje: `${personaje_1.nombre} gana la batalla`});

        } else if (puntaje_2 > puntaje_1) {
            res.status(200).json({mensaje: `${personaje_2.nombre} gana la batalla`});

        } else {
            res.status(200).json({mensaje: `Es un empate`, puntajes: detalles});
        }

    } else {
        res.status(404).json({error: `Uno o ambos personajes no fueron encontrados`});
    }

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

