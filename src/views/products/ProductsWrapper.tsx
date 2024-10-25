import { Suspense } from "react";
import { Products } from "./products";

const ProductsWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
};

export default ProductsWrapper;
