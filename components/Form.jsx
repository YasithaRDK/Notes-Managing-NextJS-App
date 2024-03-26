import Link from "next/link";

const Form = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl mt-16">
        <h1 className="mb-8 text-4xl font-bold text-center sm:text-5xl lg:text-6xl blue_gradient">
          Create Note
        </h1>
        <form>
          <div className="mb-6">
            <label htmlFor="title" className="authFormLabel">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="authFormInput"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="note" className="authFormLabel">
              Note
            </label>
            <textarea
              id="note"
              className="h-48 authFormInput"
              placeholder="Write your note here"
              required
            />
          </div>
          <div className="flex justify-end">
            <Link
              href="/"
              className="noteSubmitBtn !bg-red-400 hover:!bg-red-500  me-2"
            >
              cancel
            </Link>
            <button type="submit" className="noteSubmitBtn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
