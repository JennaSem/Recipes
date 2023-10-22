function MyRecipesComponent({ label, image, calories, ingredients }) {
  return (
    <div className="box">
      <div className="top">
        <h2 className="title">{label}</h2>
      </div>
      <div className="middle">
        <div className="image-container">
          <img src={image} width="230px" height="230px" alt="dish" />
        </div>

        <div className="description">
          <ul className="list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <img
                  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png"
                  className="icon"
                  alt="icon"
                />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>{calories.toFixed()} calories</p>
      </div>
    </div>
  );
}
export default MyRecipesComponent;
