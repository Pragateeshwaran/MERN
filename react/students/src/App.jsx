import React, { useState } from 'react';

<<<<<<< HEAD
const StudentMarks = () => {
  const [students, setStudents] = useState([{
    name: 'Student 1',
    marks: { sub1: '', sub2: '', sub3: '', sub4: '', sub5: '' },
    total: null,
    percentage: null
  }]);
  const [topper, setTopper] = useState(null);
  const subjects = ["sub1", "sub2", "sub3", "sub4", "sub5"];

  // Handle mark input change
  const handleMarkChange = (studentIndex, subject, value) => {
    const newStudents = [...students];
    newStudents[studentIndex].marks[subject] = value === '' ? '' :
      Math.min(Math.max(0, parseInt(value) || 0), 100);
    setStudents(newStudents);
  };

  // Add a new student row
  const addStudent = () => {
    setStudents([...students, {
      name: `Student ${students.length + 1}`,
      marks: { sub1: '', sub2: '', sub3: '', sub4: '', sub5: '' },
      total: null,
      percentage: null
    }]);
  };

  // Calculate totals and find topper
  const calculateResults = () => {
    if (students.length === 0) {
      alert("Please add at least one student before calculating");
      return;
    }

    if (!students.every(student => Object.values(student.marks).every(mark => mark !== ''))) {
      alert("Please enter all marks before calculating results");
      return;
    }

    const calculatedStudents = students.map(student => {
      const markValues = Object.values(student.marks).map(m => parseInt(m));
      const total = markValues.reduce((sum, mark) => sum + mark, 0);
      return {
        ...student,
        total,
        percentage: (total / 5).toFixed(2)
      };
    });

    setStudents(calculatedStudents);
    setTopper(calculatedStudents.reduce((prev, current) =>
      (prev.total > current.total) ? prev : current
    ));
  };

  return (
    <div>
      <h1>Students' Marks Details</h1>

      <table>
        <thead>
          <tr>
            <th>Student / Subject</th>
            {subjects.map(subject => (
              <th key={subject}>{subject}</th>
            ))}
            <th>Total</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => {
                    const newStudents = [...students];
                    newStudents[studentIndex].name = e.target.value;
                    setStudents(newStudents);
                  }}
                />
              </td>
              {subjects.map(subject => (
                <td key={subject}>
                  <input
                    type="number"
                    value={student.marks[subject]}
                    onChange={(e) => handleMarkChange(studentIndex, subject, e.target.value)}
                    min="0" max="100"
                  />
                </td>
              ))}
              <td>
                {student.total !== null ? student.total : ""}
              </td>
              <td>
                {student.percentage !== null ? `${student.percentage}%` : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={addStudent}>Add</button>
        <button onClick={calculateResults}>Calculate</button>
      </div>

      {topper && (
        <div>
          <h3>Topper of the class: {topper.name} with total marks: {topper.total} ({topper.percentage}%)</h3>
        </div>
      )}
    </div>
=======
function App() {
  const subjects = ['Math', 'Science', 'English']; // Add more subjects here

  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    name: '',
    age: 0,
    grades: {}
  });

  // Update name or age
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value
    }));
  };

  // Update grades dynamically
  const handleGradeChange = (e, subject) => {
    const { value } = e.target;
    setStudent((prev) => ({
      ...prev,
      grades: {
        ...prev.grades,
        [subject]: Number(value)
      }
    }));
  };

  // Add student to list
  const addStudent = () => {
    setStudents([...students, student]);
    setStudent({ name: '', age: 0, grades: {} });
  };

  // Helper: get average of a grade object
  const getAverage = (gradesObj) => {
    const values = Object.values(gradesObj);
    if (values.length === 0) return 0;
    const total = values.reduce((acc, val) => acc + val, 0);
    return total / values.length;
  };

  // Get class average
  const classAverage = () => {
    if (students.length === 0) return 0;
    const total = students.reduce((acc, s) => acc + getAverage(s.grades), 0);
    return total / students.length;
  };

  // Find topper
  const topper = () => {
    if (students.length === 0) return null;
    return students.reduce((topper, current) =>
      getAverage(current.grades) > getAverage(topper.grades) ? current : topper
    );
  };

  return (
    <>
      <h2>Add Student</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
      </div>

      {subjects.map((subject) => (
        <div key={subject}>
          <label>{subject} Grade: </label>
          <input
            type="number"
            value={student.grades[subject] || ''}
            onChange={(e) => handleGradeChange(e, subject)}
          />
        </div>
      ))}

      <button onClick={addStudent}>Add Student</button>

      <hr />

      <h2>Student List</h2>
      {students.map((s, index) => (
        <div key={index}>
          <p>
            <strong>{s.name}</strong> (Age: {s.age})<br />
            Grades:{' '}
            {subjects.map((sub) => `${sub}: ${s.grades[sub] || 0}`).join(', ')}<br />
            Average: {getAverage(s.grades).toFixed(2)}
          </p>
        </div>
      ))}

      {students.length > 0 && (
        <div>
          <h3>Class Average: {classAverage().toFixed(2)}</h3>
          <h3>Topper: {topper()?.name} (Avg: {getAverage(topper().grades).toFixed(2)})</h3>
        </div>
      )}
    </>
>>>>>>> b1b5222 (.)
  );
};

export default StudentMarks;
