export enum AppState {
  LOCKED = 'LOCKED',
  LOADING = 'LOADING',
  ACTIVE = 'ACTIVE'
}

export interface KpiItem {
  label: string;
  value: string;
  sub: string;
  color: 'lime' | 'blue' | 'white';
}

export interface SimulationParams {
  courts: number;
  pricePerHour: number;
  occupancy: number;
  ancillarySpend: number;
}
