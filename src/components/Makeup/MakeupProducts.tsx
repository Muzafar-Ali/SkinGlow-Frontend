import Link from "next/link";
import ProductCard from "../ProductCard";
import { MakeupProductType } from "@/utils/types";

const MakeupProducts = ({ products }: {products: MakeupProductType[]}) => {
  return (
    <div className="w-[1132px]">
      <section className="grid grid-cols-2 tablet-s:grid-cols-3 laptop-m:grid-cols-4 gap-[24px]">
        {products?.map((product) => (
          <Link href={`/product-makeup/${product?.slug}`} key={product?._id}>
            <div>
              <ProductCard product={product} />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default MakeupProducts;
