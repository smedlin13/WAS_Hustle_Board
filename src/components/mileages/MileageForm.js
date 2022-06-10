import { useState, useEffect } from 'react';


const MileageForm = ({id, miles, date, addMileage, updateMileage, setAdding}) => {
  const [mileage, setMileage] = useState({ date: '', miles: 0})


  useEffect( () => {
    if (id) {
      setMileage({ date, miles })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMileage(id, mileage)
    } else {
      addMileage(mileage)
    } 
    setMileage({date: '', miles: ''})
    }
  

  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <title>New Activity</title>
      <label>Date:</label>
        <input
          type="date"
          name="date"
          value={mileage.date}
          onChange={(e) => setMileage({ ...mileage, date: e.target.value})}
          required
        />
      <label>Mileage:</label>
        <input
            type="integer"
            name="miles"
            value={mileage.miles}
            onChange={(e) => setMileage({ ...mileage, miles: e.target.value})}
          />

      <button type="submit">Submit</button>
    </form>
    </>
  )

}

export default MileageForm;