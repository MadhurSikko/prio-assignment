export default function getDate(timestamp: string): string {
    const date = new Date(Number(timestamp));

    const tokenizedDate = date.toString().split(" ")

    return tokenizedDate[2] + "-" + tokenizedDate[1] + "-" + tokenizedDate[3];
}