import localDatasource from "../datasource/local.datasource";

class ProductRepository {

    fetchProducts() {
        return localDatasource.get('products');
    }

    addProduct(product) {
        return localDatasource.save('products', product);
    }

    deleteProduct(productId) {
        return localDatasource.delete('products', productId);
    }

    updateProduct(productId, product) {

    }

}

export default new ProductRepository();