"use client";

import { Children, ReactNode } from "react";
import { CartProvider as CProvide } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CProvide
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CProvide>
  );
};

export default CartProvider;

// "use client";

// import { ReactNode } from "react";
// import { CartProvider as USCProvider } from "use-shopping-cart";

// export default function CartProvider({ children }: { children: ReactNode }) {
//   return (
//     <USCProvider
//       mode="payment"
//       cartMode="client-only"
//       stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
//       successUrl="https://commerce-next-yt.vercel.app/stripe/success"
//       cancelUrl="https://commerce-next-yt.vercel.app/stripe/error"
//       currency="USD"
//       billingAddressCollection={false}
//       shouldPersist={true}
//       language="en-US"
//     >
//       {children}
//     </USCProvider>
//   );
// }
