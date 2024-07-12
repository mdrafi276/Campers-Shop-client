import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductCart = ({ product }) => {
    return (
        <div

            className=" lg:w-[238px] h-full rounded-lg border mx-auto border-gray-200 flex flex-col gap-3"
        >
            <div className="flex-1 flex-grow overflow-hidden rounded-lg">
                <img
                    className="w-full object-cover  md:h-h-[170px] lg:h-[170px] rounded-[15px]"
                    src={product?.image}
                    alt={product?.name}
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="space-y-1">
                    <div className="flex flex-row justify-center gap-2 items-center px-2">
                        <h3 className="text-[13px] font-bold text-[#2FD06D]  py-1 px-4 rounded-[15px] bg-[#1D3534] ">${product?.price}</h3>
                        <h3 className="text-[13px] font-bold text-[#2FD06D]  py-1 px-4 rounded-[15px] bg-[#1D3534] ">{product?.name}</h3>

                    </div>

                    <div className="flex justify-between items-center">
                        <h3 className=" font-semibold text-orange-500">
                            $ {product?.price} USD
                        </h3>
                        <p className="text-sm text-gray-500 font-medium flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6h.008v.008H6V6Z"
                                />
                            </svg>{" "}
                            {product?.category}
                        </p>
                    </div>
                </div>

                <Link to={`/products-details/${product?._id}`}>
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                        See Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
