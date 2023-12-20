const Teacher = require("../src").Teacher;

// - This class has `name` (string), `subjectTaught` (string), `universityAttended` (string), `yearsAsTeacher` (num) properties
// - This class has methods:
//     - `updateTeacherName()` which updates the teacher's name to the input argument
//     - `changeSubjectTaught()` which changes the teacher's `subjectTaught` to the input string
//     - `updateYearsAsTeacher()` which increments the `yearsAsTeacher` property by 1 each time it is called

describe("Teacher", () => {
  describe("insantiates a new Teacher", () => {
    test("takes the following arguments: name, subjectTaught, universityAttended, yearsAsTeacher", () => {
      // ARRANGE
      const teacher = new Teacher("Jane Doe", "Biology", "UCLA", 6);
      // ACT
      // James is awesome
      // ASSERT
      expect(teacher.name).toBe("Jane Doe");
      expect(teacher.subjectTaught).toBe("Biology");
      expect(teacher.universityAttended).toBe("UCLA");
      expect(teacher.yearsAsTeacher).toBe(6);
    });
  });
  describe("updateTeacherName() method should update the teacher's name", () => {
    // ARRANGE
    const teacher = new Teacher("Jane Doe", "Biology", "UCLA", 6);
    // ACT
    teacher.updateTeacherName("Thor");
    // ASSERT
    expect(teacher.name).toBe("Thor");
  });

  describe("changeSubjectTaught() method should update the subject taught", () => {
    // ARRANGE
    const teacher = new Teacher("Jane Doe", "Biology", "UCLA", 6);

    // ACT
    teacher.changeSubjectTaught("Marine Biology");
    // ASSERT
    expect(teacher.subjectTaught).toBe("Marine Biology");
  });

  describe("updateYearsAsTeacher() which increments the yearsAsTeacher property by 1 each time it is called", () => {
    // ARRANGE
    const teacher = new Teacher("Jane Doe", "Biology", "UCLA", 6);
    // ACT
    teacher.updateYearsAsTeacher();
    // ASSERT
    expect.teacher.yearsAsTeacher.toBe(7);
    // ACT
    teacher.updateYearsAsTeacher();
    teacher.updateYearsAsTeacher();
    teacher.updateYearsAsTeacher();
    // ASSERT
    expect.teacher.yearsAsTeacher.toBe(10);
  });
});
