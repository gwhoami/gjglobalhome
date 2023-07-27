import { Link } from "react-router-dom";

const ShoppingHome = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-green-100">
            <h1 className="text-2xl">Welcome to shopping home</h1>
            <Link to="/shopping/products" className="underline mt-5">Show products</Link>
        </div>
    );
}
export default ShoppingHome;