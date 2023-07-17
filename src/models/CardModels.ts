export interface Card {
  id: string;
  cvv: string;
  name: string;
  expiry: string;
  number: string;
  kind: 'black' | 'green';
}
