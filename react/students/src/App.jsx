import React, { useState } from 'react';

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
  );
};

export default StudentMarks;
