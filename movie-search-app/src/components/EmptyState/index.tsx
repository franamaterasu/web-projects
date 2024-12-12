import "./emptyState.scss";

const EmptyState = () => {
  return (
    <section className="empty-state">
      <h2 className="empty-state__title">No hay películas para mostrar</h2>
      <p className="empty-state__text">
        Intenta realizar una búsqueda o espera a que se carguen los resultados.
      </p>
    </section>
  );
};

export default EmptyState;
