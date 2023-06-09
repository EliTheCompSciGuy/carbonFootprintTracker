import React, { useState } from 'react'

function EntryForm() {
    //inputs
    const [meatCal, setMeatCal] = useState(0)
    const [dairyCal, setDairyCal] = useState(0)
    const [produceCal, setProduceCal] = useState(0)
    const [carbCal, setCarbCal] = useState(0)
    const [carMileage, setCarMileage] = useState(0)
    const [gasCar, setGasCar] = useState(0)
    const [dieselCar, setDieselCar] = useState(0)
    const [bus, setBus] = useState(0)
    const [train, setTrain] = useState(0)
    const [plane, setPlane] = useState(0)
    const [electrictyHome, setElectrictyHome] = useState(0)
    const [gasHome, setGasHome] = useState(0)
    const [waterHome, setWaterHome] = useState(0)
    const [numInHousehold, setNumInHousehold] = useState(0)

    //calc constatnts, converted everything into grams
    const avgCO2perCal_meat = .01245
    const avgCO2perCal_dairy = .00488
    const avgCO2perCal_produce = .00115
    const avgCO2perCal_carb = .00069
    const avgCO2perGal_gasCar = 8887
    const avgCO2perGal_dieselCar = 10180
    const avgCO2perMile_bus = 140.885
    const avgCO2perMile_train = 40.641
    const avgCO2perMile_plane = 181.437
    const avgCO2perkWh_elec = 356.432
    const avgCO2perkWh_gas = 165.561
    const avgCO2perGal_water = 10.5

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isValidInputs()) {
            return
        }
    }

    const isValidInputs = (attr) => {
        return true;
    }

    return (
        <div className="form-container" style={{ marginBottom: '80px' }}>
            <form onSubmit={handleSubmit}>
                <p>Food:</p>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your daily average # of calories of meat (Beef/Lamb/Fish/Poultry) consumed:</span>
                      <input
                        type="num"
                        value={meatCal}
                        onChange={(e) => setMeatCal(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your daily average # of calories of dairy (Egg/Milk/Cheese) consumed:</span>
                      <input
                        type="num"
                        value={dairyCal}
                        onChange={(e) => setDairyCal(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your daily # of calories of produce (Fruits/Vegetables) consumed:</span>
                      <input
                        type="num"
                        value={produceCal}
                        onChange={(e) => setProduceCal(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your daily # of calories of carbs (Grains/Bread) consumed:</span>
                      <input
                        type="num"
                        value={carbCal}
                        onChange={(e) => setCarbCal(e.target.value)}
                      />
                  </label>
                </div>

                <p>Travel:</p>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your car mileage:</span>
                      <input
                        type="num"
                        value={carMileage}
                        onChange={(e) => setCarMileage(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly # of miles traveled by car using gasoline:</span>
                      <input
                        type="num"
                        value={gasCar}
                        onChange={(e) => setGasCar(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly # of miles traveled by car using diesel:</span>
                      <input
                        type="num"
                        value={dieselCar}
                        onChange={(e) => setDieselCar(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly # of miles traveled by bus:</span>
                      <input
                        type="num"
                        value={bus}
                        onChange={(e) => setBus(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly # of miles traveled by train:</span>
                      <input
                        type="num"
                        value={train}
                        onChange={(e) => setTrain(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly # of miles traveled by plane:</span>
                      <input
                        type="num"
                        value={plane}
                        onChange={(e) => setPlane(e.target.value)}
                      />
                  </label>
                </div>

                <p>Home:</p>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter the # of people in the household:</span>
                      <input
                        type="num"
                        value={numInHousehold}
                        onChange={(e) => setNumInHousehold(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly household electricity usage (in kWh):</span>
                      <input
                        type="num"
                        value={electrictyHome}
                        onChange={(e) => setElectrictyHome(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly household gas usage (in kWh):</span>
                      <input
                        type="num"
                        value={gasHome}
                        onChange={(e) => setGasHome(e.target.value)}
                      />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="standard-text">Enter your yearly household water usage (in gallons):</span>
                      <input
                        type="num"
                        value={waterHome}
                        onChange={(e) => setWaterHome(e.target.value)}
                      />
                  </label>
                </div>

                <button
                type="submit" >
                Calculate
                </button>
            </form>
        </div>
    )
}
export default EntryForm;