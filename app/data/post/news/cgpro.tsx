import { Album, Content, Images, Title } from "~/components/news";

const CGPRO = () => {
  return (
    <>
      <Title title="VisionaryLabs, 해외 VP 기술 이전을 통해 새로운 가능성을 열다" />
      <Images column={2} base="https://assets.visionarylabstech.com/post/news/cgpro" urls={["1.jpg", "2.jpg"]} />
      <Content
        content={[
          "당사는 2024년 해외 선진 기술 교육 워크숍에 참여하여, 가상 프로덕션(VP) 기술의 최신 트렌드와 혁신적인 솔루션에 대한 심도 있는 교육을 받았습니다.",
          "이번 워크숍은 세계적인 XR 및 가상 프로덕션 전문 CG Pro가 주최했으며, 산업 전반에서 활용 가능한 최첨단 기술과 사례를 공유하는 자리였습니다. 워크숍을 통해 우리는 최신 VP 기술과 장비 사용법을 익히고, 이를 현장에 직접 적용할 수 있는 기술 이전을 성공적으로 완료했습니다.",
          "특히, Unreal Engine 기반 XR 기술과 LED Wall 운용법에 대한 심층적인 교육을 통해 우리의 가상 프로덕션 기술력을 한 단계 끌어올릴 수 있었습니다.",
        ]}
      />
      <Title title="CG Pro - VisionaryLabs간 해외 VP 기술이전" />
      <Content
        content={[
          "우리 회사는 CG Pro와의 협력을 통해 최첨단 기술 이전을 성공적으로 완료하며, 가상 프로덕션(VP) 분야에서의 역량을 더욱 강화하였습니다.",
          "이번 기술이전을 통해 CG Pro의 전문적인 노하우와 최신 기술을 도입하여, 보다 정교하고 혁신적인 콘텐츠 제작이 가능해졌습니다. 또한, 기술 이전과 함께 진행된 네트워킹 행사에서는 다양한 업계 전문가들과의 교류를 통해 글로벌 콘텐츠 제작의 트렌드와 아이디어를 공유하는 뜻깊은 시간을 가졌습니다.",
          "특히, CG Pro와의 지속적인 협력 체계를 구축함으로써 앞으로의 프로젝트에서도 기술적 지원과 공동 연구를 이어나갈 계획입니다. 이번 협력은 단순한 기술 이전을 넘어, 글로벌 시장에서 경쟁력을 갖춘 콘텐츠 제작사로 자리매김하기 위한 중요한 전환점이 될 것입니다.",
        ]}
      />
      <Album
        base="https://assets.visionarylabstech.com/post/news/cgpro"
        urls={[
          "a1.jpg",
          "a2.jpg",
          "a3.jpg",
          "a3.jpg",
          "a4.jpg",
          "a5.jpg",
          "a6.jpg",
          "a7.jpg",
          "a8.jpg",
          "a9.jpg",
          "a10.jpg",
          "a11.jpg",
          "a12.jpg",
          "a13.jpg",
        ]}
      />
    </>
  );
};

export { CGPRO };
