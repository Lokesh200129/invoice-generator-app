export const currencyFormat = (amount: number) => {
    const rawAmount = Number(amount)
    const formattedCurrency = Intl.NumberFormat('en-IN').format(rawAmount);
    return formattedCurrency
}