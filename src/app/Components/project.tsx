export default function Project() {
  return (
    <section id="project" className="container mx-auto p-4 mt-8 px-40">
      <div className="project mb-8">
        <h1 className="text-4xl font-bold mb-4">도와조약</h1>
        <p>
          <strong>About Project :</strong> 1. 설문조사를 통해 자신에게 부족한
          영양소를 확인, 그에 맞는 영양제를 추천하는 서비스 <br />
          2.약 섭취 전, 해당 약품이 알레르기 성분을 포함하고 있는지 유무를
          확인시켜주는 서비스
        </p>
        <p>
          <strong>My Part :</strong>-커뮤니티 전체 글 조회 페이지 <br />
          -약 검색시 조회되는 약 목록 페이지
        </p>
        <p>기술 스택 : React, JavaScript, Redux, Styled-Component</p>
      </div>
      <div className="project mb-8">
        <h1 className="text-4xl font-bold mb-4">펫칭</h1>
        <p>About Project :</p>
        <p>My Part :</p>
        <p>기술 스택 : Vue, TypeScript, Vuex, TailwindCSS</p>
      </div>
    </section>
  );
}
