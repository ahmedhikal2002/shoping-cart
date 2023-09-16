const Currancy = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style:'currency'
})
const Format = (number) => {

    return Currancy.format(number);
}
export default Format;


