import "./style.css";

export default function TituloCobranca({ item }) {
  return (
    <>
      <div
        className="container-information"
        style={{
          backgroundColor: item.color,
          borderRadius: "3.0rem",
          marginBottom: "2.4rem",
        }}
      >
        <div className="container-information-content">
          <img className="image-information" src={item.img} alt="" />
          <div className="text-content">
            <h1>{item.text}</h1>
            <p>{item.valor}</p>
          </div>
        </div>
      </div>
    </>
  );
}
