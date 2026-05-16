export const getProduct = async () => {

    try {

        const response = await fetch('https://fakestoreapi.com/products');

        if (response.status != 200) {
            throw new Error('Api status failed');
        }

        const records = await response.json();
        console.log(records);

        const product = [];

    } catch (error) {
        console.log('Get Product Exception: ' + error);
        throw error;
    }
}

getProduct();