// const Commerce = require("../models/Commerce")
// module.exports = {
//   async store(req, res) {
//     // Correção: não era necessário mexer no controller.
//     const commerce= await Commerce.create(req.body)
//     return res.json(MonthlyQuote)
//   },
//   async list(req, res) {
//     const commerce = await Commerce.find({})
//     return res.json(commerce)
//   },
//   async index(req, res) {
//     const commerce = await Commerce.findOne({ _id: req.params.id })
//     return res.json(commerce)
//   },
//   async update(req, res) {
//     const commerce = await Commerce.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     )
//     return res.json(commerce)
//   },
//   async destroy(req, res) {
//     await Commerce.deleteOne({ _id: req.params.id })
//     return res.json({
//       message: "Exclusão realizada com sucesso!"
//     })
//   }
// }