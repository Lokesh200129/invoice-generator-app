
export const parseNumericInput = (value: string | number): number => {
    if (value === null || value === undefined || value === "") return 0;
    let cleanValue = value.toString().replace(/[^0-9.]/g, "");
    const parts = cleanValue.split(".");
    if (parts.length > 2) {
        cleanValue = `${parts[0]}.${parts.slice(1).join("")}`;
    }
    if (cleanValue.includes(".")) {
        const [integer, fraction] = cleanValue.split(".");
        const truncatedFraction = fraction.slice(0, 2);
        cleanValue = `${integer}.${truncatedFraction}`;
    }
    const result = parseFloat(cleanValue);
    return isNaN(result) ? 0 : result;
};