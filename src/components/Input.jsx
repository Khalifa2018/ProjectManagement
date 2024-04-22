export default function Input({ label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <input {...props} />
    </p>
  );
}
