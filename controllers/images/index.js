const fs = require('fs');
const { resolve } = require('path');
const { images } = require(__basedir + '/db/models');

function sendImage(file, type, res){
    const imagePath = resolve(__basedir, 'client_assets', 'products', type, file);

    if (!fs.existsSync(imagePath)) {
        return res.status(404).send('No image found');
    }

    res.sendFile(imagePath);
}

exports.getByName = (req, res) => {
    const { file = null, type = null } = req.params;

    if(!file || !type){
        res.status(422).send('Incomplete data');
    }

    sendImage(file, type, res);
}

exports.getByPid = async (req, res) => {
    const { pid } = req.params;

    const image = await images.findByPid(pid, {
        attributes: ['file', 'type']
    });

    if(!image){
        return res.send('Unknown image id');
    }

    const { file, type } = image;

    sendImage(file, type, res);
}
