export default function CapitalizeText(t: string) {
    if (typeof t !== "string") return ""
    return t.split('').map((l, i) => i === 0 ? l.toUpperCase() : l).join('')
}