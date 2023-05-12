function ButtonLabel({ title, imoticon = "" }) {
  const cursor = { cursor: "pointer" };
  const hidden =
    imoticon === "" ? { display: "none" } : { visibility: "visible" };
  return { imoticon } === "" ? (
    <label>{title}</label>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <label style={cursor}>{title}</label>
      <label style={{ ...cursor, ...hidden }}>{imoticon}</label>
    </div>
  );
}

export default ButtonLabel;
