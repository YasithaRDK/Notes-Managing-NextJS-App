import Link from "next/link";

const Form = ({ formData, onChange, onSubmit, name, error }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-center sm:text-5xl lg:text-6xl blue_gradient">
          {name} Note
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="authFormLabel">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="authFormInput"
              placeholder="Enter title"
              value={formData.title}
              onChange={onChange}
            />

            <p className="text-red-600 text-[13px] mb-4">{error.title}</p>
          </div>
          <div className="mb-6">
            <label htmlFor="note" className="authFormLabel">
              Note
            </label>
            <textarea
              id="note"
              className="h-64 authFormInput"
              placeholder="Write your note here"
              value={formData.note}
              onChange={onChange}
            />

            <p className="text-red-600 text-[13px] mb-4">{error.note}</p>
          </div>
          <div className="flex justify-end">
            <Link
              href="/"
              className="noteSubmitBtn !bg-red-400 hover:!bg-red-500  me-2"
            >
              cancel
            </Link>
            <button type="submit" className="noteSubmitBtn">
              {name === "Create" ? name : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
