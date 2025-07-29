import { reactive } from "vue";

export function useFormValidation(schema, formData) {
  const formErrors = reactive({});

  function clearErrors() {
    Object.keys(formErrors).forEach((key) => {
      formErrors[key] = "";
    });
  }
  function validateForm() {
    clearErrors();
    const result = schema.safeParse(formData.value);
    if (!result.success) {
      const formatted = result.error.format();
      for (const field in formatted) {
        if (field === "_errors") continue;
        if (formatted[field]?._errors?.length > 0) {
          formErrors[field] = formatted[field]._errors[0];
        }
      }
      return false;
    }
    return true;
  }

  return {
    formErrors,
    validateForm,
    clearErrors,
  };
}
