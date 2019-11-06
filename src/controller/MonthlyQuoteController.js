// const MonthlyQuote = require("../models/MonthlyQuote")
// module.exports = {
//   async store(req, res) {
//     // Correção: não era necessário mexer no controller.
//     const Monthly = await MonthlyQuote.create(req.body)
//     return res.json(Monthly)
//   },
//   async list(req, res) {
//     const Monthly = await MonthlyQuote.find({})
//     return res.json(Monthly)
//   },
//   async index(req, res) {
//     const Monthly = await MonthlyQuote.findOne({ _id: req.params.id })
//     return res.json(Monthly)
//   },
//   async update(req, res) {
//     const Monthly = await MonthlyQuote.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     )
//     return res.json(Monthly)
//   },
//   async destroy(req, res) {
//     await MonthlyQuote.deleteOne({ _id: req.params.id })
//     return res.json({
//       message: "Exclusão realizada com sucesso!"
//     })
//   }
// }