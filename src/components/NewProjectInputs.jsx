import Input from "./Input";

export default function NewProjectInputs() {
  return (
    <dialog open>
      <Input label="TITLE" type="text" />
      <p>
        <label>DESCRIPTION</label>
        <textarea />
      </p>
      <Input label="DUE DATE" type="date" />
    </dialog>
  );
}
