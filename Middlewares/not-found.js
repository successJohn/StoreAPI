const notFound = (req, res) => res.status(404).json({msg: "Routr does not exist"})

module.exports = notFound;