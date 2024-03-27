export const validateNoteForm = (formData) => {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = "Title is required";
  }

  if (!formData.note.trim()) {
    errors.note = "Note is required";
  }

  return errors;
};
