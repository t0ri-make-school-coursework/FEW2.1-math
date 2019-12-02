interface Number {
    goldenRatio: number;
    round: () => number;
    ceil: () => number;
    floor: () => number;
    pad: (x: number, y: number) => string;
    degToRad: (digits: number) => number;
    radToDeg: (digits: number) => number;
    toDollars: () => string;
    tax: (rate: number) => number;
    interest: (months: number, rate: number) => number;
    mortgage: (years: number, rate: number) => number;
    toHex: (octothorpe: boolean) => string;
}
