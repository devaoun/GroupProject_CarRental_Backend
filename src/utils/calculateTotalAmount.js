const calculateTotalAmount = (startDate, endDate, pricePerDay) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = Math.abs(end - start);
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert time difference to days
  return daysDiff * pricePerDay;
};

module.exports = calculateTotalAmount;
