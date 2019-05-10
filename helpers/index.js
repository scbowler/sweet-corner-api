exports.addToDatabase = async function(values, model, match) {
    if(typeof values === 'function'){
        values = await values();
    }

    const data = await model.findAll();

    const needToAdd = values.filter(d => (
        data.length
            ? data.findIndex(match(d)) === -1
            : true
    ));

    if (needToAdd.length) {
        await model.bulkCreate(needToAdd);

        return true;
    }

    return false;
}
