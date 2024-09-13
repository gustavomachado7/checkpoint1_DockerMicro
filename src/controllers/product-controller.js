const respository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {

    try {
        const data = await respository.get();
        return res.status(200).send(data);
    } catch  {
        return res.status(404)
        };
    }



exports.post = async (req, res) => {

    const {
        ProductId,
        ProductPrice,
        ProductTitle
    } = req.body;


    if (!ProductId || !ProductPrice || !ProductTitle) {
        return res.status(400).send('Favor preencher todos os campos: Id, Preço e Título.');
    }


    await respository.create(req.body)
    res.status(201).send({
        mensagem: "Criado com sucesso"
    });
}

exports.put = async (req, res) => {
    const id = req.params.id;

    await respository.update(id, req.body)
    res.status(204).send({
        mensagem: "Atualizado com sucesso"
    });
}

