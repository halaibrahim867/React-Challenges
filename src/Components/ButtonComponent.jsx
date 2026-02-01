import "../css/button.css";
export default function ButtonComponent({ name, children }) {
  return (
    <button className="custom-button">
      {name}
      {children}
    </button>
  );
}
