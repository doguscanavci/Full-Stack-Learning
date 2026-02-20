/* Codes Here! */

function getEytDetails(employees) {
  let eligibleList = [];
  let currentStaffList = [];
  let totalRemainingSalary = 0;

  for (let i = 0; i < employees.length; i++) {
    let name = employees[i][0];
    let gender = employees[i][1];
    let entryYear = employees[i][2];
    let insuranceYears = employees[i][3];
    let premiumDays = employees[i][4];
    let salary = employees[i][5];

    // EYT Eligibility Logic:
    // 1. Entry year must be 1999 or earlier.
    // 2. Premium days must be at least 5000.
    // 3. Insurance years: Women >= 20, Men >= 25.
    const isEntryValid = entryYear <= 1999;
    const isPremiumValid = premiumDays >= 5000;
    const isPeriodValid = (gender === 'Kadın' && insuranceYears >= 20) || 
                          (gender === 'Erkek' && insuranceYears >= 25);

    if (isEntryValid && isPremiumValid && isPeriodValid) {
      eligibleList.push(name);
    } else {
      currentStaffList.push(name);
      totalRemainingSalary += salary;
    }
  }

  return [eligibleList, currentStaffList, totalRemainingSalary];
}

/* Do not delete the lines after this one! */
module.exports = eytDetaylari;