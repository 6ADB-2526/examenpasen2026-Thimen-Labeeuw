import { useRef } from "react";

interface Props { //interface aanmaken met daarin een functie onRegister die een string als argument heeft en een void doet als return
  onRegister: (name: string) => void;
}

function RegistrationForm({ onRegister }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      onRegister(value); //gebruik maken van de functie (props) om een gebruiker te registreren met de naam valu, wat van het inputveld komt
      if (inputRef.current != null) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Vul je gebruikersnaam in"
      />
      <button type="submit">Check / Registreer</button>
    </form>
  );
}

export default RegistrationForm;
