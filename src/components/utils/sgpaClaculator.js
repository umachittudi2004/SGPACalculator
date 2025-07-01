export const gradePoints = {
  O: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0
};

export function calculateSGPA(subjects) {
  let totalGradePoints = 0;
  let totalCredits = 0;
  subjects.forEach(subject => {
    totalGradePoints += gradePoints[subject.grade] * subject.credits;
    totalCredits += subject.credits;
  });
  return totalCredits === 0 ? 0 : totalGradePoints / totalCredits;
}