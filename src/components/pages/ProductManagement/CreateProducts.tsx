import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddProductMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const apiKey = import.meta.env.VITE_IMAGEBB_API_KEY;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const CreateProduct = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [addProduct, { isLoading }] = useAddProductMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const imgData = await response.json();

        setLoading(false);


        const productData = {
            name: data.name,
            price: data.price,
            description: data.description,
            image: imgData.data.url,
            quantity: data.quantity,
            category: data.category,
        };
        console.log(productData)

        try {
            const res = await addProduct(productData).unwrap();
            if (res?.success) {
                toast.success(res?.message);
                navigate("/product-management");
            }
        } catch (err) {
            toast.error("Failed to create product");
        }
    };

    return (
        <div className='bg-gradient-to-tr p-5 lg:p-0 from-[#6d0082] via-[#000]  to-[#000000]'>
            <div className=" w-lg  lg:w-[1000px]  mx-auto pt-6 lg:t-8">
                <div>
                    <h1 className="text-3xl font-bold mb-5 text-center text-white ">
                        Create A Product
                    </h1>
                </div>

                <form
                    className="p-8 bg-white/5 lg:rounded-3xl border w-full  mx-auto text-white border-white  rounded-lg"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className=" flex flex-col gap-6 py-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name " className="text-white">
                                Name
                            </Label>
                            <Input
                                id="name"
                                className="text-white"
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm ">Name is required</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="description  " className="text-white">
                                Description
                            </Label>
                            <Input
                                id="description"
                                className="text-white"
                                {...register("description", { required: true })}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm">Description is required</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="text-white" htmlFor="image">
                                Image
                            </Label>
                            <Input
                                className=" border text-white border-white "
                                id="image"
                                type="file"
                                {...register("image", { required: true })}
                            />

                            {errors.image && (
                                <p className="text-red-500 text-sm">Image is required</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="category " className="text-white">
                                Category
                            </Label>
                            <Input
                                id="category"
                                className="text-white"
                                {...register("category", { required: true })}
                            />
                            {errors.category && (
                                <p className="text-red-500 text-sm">Category is required</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="price " className="text-white">
                                Price
                            </Label>
                            <Input
                                type="number"
                                id="price"
                                className="text-white"
                                {...register("price", { required: true })}
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm">Price is required</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="quantity" className="text-white">
                                Quantity
                            </Label>
                            <Input
                                type="number"
                                id="quantity"
                                className="text-white"
                                {...register("quantity", { required: true })}
                            />
                            {errors.quantity && (
                                <p className="text-red-500 text-sm">Quantity is required</p>
                            )}
                        </div>
                        <Button
                            className="w-full rounded-[10px]  text-[13px] font-serif lg:text-[16px] bg-red-500 hover:bg-red-600"
                            type="submit"
                        >
                            {loading || isLoading ? "Loading..." : "Create Product"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
