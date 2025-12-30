function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "#31d610ff",
        color: "#fff",
        padding: "10px 15px",
        borderRadius: "50px",
      }}
    >
      {message}
    </div>
  );
}

export default Toast;
