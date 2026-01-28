export interface Song {
  id: string;
  imgUrl: string;
  artist: string;
  title: string;
  lv: string;
  single: string;
  double: string;
}

export interface RoundSetting {
  name: string;
  totalBanPick: number;
  random: number;
  ban: number;
  pick: number;
}