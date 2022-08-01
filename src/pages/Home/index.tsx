const Home = () => {
  return (
    <div>
      <div className="menu">
        <img alt="logo" />
        <img alt="home" />
        <img alt="config" />
        <img alt="exit" />
      </div>
      <div className="home-content">
        <header>
          <div>
            <h1>Car Parts Store</h1>
            <p>{new Date(Date.now()).toLocaleString()}</p>
          </div>
          <div>
            <img alt="input" />
            <input />
          </div>
        </header>
        <section>
          <div>
            <p>parts</p>
          </div>
          <div>
            <h2>pick your lunch</h2>
            <select>
              <option value="1"></option>
            </select>
          </div>
          <div>
            <div> Parts Card</div>
            <div> Parts Card</div>
            <div> Parts Card</div>
            <div> Parts Card</div>
            <div> Parts Card</div>
          </div>
        </section>
      </div>
      <aside></aside>
    </div>
  );
};

export default Home;
