import localDatasource from "../datasource/local.datasource";

class ProductRepository {

    fetchProducts() {
        return localDatasource.get('products');
    }

    addProduct(product) {
        return localDatasource.save('products', product);
    }

    deleteProduct(productId) {

    }

    editProduct(productId, product) {

    }

}

export default new ProductRepository();