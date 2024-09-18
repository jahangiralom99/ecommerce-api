const main = () => {
  return (
    <div>
      <div className="border rounded-md p-4 w-full mx-auto max-w-2xl">
        <h4 className="text-xl lg:text-2xl font-semibold">Select Your Country</h4>

        <div>
          <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Country" />
            <i className="pl-2">Germany</i>
          </label>

          <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Country" />
            <i className="pl-2">France</i>
          </label>

          <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Country" />
            <i className="pl-2">United Kingdom</i>
          </label>

          <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Country" />
            <i className="pl-2">Netherlands</i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default main;
