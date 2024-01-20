import AddProductButton from "./components/AddProductButton";

const Product = () => {
  return (
    <>
      <div className="border-2 border-red-300 w-full px-5">
        <div className="flex items-center justify-between">
          <h1>Product</h1>
          {/* ADD PRODUCT  BUTTON */}
          <AddProductButton />
        </div>
      </div>
    </>
  );
};

export default Product;

{
  /* <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition show={isShowing} as="a" href="/my-url" className="font-bold">
        I will appear and disappear.
      </Transition> */
}
