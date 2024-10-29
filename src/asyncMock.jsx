const products = [
    {
        id: '1',
        name: 'Earpods JK-08',
        price: 34500,
        category: 'Electronicos',
        img: 'Earpods-01.jpg',
        stock: 15,
        description: 'Earpods inalambricos, con cargador, 4 hs. de musica ininterrumpida.'
    },
    {
        id: '2',
        name: 'Cuaderno',
        price: 14500,
        category: 'Bazar',
        img: 'Cuaderno-01.jpg',
        stock: 200,
        description: 'Cuaderno de 90 paginas, Tapa de cuerina, con elastico para cierre'
    },
    {
        id: '3',
        name: 'Bolso Expandible',
        price: 23700,
        category: 'Textiles',
        img: 'Bolso-Expand-01.jpg',
        stock: 65,
        description: 'Bolso expandible reforzado'
    },  
    {
        id: '4',
        name: 'Botella HydraGo 1200ml',
        price: 15600,
        category: 'Bazar',
        img: 'Botella-HydraGo-1200ml-01.jpg',
        stock: 450,
        description: 'Botella HydraGo de 1200ml de capacidad, en varios colores con aro para colgar'
    },
    {
        id: '5',
        name: 'Botella Viper',
        price: 9300,
        category: 'Bazar',
        img: 'Botella-Viper-01.jpg',
        stock: 150,
        description: 'Botella Viper de acrilico, en varios colores'
    },
    {
        id: '6',
        name: 'Corta Pizza Mass',
        price: 7400,
        category: 'Bazar',
        img: 'Corta-Pizza-Mass-01.jpg',
        stock: 90,
        description: 'Corta Pizza Mass 01 con filo de acero y mango de madera'
    },
    {
        id: '7',
        name: 'Lamp Centry',
        price: 27400,
        category: 'Electronicos',
        img: 'Lamp-Centry-01.jpg',
        stock: 80,
        description: 'Lampara Centry 01 con bateria recargable de larga duracíon, 4 modos de iluminación, ideal para camping'
    },
    {
        id: '8',
        name: 'Mug Horizon',
        price: 11200,
        category: 'Bazar',
        img: 'Mug-Horizon-01.jpg',
        stock: 230,
        description: 'Jarro Termico Horizon. con cierre de acero y agarre antideslizante'
    },
    {
        id: '9',
        name: 'Parlante Pulse',
        price: 38500,
        category: 'Electronicos',
        img: 'Parlante-Pulse-01.jpg',
        stock: 115,
        description: 'Parlante Pulse bluetooth, con bateria de 8 hs, terminación simil madera'
    },
    {
        id: '10',
        name: 'Set Burdeos',
        price: 17800,
        category: 'Bazar',
        img: 'Set-Burdeos-01.jpg',
        stock: 80,
        description: 'Kit implementos sacacorchos Burdeos Negro'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter((prod => prod.category === categoryId)))
        }, 500)
    })
}