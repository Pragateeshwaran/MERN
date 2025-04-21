import { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    name: '',
    age: 0,
    grade: 0
  });

  // Handler for updating student attributes
  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value
    }));
  };

  // Add student to the list
  const addStudent = () => {
    const updatedStudents = [...students, student];
    console.log('Updated Students:', updatedStudents);
    setStudents(updatedStudents);

    // Reset the current student state for the next input box
    setStudent({ name: '', age: 0, grade: 0 });
  };

  return (
    <>
      <h2>Add Students</h2>
      <div>
        <label>Student Name: </label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleStudentChange}
        />
      </div>

      <div>
        <label>Student Age: </label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleStudentChange}
        />
      </div>

      <div>
        <label>Student Grade: </label>
        <input
          type="number"
          name="grade"
          value={student.grade}
          onChange={handleStudentChange}
        />
      </div>

      <button onClick={addStudent}>Add Student</button>

      <div>
        <h2>Students List:</h2>
        {students.map((s, index) => (
          <div key={index}>
            <p>
              <strong>{s.name}</strong> (Age: {s.age}, Grade: {s.grade})
            </p>
          </div>
        ))}
      </div>

      {/* Render input fields for the next student */}
      <div>
        <label>Student Name: </label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleStudentChange}
        />
      </div>

      <div>
        <label>Student Age: </label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleStudentChange}
        />
      </div>

      <div>
        <label>Student Grade: </label>
        <input
          type="number"
          name="grade"
          value={student.grade}
          onChange={handleStudentChange}
        />
      </div>

      <button onClick={addStudent}>Add New Student</button>
    </>
  );
}

export default App;
