exports.addToDatabase = async function(values, model, match) {
    const data = await model.findAll();

    const needToAdd = values.filter(d => (
        data.length
            ? data.findIndex(match(d)) === -1
            : true
    ));

    if (needToAdd.length) {
        model.bulkCreate(needToAdd);
    }
}
