import Link from "next/link";

const Form = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl w-full mt-16">
        <h1 className="blue_gradient text-5xl font-bold mb-8">Create Note</h1>
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
              className="authFormInput h-48 resize-none"
              placeholder="Write your note here"
              required
            />
          </div>
          <div className="flex justify-end">
            <Link href="/" className="noteSubmitBtn !bg-red-500  me-2">
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
