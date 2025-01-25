import { CGPRO } from "./cgpro";
import { KOC } from "./koc";
import { PIXELLIVE } from "./pixellive";
import { UMAGONG } from "./umagong";

export const newsList: {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  post: () => JSX.Element;
}[] = [
  {
    slug: "cgpro",
    title: "VisionaryLabs 2024 해외선진기술교육 워크숍 참여",
    subtitle: "CG Pro - VisionaryLabs간 해외 VP 기술이전",
    date: "2024. 12. 29",
    post: CGPRO,
  },
  {
    slug: "pixellive",
    title: "PIXEL LIVE 운영사 GRAE VP스튜디오 협약",
    subtitle: "VisionaryLabs VP 스튜디오 대관료 면제",
    date: "2024. 12. 29",
    post: PIXELLIVE,
  },
  {
    slug: "umagong",
    title: "우마공크리에이티브 MOU 체결",
    subtitle: "우마공 - VisionaryLabs간 상호 협력체계 구축",
    date: "2024. 12. 29",
    post: UMAGONG,
  },
  {
    slug: "koc",
    title: "KOC Partners Scale-Up 프로그램 선정",
    subtitle: "엑셀러레이팅 프로그램 및 투자유치",
    date: "2024. 12. 29",
    post: KOC,
  },
];
