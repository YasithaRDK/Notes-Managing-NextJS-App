export const validateNoteForm = (formData) => {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = "Title is required";
  } else if (formData.title.length > 30) {
    errors.title = "Title too long";
  }

  if (!formData.note.trim()) {
    errors.note = "Note is required";
  }

  return errors;
};
