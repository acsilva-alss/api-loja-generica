const Product = require('../models/products');

module.exports = {
    async listProducts(req, res){
        try{
            const  { page = 1 } = req.query;
            const count = await Product.countDocuments();
            const products = await Product.find()
            .limit(5)
            .skip((page - 1) * 5);
            
            
            res.header('X-Total-Count', count);
            return res.send({ products});
    
        }catch(err){
            return res.status(400).send({ error: 'Error loading products '+ err});
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
