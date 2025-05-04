import { useState } from 'react'
import './App.css'

function App() {
  const [student, setStudent] = useState({
    studentName: '',
    marks: { sub1: '', sub2: '' },
    total: null,
    percentage: null
  })

  const [students, setStudents] = useState([]) 
  const [topper, setTopper] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "studentName") {
      setStudent({ ...student, studentName: value })
    } else {
      setStudent({
        ...student,
        marks: {
          ...student.marks,
          [name]: value
        }
      })
    }
  }

  const addStudent = (e) => {
    e.preventDefault()
    const sub1 = parseFloat(student.marks.sub1)
    const sub2 = parseFloat(student.marks.sub2)
    const total = sub1 + sub2
    const percentage = (total / 200) * 100

    const newStudent = {
      ...student,
      marks: {
        sub1,
        sub2
      },
      total,
      percentage: percentage.toFixed(2)
    }

    setStudents([...students, newStudent])
    setStudent({
      studentName: '',
      marks: { sub1: '', sub2: '' },
      total: null,
      percentage: null
    })
  }

  return (
    <>
      <form onSubmit={addStudent}>
        <label>
          Student Name:
          <input 
            type="text"
            name="studentName"
            value={student.studentName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mark 1:
          <input 
            type="number"
            name="sub1"
            value={student.marks.sub1}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mark 2:
          <input 
            type="number"
            name="sub2"
            value={student.marks.sub2}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Student</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Total</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud, index) => (
            <tr key={index}>
              <td>{stud.studentName}</td>
              <td>{stud.marks.sub1}</td>
              <td>{stud.marks.sub2}</td>
              <td>{stud.total}</td>
              <td>{stud.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
