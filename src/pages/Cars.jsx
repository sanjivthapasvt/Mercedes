import Car1 from "./../assets/1.webp";
import Car2 from "./../assets/2.webp";
import Car3 from "./../assets/3.webp";
import Car4 from "./../assets/4.webp";
import Car5 from "./../assets/5.webp";
import Car0 from "./../assets/0.webp";
import Car6 from "./../assets/6.webp";
import Car7 from "./../assets/7.webp";
function Car() {
  const car1 = {
    name: "Mercedes-Benz A-Class Limousine",
    image: Car1,
    open: () => {
      window.open(
        "https://www.carwale.com/mercedes-benz-cars/a-class-limousine/",
        "_blank"
      );
    },
  };

  const car2 = {
    name: "Mercedes-Benz Maybach S-Class",
    image: Car2,
    open: () => {
      window.open(
        "https://www.carwale.com/mercedes-benz-cars/maybach-s-class/",
        "_blank"
      );
    },
  };
  const car3 = {
    name: "Mercedes-Benz C-Class",
    image: Car3,
    open: () => {
      window.open(
        "https://www.carwale.com/mercedes-benz-cars/c-class/",
        "_blank"
      );
    },
  };

  const car4 = {
    name: "Mercedes-Benz E-Class",
    image: Car4,
    open: () => {
      window.open(
        "https://www.carwale.com/mercedes-benz-cars/e-class/",
        "_blank"
      );
    },
  };

  const car5 = {
    name: "Mercedes-Benz G-Class",
    image: Car5,
    open: () => {
      window.open(
        "https://www.carwale.com/mercedes-benz-cars/g-class/",
        "_blank"
      );
    },
  };

  const car6 = {
    name: "Ferrari Purosangue SUV",
    image: Car6,
    open: () => {
      window.open(
        "https://www.carwale.com/ferrari-cars/purosangue-suv/",
        "_blank"
      );
    },
  };

  const car7 = {
    name: "Ferrari 296 GTB",
    image: Car7,
    open: () => {
      window.open("https://www.carwale.com/ferrari-cars/296-gtb/", "_blank");
    },
  };
  return (
    <>
      <div className="top">
        <h1>Mercedes</h1>
      </div>
      <div className="carimage">
        <center>
          <img src={Car0} alt="Mercedes" height={500} />
        </center>
      </div>

      <div className="CarList">
        <h2>1. {car1.name}</h2>
        <img
          className="Car"
          src={car1.image}
          alt={"Photo of " + car1.name}
          height={350}
          onClick={car1.open}
          style={{ cursor: "pointer" }}
        />

        <h2> 2. {car2.name}</h2>
        <img
          className="Car"
          src={car2.image}
          alt={"Photo of " + car2.name}
          height={350}
          onClick={car2.open}
          style={{ cursor: "pointer" }}
        />

        <h2>3. {car3.name}</h2>
        <img
          className="Car"
          src={car3.image}
          alt={"Photo of " + car3.name}
          height={350}
          onClick={car3.open}
          style={{ cursor: "pointer" }}
        />

        <h2>4. {car4.name}</h2>
        <img
          className="Car"
          src={car4.image}
          alt={"Photo of " + car4.name}
          height={350}
          onClick={car4.open}
          style={{ cursor: "pointer" }}
        />

        <h2>5. {car5.name}</h2>
        <img
          className="Car"
          src={car5.image}
          alt={"Photo of " + car5.name}
          height={350}
          onClick={car5.open}
          style={{ cursor: "pointer" }}
        />

        <h2>6. {car6.name}</h2>
        <img
          className="Car"
          src={car6.image}
          alt={"Photo of " + car6.name}
          height={350}
          onClick={car6.open}
          style={{ cursor: "pointer" }}
        />

        <h2>7. {car7.name}</h2>
        <img
          className="Car"
          src={car7.image}
          alt={"Photo of " + car7.name}
          height={350}
          onClick={car7.open}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}

export default Car;
