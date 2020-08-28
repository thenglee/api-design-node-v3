export const getOne = model => async (req, res) => {
  try {
    const data = await model.findById(req.params.id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400)
  }
}

export const getMany = model => async (req, res) => {
  try {
    const data = await model.find({ createdBy: req.user._id })
    res.status(200).json({ data })
  } catch (err) {
    res.status(400)
  }
}

export const createOne = model => async (req, res) => {
  try {
    const data = await model.create({ createdBy: req.user._id, ...req.body })
    res.status(201).json({ data })
  } catch (err) {
    res.status(400)
  }
}

export const updateOne = model => async (req, res) => {
  try {
    const data = await model.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    res.status(200).json({ data })
  } catch (err) {
    res.status(400)
  }
}

export const removeOne = model => async (req, res) => {
  try {
    const data = await model.findByIdAndDelete(req.params.id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400)
  }
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
