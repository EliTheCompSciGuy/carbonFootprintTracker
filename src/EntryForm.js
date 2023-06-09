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

    //const [isLoading, setIsLoading] = useState(false)
    //const [errorMessage, setErrorMessage] = useState('')
    //const results = []

    //calc constatnts, converted food into grams
    const avgCO2perCal_meat = .01245
    const avgCO2perCal_dairy = .00488
    const avgCO2perCal_produce = .00115
    const avgCO2perCal_carb = .00069

    //calc constatnts, converted everything else into kilograms
    const avgCO2perGal_gasCar = 8887 / 1000
    const avgCO2perGal_dieselCar = 10180 / 1000
    const avgCO2perMile_bus = 140.885 / 1000
    const avgCO2perMile_train = 40.641 / 1000
    const avgCO2perMile_plane = 181.437 / 1000
    const avgCO2perkWh_elec = 356.432 / 1000
    const avgCO2perkWh_gas = 165.561 / 1000
    const avgCO2perGal_water = 10.5 / 1000

    /*
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        setIsLoading(true)
        calculateYearlyResults()
      }

      catch (error) {
        setErrorMessage('Please make sure you enter in positive numbers.')
      }

      finally {
        setIsLoading(false)
      }
    }
    */

    /*
    const calculateYearlyResults = () => {
      results[0] = meatCal * avgCO2perCal_meat * 365
      results[1] = dairyCal * avgCO2perCal_dairy * 365
      results[2] = produceCal * avgCO2perCal_produce * 365
      results[3] = carbCal * avgCO2perCal_carb * 365
      results[4] = (gasCar * avgCO2perGal_gasCar) / carMileage
      results[5] = (dieselCar * avgCO2perGal_dieselCar) / carMileage
      results[6] = bus * avgCO2perMile_bus
      results[7] = train * avgCO2perMile_train
      results[8] = plane * avgCO2perMile_plane
      results[9] = (electrictyHome * avgCO2perkWh_elec) / numInHousehold
      results[10] = (gasHome * avgCO2perkWh_gas) / numInHousehold
      results[11] = (waterHome * avgCO2perGal_water) / numInHousehold 
    }
    */
    return (
        <div className="form-container" style={{ marginBottom: '80px' }}>
            <form>
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
                    <span className="standard-text">Enter your car mileage per gallon:</span>
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

                <div>
                  <p>Food:</p>
                  <p>Your yearly meat CO2 emissions: {(meatCal * avgCO2perCal_meat * 365).toFixed(2)}g</p>
                  <p>Your yearly dairy CO2 emissions: {(dairyCal * avgCO2perCal_dairy * 365).toFixed(2)}g</p>
                  <p>Your yearly produce CO2 emissions: {(produceCal * avgCO2perCal_produce * 365).toFixed(2)}g</p>
                  <p>Your yearly carbs CO2 emissions: {(carbCal * avgCO2perCal_carb * 365).toFixed(2)}g</p>
                  <p>Travel:</p>
                  <p>Your yearly car CO2 emissions: {(((gasCar * avgCO2perGal_gasCar) / carMileage)+ ((dieselCar * avgCO2perGal_dieselCar) / carMileage)).toFixed(2)}kg</p>
                  <p>Your yearly bus CO2 emissions: {(bus * avgCO2perMile_bus).toFixed(2)}kg</p>
                  <p>Your yearly train CO2 emissions: {(train * avgCO2perMile_train).toFixed(2)}kg</p>
                  <p>Your yearly plane CO2 emissions: {(plane * avgCO2perMile_plane).toFixed(2)}kg</p>
                  <p>Home:</p>
                  <p>Your yearly home electricity CO2 emissions: {((electrictyHome * avgCO2perkWh_elec) / numInHousehold).toFixed(2)}kg</p>
                  <p>Your yearly home gas CO2 emissions: {((gasHome * avgCO2perkWh_gas) / numInHousehold).toFixed(2)}kg</p>
                  <p>Your yearly home water CO2 emissions: {((waterHome * avgCO2perGal_water) / numInHousehold).toFixed(2)}kg</p>
                </div>
            </form>
        </div>

    )
}
export default EntryForm;