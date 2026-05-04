/**
 * Return a human-friendly date string, e.g. "Monday, May 4th".
 * getOrdinal handles English ordinal suffixes and the 11-13 edge cases.
 * @returns {string} Formatted date with ordinal day (e.g. "Friday, June 11th")
 */
export const getFormattedDate = () => {
  const date = new Date();

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = date.toLocaleDateString("en-US", { month: "long" });
  const dayNumber = date.getDate();

  // Append English ordinal suffix. Using `n % 100` handles 11-13
  // (which are 'th') while `(v - 20) % 10` handles 1,2,3 -> st, nd, rd.
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return `${dayName}, ${monthName} ${getOrdinal(dayNumber)}`;
};
