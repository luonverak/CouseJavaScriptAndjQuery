const toTitleCase = (str) => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

/*
    Block get category
*/
export const getCategory = async () => {

    try {

        const response = await fetch('https://fakestoreapi.com/products');

        if (response.status != 200) {
            throw new Error('Api status failed');
        }

        const records = await response.json();

        const category = [];
        records.filter(e => {
            if (!category.includes(e['category'])) {
                category.push(e['category']);
            }
        });

        let content = '';
        category.forEach(e => {
            content += `<li>${toTitleCase(e)}</li>`;
        });

        (document).getElementsByClassName("header-menu")[0].innerHTML = `<ul>${content}</ul>`;

    } catch (error) {
        console.log('Get Category Exception: ' + error);
        throw error;
    }
}
getCategory();