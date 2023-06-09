import React, { useState } from 'react'

function EntryForm() {
    //page
    const [page, setPage] = useState(1);

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

    // gloabal aberages
    const avgMeatCal = 1000
    const avgDairyCal = 167
    const avgProduceCal = 72 + 165
    const avgCarbCal = 900

    const avgMpg = 25.4
    const avgMiles = 13500
    const avgBusMiles = 4150
    const avgTrainMiles = 845
    const avgPlaneMiles = 1029

    const avgNumPeople = 2.53
    const avgElectricity = 5000
    const avgGas = 13500
    const avgWater = 92500

    const avgMeatEmissions = avgMeatCal * avgCO2perCal_meat * 365
    const avgDairyEmissions = avgDairyCal * avgCO2perCal_dairy * 365
    const avgProduceEmissions = avgProduceCal * avgCO2perCal_produce * 365
    const avgCarbEmissions = avgCarbCal * avgCO2perCal_carb * 365

    const avgMilesEmissions = ((avgMiles * avgCO2perGal_gasCar) / avgMpg)
    const avgBusMilesEmissions = avgBusMiles * avgCO2perMile_bus
    const avgTrainMilesEmissions = avgTrainMiles * avgCO2perMile_train
    const avgPlaneMilesEmissions = avgPlaneMiles * avgCO2perMile_plane

    const avgElectricityEmissions = (avgElectricity * avgCO2perkWh_elec) / avgNumPeople
    const avgGasEmissions = (avgGas * avgCO2perkWh_gas) / avgNumPeople
    const avgWaterEmissions = (avgWater * avgCO2perGal_water) / avgNumPeople


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
        <div className="bg-[rgb(59,59,76)] rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
          {page === 1 ?
            <>
              <h2 className="text-2xl font-medium mb-4 text-white">Food</h2>
              <form>
                <div className="mb-4">
                    <label htmlFor="meat" className="block text-white font-medium mb-2">Enter your daily average # of calories of meat (Beef/Lamb/Fish/Poultry) consumed:</label>
                    <input type="number" id="meat" name="meat" 
                      value={meatCal}
                      onChange={(e) => setMeatCal(e.target.value)}
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="dairy" className="block text-white font-medium mb-2">Enter your daily average # of calories of dairy (Egg/Milk/Cheese) consumed:</label>
                    <input type="number" id="dairy" name="dairy"
                      value={dairyCal}
                      onChange={(e) => setDairyCal(e.target.value)}
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="produce" className="block text-white font-medium mb-2">Enter your daily # of calories of produce (Fruits/Vegetables) consumed:</label>
                    <input type="number" id="produce" name="produce"
                      value={produceCal}
                      onChange={(e) => setProduceCal(e.target.value)}
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="carbs" className="block text-white font-medium mb-2">Enter your daily # of calories of carbs (Grains/Bread) consumed:</label>
                    <input type="number" id="carbs" name="carbs"
                      value={carbCal}
                      onChange={(e) => setCarbCal(e.target.value)}
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className='flex justify-center'>
                    <button type="button" onClick={() => setPage(page + 1)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Next</button>
                </div>
              </form>
            </> : page === 2 ? 
            <>
              <h2 className="text-2xl font-medium mb-4 text-white">Travel</h2>
              <form>
                <div className="mb-4">
                    <label htmlFor="mpg" className="block text-white font-medium mb-2">Enter your car mileage per gallon:</label>
                    <input type="number" id="mpg" name="mpg"
                      value={carMileage}
                      onChange={(e) => setCarMileage(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="milesGas" className="block text-white font-medium mb-2">Enter your yearly # of miles traveled by car using gasoline:</label>
                    <input type="number" id="milesGas" name="milesGas"
                      value={gasCar}
                      onChange={(e) => setGasCar(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="milesDiesel" className="block text-white font-medium mb-2">Enter your yearly # of miles traveled by car using diesel:</label>
                    <input type="number" id="milesDiesel" name="milesDiesel"
                      value={dieselCar}
                      onChange={(e) => setDieselCar(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="bus" className="block text-white font-medium mb-2">Enter your yearly # of miles traveled by bus:</label>
                    <input type="number" id="bus" name="bus"
                      value={bus}
                      onChange={(e) => setBus(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="train" className="block text-white font-medium mb-2">Enter your yearly # of miles traveled by train:</label>
                    <input type="number" id="train" name="train"
                      value={train}
                      onChange={(e) => setTrain(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="plane" className="block text-white font-medium mb-2">Enter your yearly # of miles traveled by plane:</label>
                    <input type="number" id="plane" name="plane"
                      value={plane}
                      onChange={(e) => setPlane(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className='flex justify-center'>
                    <button type="button" onClick={() => setPage(page + 1)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Next</button>
                </div>
              </form>
            </> : page === 3 ? 
            <>
              <h2 className="text-2xl font-medium mb-4 text-white">Home</h2>
              <form>
                <div className="mb-4">
                    <label htmlFor="numPeople" className="block text-white font-medium mb-2">Enter the # of people in the household:</label>
                    <input type="number" id="numPeople" name="numPeople"
                      value={numInHousehold}
                      onChange={(e) => setNumInHousehold(e.target.value)}
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="electric" className="block text-white font-medium mb-2">Enter your yearly household electricity usage (in kWh):</label>
                    <input type="number" id="electric" name="electric"
                      value={electrictyHome}
                      onChange={(e) => setElectrictyHome(e.target.value)}
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="gas" className="block text-white font-medium mb-2">Enter your yearly household gas usage (in kWh):</label>
                    <input type="number" id="gas" name="gas"
                      value={gasHome}
                      onChange={(e) => setGasHome(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="water" className="block text-white font-medium mb-2">Enter your yearly household water usage (in gallons):</label>
                    <input type="number" id="water" name="water"
                      value={waterHome}
                      onChange={(e) => setWaterHome(e.target.value)}  
                      className="border text-[rgb(214,214,216)] border-[rgb(46,46,59)] bg-[rgb(79,79,101)] p-2 w-full rounded-lg focus:outline-none focus:border-green-400" required/>
                </div>
                <div className='flex justify-center'>
                  <button type="button" onClick={() => setPage(page + 1)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Submit</button>
                </div>
              </form>
            </> : 
            <>
              <h3 className='block text-white font-medium text-[1.8rem]'>Food</h3>
              <div className="bg-[rgb(124,124,138)] rounded-lg px-5 py-3 mx-auto my-3 max-w-2xl">
                <p className='text-white'>Your yearly meat CO2 emissions: <span className={`font-semibold ${avgMeatEmissions < (meatCal * avgCO2perCal_meat * 365) ? 'text-red-400' : 'text-green-400'}`}>{(meatCal * avgCO2perCal_meat * 365).toFixed(2)}g</span></p>
                <p className='text-white'>Your yearly dairy CO2 emissions: <span className={`font-semibold ${avgDairyEmissions < (dairyCal * avgCO2perCal_dairy * 365) ? 'text-red-400' : 'text-green-400'}`}>{(dairyCal * avgCO2perCal_dairy * 365).toFixed(2)}g</span></p>
                <p className='text-white'>Your yearly produce CO2 emissions: <span className={`font-semibold ${avgProduceEmissions < (produceCal * avgCO2perCal_produce * 365) ? 'text-red-400' : 'text-green-400'}`}>{(produceCal * avgCO2perCal_produce * 365).toFixed(2)}g</span></p>
                <p className='text-white'>Your yearly carbs CO2 emissions: <span className={`font-semibold ${avgCarbEmissions < (carbCal * avgCO2perCal_carb * 365) ?  'text-red-400' : 'text-green-400'}`}>{(carbCal * avgCO2perCal_carb * 365).toFixed(2)}g</span></p>
              </div>

              <h3 className='block text-white font-medium text-[1.8rem]'>Travel</h3>
              <div className="bg-[rgb(124,124,138)] rounded-lg px-5 py-3 mx-auto my-3 max-w-2xl">
                <p className='text-white'>Your yearly car CO2 emissions: <span className={`font-semibold ${avgMilesEmissions < (((gasCar * avgCO2perGal_gasCar) / carMileage)+ ((dieselCar * avgCO2perGal_dieselCar) / carMileage)) ? 'text-red-400' : 'text-green-400'}`}>{(((gasCar * avgCO2perGal_gasCar) / carMileage)+ ((dieselCar * avgCO2perGal_dieselCar) / carMileage)).toFixed(2)}kg</span></p>
                <p className='text-white'>Your yearly bus CO2 emissions: <span className={`font-semibold ${avgBusMilesEmissions < (bus * avgCO2perMile_bus) ? 'text-red-400' : 'text-green-400'}`}>{(bus * avgCO2perMile_bus).toFixed(2)}kg</span></p>
                <p className='text-white'>Your yearly train CO2 emissions: <span className={`font-semibold ${avgTrainMilesEmissions < (train * avgCO2perMile_train) ? 'text-red-400' : 'text-green-400'}`}>{(train * avgCO2perMile_train).toFixed(2)}kg</span></p>
                <p className='text-white'>Your yearly plane CO2 emissions: <span className={`font-semibold ${avgPlaneMilesEmissions < (plane * avgCO2perMile_plane) ? 'text-red-400' : 'text-green-400'}`}>{(plane * avgCO2perMile_plane).toFixed(2)}kg</span></p>
              </div>

              <h3 className='block text-white font-medium text-[1.8rem]'>Home</h3>
              <div className="bg-[rgb(124,124,138)] rounded-lg px-5 py-3 mx-auto my-3 max-w-2xl">
                <p className='text-white'>Your yearly home electricity CO2 emissions: <span className={`font-semibold ${avgElectricityEmissions < ((electrictyHome * avgCO2perkWh_elec) / numInHousehold) ? 'text-red-400' : 'text-green-400'}`}>{((electrictyHome * avgCO2perkWh_elec) / numInHousehold).toFixed(2)}kg</span></p>
                <p className='text-white'>Your yearly home gas CO2 emissions: <span className={`font-semibold ${avgGasEmissions < ((gasHome * avgCO2perkWh_gas) / numInHousehold) ? 'text-red-400' : 'text-green-400'}`}>{((gasHome * avgCO2perkWh_gas) / numInHousehold).toFixed(2)}kg</span></p>
                <p className='text-white'>Your yearly home water CO2 emissions: <span className={`font-semibold ${avgWaterEmissions < ((waterHome * avgCO2perGal_water) / numInHousehold) ? 'text-red-400' : 'text-green-400'}`}>{((waterHome * avgCO2perGal_water) / numInHousehold).toFixed(2)}kg</span></p>
              </div>
            </>
          }
        </div>
    )
}
export default EntryForm;