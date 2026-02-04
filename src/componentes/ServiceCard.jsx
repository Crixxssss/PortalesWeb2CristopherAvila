
function ServiceCard({ servicio , OnEdit}) {
  return (
    <div>
      <div style={{border: "1px solid #ccc",margin:"10px 0", padding: 10}}></div>
      <h3>{servicio.nombre}</h3>
      <p>{servicio.descripcion}</p>

      <button onClick={() => OnEdit(servicio)}>Editar</button>
    </div>
  );
}
export default ServiceCard;
