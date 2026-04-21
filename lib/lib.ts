import dayjs from "dayjs";

export const formatMoney = (value: number, currency: string ="USD") => {
    try{
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
    }catch(e){
        console.error(e)
        const formattedValue = value.toFixed(2)
        return `₦${formattedValue}`
    }
 
};



export const formatSubscriptionDateTime = (value ? : string) => {
    if(!value) return 'Not provided';
    const parsedDate = dayjs(value);
    return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided"
}

export const formatStatusLabel = (value? : string) => {
    if(!value) return "Unknown"
    return value.charAt(0).toUpperCase() + value.slice(1)
}