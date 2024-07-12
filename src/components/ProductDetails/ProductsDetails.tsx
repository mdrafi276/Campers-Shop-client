import {
    useGetSingleProductQuery,
    useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/api/featcher/cartSlice";
import { toast } from "sonner";
import BasicAccordion from "./AcrodionForDetailsPage";
import AccrodionForDetailsPage from "./AcrodionForDetailsPage";

const ProductDetails = () => {
    const { id } = useParams();

    const { data, isLoading } = useGetSingleProductQuery(id);

    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart);
    const currentProduct = cart?.find((item) => item._id === id);
    // console.log(currentProduct);

    const handleAddToCart = async () => {
        const { quantity: oldQuantity, ...otherData } = data.data;

        const cartData = {
            ...otherData,
            quantity: 1,
        };

        dispatch(addToCart(cartData));

        toast.success("Product added to cart");
    };
    if (isLoading) {
        return <div className="text-white bg-black pt-10 text-center">Loading...</div>;
    }
    const discount = data?.data?.price + 18;



    return (
        <section className=" w-full bg-black min-h-[400px]  mx-auto py-16 px-3 lg:px-6 flex flex-col md:flex-row md:item-center lg:items-start gap-5">
            <div className=" overflow-hidden">
                <img
                    className="w-full  h-[350px] md:h-[350px] md:w-full mx-auto lg:h-[570px] lg:w-[900px] rounded-[20px]"
                    src={data?.data?.image}
                    alt=""
                />
            </div>
            <div className=" border-2 p-2 lg:p-6 w-full mx-auto md:w-[420px] md:h-full lg:w-[700px] rounded-[20px] border-red-600  ">
                <div className="py-4 border-b border-white space-y-2">
                    <div className="flex mb-1 lg:mb-10 items-center justify-between gap-2">
                        <h2 className=" text-[15px]  md:text-2xl lg:text-4xl font-medium text-white font-young-serif">
                            {data?.data?.name}
                        </h2>
                        <Rating
                            emptySymbol={<Star size={22} color="red" />}
                            fullSymbol={<Star size={22} color="red" fill="red" />}
                            fractions={2}
                            initialRating={data?.data?.rating}
                            stop={5}
                        />
                    </div>
                    <div className="flex pb-4 border-b-2 border-gray-100 mb-2 md:pb-6 lg:pb-8 justify-start gap-5 lg:gap-8 items-center">
                        <h3 className="text-[#FF0000] text-[15px] md:text-xl lg:text-3xl font-normal ">
                            ${data?.data?.price}.00 USD
                        </h3>
                        <h3 className="text-white text-xl line-through font-bold ">
                            ${discount}.00 USD
                        </h3>
                    </div>

                    <p className="text-white py-2 md:py-5 lg:py-5">{data?.data?.description}</p>
                </div>
                <div className='py-4 md:py-6'>
                    <h1 className=" text-[16px] md:text-[20px] text-white font-bold">
                        Available quantity: {data?.data?.quantity}
                    </h1>

                </div>
                <div className="pt-5 w-[99%] mx-auto">
                    <div className="space-y-1">

                        <div className="flex items-center justify-between gap-2">
                            {data?.data?.stock ? (
                                <p className="text-green-500 text-xl font-bold flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>{" "}
                                    Stock
                                </p>
                            ) : (
                                <p className="text-red-400  text-xl font-bold flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>{" "}
                                    Out Of Stock
                                </p>
                            )}
                            <p className="text-[12px] text-white font-medium flex items-center gap-1">
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
                                {data?.data?.category}
                            </p>
                        </div>
                    </div>

                    <div>
                        <Button
                            onClick={handleAddToCart}
                            disabled={
                                !data?.data?.stock ||
                                data?.data?.quantity === currentProduct?.quantity
                            }
                            className="w-full  bg-[#DA000B] hover:bg-[#b51e25] text-white py-3 rounded-[10px] mt-4"
                        >
                            Add To Cart
                        </Button>
                    </div>

                    <div>
                        <AccrodionForDetailsPage data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
