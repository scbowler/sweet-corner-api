exports.notFound = (req, res) => {
    res.status(404).send('Unknown API route');
}
