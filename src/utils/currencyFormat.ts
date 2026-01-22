export const currencyFormat = (amount: number) => {
    const rawAmount = Number(amount)
    const formattedCurrency = Intl.NumberFormat('en-us').format(rawAmount);
    return formattedCurrency
}