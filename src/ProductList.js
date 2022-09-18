const products = [
  {
    id: 1,
    name: 'Espresso',
    href: '#',
    price: '1€',
    imageSrc: 'https://images.unsplash.com/photo-1596952954288-16862d37405b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'Espresso coffee',
  },
  {
    id: 2,
    name: 'Cappuccino',
    href: '#',
    price: '3€',
    imageSrc: 'https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    imageAlt: 'Cappuccino coffee',
  },
  {
    id: 3,
    name: 'Latte',
    href: '#',
    price: '4€',
    imageSrc: 'https://images.unsplash.com/photo-1618207319353-e77a284858e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'Latte',
  },
  {
    id: 4,
    name: 'Americano',
    href: '#',
    price: '2€',
    imageSrc: 'https://images.unsplash.com/photo-1570470751982-79a6d69b19c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'Americano coffee',
  },
  {
    id: 5,
    name: 'Iced coffee',
    href: '#',
    price: '3€',
    imageSrc: 'https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'Iced coffee',
  },
  {
    id: 6,
    name: 'Macchiato',
    href: '#',
    price: '2€',
    imageSrc: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'Macchiato',
  },
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-white" id="productList">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         <div className="mb-8 sm:text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Our menu</h2>
         </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}