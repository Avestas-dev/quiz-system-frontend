import * as yup from "yup"

const yupLocale = {
  mixed: {
    default: "Pole jest niepoprawne",
    required: "Pole jest wymagane",
    oneOf: "Pole musi mieć jedną z następujących wartości: ${values}",
    notOneOf: "Pole nie może mieć jednej z następujących wartości: ${values}",
    defined: "Musi być zdefiniowane",
    notType: "Pole nie może być puste",
    required_path: "Pole jest wymagane",
  },
  string: {
    length: "Pole musi mieć dokładnie ${length} znaków",
    min: "Pole musi mieć conajmniej ${min} znaków",
    max: "Pole może mieć conajwyej ${max} znaków",
    matches: "Pole musi pasować do następującego wzorca: '${regex}'",
    email: "Pole musi być poprawnym adresem email",
    url: "Pole musi być poprawnym adresem URL",
    uuid: "Pole musi być poprawnym identyfikatorem UUID",
    trim: "Pole musi być tekstem bez spacji na początku i na końcu",
    lowercase: "Pole może mieć tylko małe litery",
    uppercase: "Pole może mieć tylko wielkie litery",
  },
  number: {
    min: "Pole musi być liczbą większą lub równą ${min}",
    max: "Pole musi być liczbą mniejszą lub równą ${max}",
    lessThan: "Pole musi być liczbą mniejszą od ${less}",
    moreThan: "Pole musi być liczbą więszką od ${more}",
    positive: "Pole musi być liczbą dodatnią",
    negative: "Pole musi być liczbą ujemną",
    integer: "Pole musi być liczbą całkowitą",
  },

  date: {
    min: "Pole musi zawierać datę późniejszą niż ${min}",
    max: "Pole musi zawierać datę wcześniejszą niż ${max}",
  },

  boolean: {
    isValue: "Pole musi być ${value}",
  },

  object: {
    noUnknown: "Pole zawiera nieznane klucze: ${unknown}",
  },

  array: {
    min: "Pole musi zawierać conajmniej ${min} elementów",
    max: "Pole może zawierać conajwyżej ${max} elementów",
    length: "Pole musi mieć dokładnie ${length} elementów",
  },
}
yup.setLocale(yupLocale)
export default yup
