const Product = require('../models/products');

module.exports = {
    async listProducts(req, res){
        try{
            const products = await Product.find();
    
            return res.send({ products });
    
        }catch(err){
            return res.status(400).send({ error: 'Error loading products'});
        } 
    },

    async queryProduct(req, res){
        try{
            const product = await Product.findById(req.params.productId);
            if(!product){
                return res.status(400).send({ error: 'Error, product not found'});
            }
            return res.send({ product });
    
        }catch(err){
            return res.status(400).send({ error: 'Error loading product ' + err});
        }
    }
}
/*
const normalUserRouter = express.Router();


normalUserRouter.use(authMiddleware);

//Lista produtos
normalUserRouter.get('/', async (req, res) =>{
    try{
        const products = await Product.find();

        return res.send({ products });

    }catch(err){
        return res.status(400).send({ error: 'Error loading products'});
    }
})

//Procura um produto
normalUserRouter.get('/:productId', async(req, res) => {
    try{
        const product = await Product.findById(req.params.productId);
        if(!product){
            return res.status(400).send({ error: 'Error, product not found'});
        }
        return res.send({ product });

    }catch(err){
        return res.status(400).send({ error: 'Error loading product ' + err});
    }
});


module.exports = (app) => app.use('/user', normalUserRouter);
*/