import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper className="px-[20px]">
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">
              Thanks for shopping with us!
          </div>
          <div className="text-lg font-bold mt-2">
              Your order has been placed successfully.
          </div>
          <div className="text-base mt-5">
              For any product related query, drop an email to
          </div>
          <div className="underline text-pink-800 font-bold">info@skinglow.com</div>

          <Link href="/" className="laptop-s:w-[35%] h-[45px] mt-8 mb-3 px-4 py-2 bg-pink-800 justify-center items-center gap-2 inline-flex hover:bg-red-950 transition-all duration-200 ease-in-out">
            <p className="text-white text-base font-normal capitalize leading-7 bg-transparent">Continue Shopping</p>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Success;