import * as Yup from "yup";

const Validation = () => {
  Yup.addMethod(Yup.string, "firstCapitalLetter", function () {
    return this.test(
      "first-capital-letter",
      "La primera letra debe ser mayúscula.",
      (value) => {
        if (value && value.length > 0) {
          const firstLetter = value.substring(0, 1);
          return firstLetter === firstLetter.toUpperCase();
        }
        return true;
      }
    );
  });

  Yup.addMethod(Yup.string, "ignoreNullOrZeroValue", function () {
    return this.test(
      "ignore-null-or-zero-value",
      "Debe seleccionar una opción válida.",
      (value) => {
        if (value && value.length > 0) {
          return !(value.toString() === null || value.toString() === "0");
        }
        return true;
      }
    );
  });
};

export default Validation;
