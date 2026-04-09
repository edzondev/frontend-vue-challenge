export interface ExchangeRate {
  bid: number; // tipo de cambio compra (venden USD, compran soles)
  bidChange: number; // 0 = sin cambio, 1 = subió, -1 = bajó
  ask: number; // tipo de cambio venta (compran USD, venden soles)
  askChange: number;
  date: string; // "2026-04-09"
  author: string;
  created: string; // ISO timestamp
}

// Respuesta de /exchange/calculates
export interface CalculationResult {
  rate: number; // tipo de cambio aplicado
  exchange: number; // monto resultante
  tc: {
    bid: number;
    ask: number;
  };
  data: {
    operate: boolean;
    msg: string; // "Puede operar" | posible mensaje de bloqueo
  };
  savings: {
    amount: string; // viene como string desde la API
    currency: string; // "$" | "S/"
  };
}

export type CurrencyCode = "PEN" | "USD";

// Params para el endpoint de calculadora
export interface CalculateParams {
  originCurrency: CurrencyCode;
  destinationCurrency: CurrencyCode;
  amount: number;
  active: "S" | "N";
}
