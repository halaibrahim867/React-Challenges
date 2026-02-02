import "../css/button.css";
export default function ButtonComponent({ name, children }) {
  return (
    <div>
      {name == null || name == "" ? (
        <div></div>
      ) : (
        <button className="custom-button">
          {name}
          {children}
        </button>
      )}
    </div>
  );
}
