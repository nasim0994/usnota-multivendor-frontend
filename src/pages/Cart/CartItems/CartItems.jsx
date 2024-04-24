import CartItem from "./CartItem";

export default function CartItems({ carts }) {
  const mergedCarts = carts.reduce((acc, curr) => {
    const existingSeller = acc.find((item) => item.sellerId === curr.sellerId);

    if (existingSeller) {
      // If an object with the same sellerId exists, push the product to its products array
      existingSeller.products.push({
        color: curr.color,
        size: curr.size,
        discount: curr.discount,
        image: curr.image,
        price: curr.price,
        quantity: curr.quantity,
        _id: curr._id,
        title: curr.title,
        slug: curr.slug,
        stock: curr.stock,
        sellerName: curr.sellerName,
      });
    } else {
      // If not, create a new object and push it to the accumulator
      acc.push({
        sellerId: curr.sellerId,
        sellerName: curr.sellerName,
        products: [
          {
            _id: curr._id,
            color: curr.color,
            price: curr.price,
            size: curr.size,
            title: curr.title,
            quantity: curr.quantity,
            slug: curr.slug,
            title: curr.title,
            stock: curr.stock,
            image: curr.image,
            discount: curr.discount,
          },
        ],
      });
    }

    return acc;
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-6 w-[60%]">Product</th>
            <th className="px-6 w-[10%]">Price</th>
            <th className="px-6 w-[10%]">QUANTITY</th>
            <th className="px-6 w-[10%]">Total</th>
            <th className="px-6 w-[10%]">Action</th>
          </tr>
        </thead>

        {mergedCarts?.length > 0 &&
          mergedCarts?.map((items, i) => (
            <>
              <tbody key={i}>
                <tr>
                  <td colSpan={5}>
                    <p className="bg-gray-200 w-full px-4 py-2 text-primary font-medium">
                      {items?.sellerName}
                    </p>
                  </td>
                </tr>
              </tbody>
              <tbody key={items?._id}>
                {items?.products?.map((product, i) => (
                  <CartItem key={i} product={product} />
                ))}
              </tbody>
            </>
          ))}
      </table>
    </div>
  );
}
