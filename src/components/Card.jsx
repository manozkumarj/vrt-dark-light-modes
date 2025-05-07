const Card = () => {
  return (
    <div className="relative mx-auto w-full max-w-sm border-2 border-neutral-300 rounded-lg bg-dynamic-bg p-8">
      <h4 className="mb-4 mt-2 w-full text-3xl font-bold text-dynamic-text">
        Dark Mode
      </h4>
      <p className="text-dynamic-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum sed
        blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque
        optio impedit cum voluptatem facilis minima, quasi laborum. Nihil,
        quaerat.
      </p>

      <button className="bg-dynamic-bg hover:bg-dynamic-bg transition-colors text-dynamic-text font-semibold w-full py-2 rounded-md border-2 border-neutral-300 mt-8 cursor-pointer">
        Sign Up
      </button>
    </div>
  );
};

export default Card;
