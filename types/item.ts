export interface Item {
  by: string;
  descendants: number;
  deleted: boolean;
  dead: boolean;
  id: number;
  kids?: number[] | null;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text?: string;
}
