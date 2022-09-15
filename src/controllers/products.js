const { Product } = require('../../models')

// -------------------------------------------------------------------------------------

exports.getProducts = async (req, res) => {
  try {
    const data = await Product.findAll()
    res.json(data)
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.getProductById = async (req, res) => {
  const id = req.params.id

  try {
    const data = await Product.findByPk(id)
    if (data) {
      res.json(data)
    } else {
      res.status(404).send({
        message: `Cannot find data with id=${id}.`,
      })
    }
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.createProduct = async (req, res) => {
  try {
    await Product.create(req.body)
    res.json({
      message: 'Product Created',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.json({
      message: 'Product Updated',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.json({
      message: 'Product Deleted',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
