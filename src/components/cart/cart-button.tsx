// import { ShoppingBag } from "lucide-react";

// import { useUI } from "../../context/ui.context";
// import { useContext } from "react";
// import { CartContext } from "../../context/shopContext";

// import MiniCart from "./minicart";
// const CartButton = () => {
//   const { cart }: any = useContext(CartContext);
//   const { cartOpen }: any = useContext(CartContext);
//   const { setCartOpen }: any = useContext(CartContext);
  

//   let cartQuantity = 0;
//   cart?.map((item: any) => {
//     return (cartQuantity += item?.variantQuantity);
//   });

//   return (
//     <>
//       <button
//         className="relative p-2"
//         onClick={() => setCartOpen(!cartOpen)}
//         aria-label="cart-button"
//       >
//         <MiniCart cart={cart} />
//         <ShoppingBag className="h-4 w-4" />

//         <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
//           {cartQuantity}
//         </span>
//       </button>
//     </>
//   );
// };

// export default CartButton;



import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/shopContext";
import MiniCart from "./minicart";

const CartButton = () => {
  const { cart }: any = useContext(CartContext);
  const { cartOpen }: any = useContext(CartContext);
  const { setCartOpen }: any = useContext(CartContext);

  let cartQuantity = 0;
  cart?.map((item: any) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all w-14 h-14"
        onClick={() => setCartOpen(!cartOpen)}
        aria-label="cart-button"
      >
        <ShoppingBag className="h-6 w-6" />
        {cartQuantity > 0 && (
          <span className="absolute top-2 right-2 h-5 w-5 rounded-full bg-[linear-gradient(90.51deg,#6eaf4c_0.42%,#b7d349_99.54%)] text-white text-xs flex items-center justify-center">
            {cartQuantity}
          </span>
        )}
      </button>

      {/* Mini cart drawer */}
      <MiniCart cart={cart} />
    </>
  );
};

export default CartButton;
