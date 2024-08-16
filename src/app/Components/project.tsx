import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <section id="project" className="container mx-auto p-4 mt-8 px-40">
      <div className="project mb-8">
        <h1 className="text-4xl font-bold mb-4">-Project</h1>
      </div>

      <div className="project mb-8">
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-yellow-500 mr-2"
            style={{ fontSize: "1.5rem" }}
          />
          [도와조약] 사용자 알러지 기반 알약 추천 웹 서비스
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gray-800 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 transition"
            style={{ fontSize: "1rem" }} // 버튼 글꼴 크기 조정
          >
            GitHub
          </a>
        </h1>
        <p>
          <strong>About Project :</strong> 1. 설문조사를 통해 자신에게 부족한
          영양소를 확인, 그에 맞는 영양제를 추천하는 서비스 <br />
          2. 약 섭취 전, 해당 약품이 알레르기 성분을 포함하고 있는지 유무를
          확인시켜주는 서비스
        </p>
        <p>
          <strong>My Part :</strong>-커뮤니티 전체 글 조회 페이지 <br />
          -약 검색시 조회되는 약 목록 페이지
        </p>
        <p>기술 스택 : React, JavaScript, Redux, Styled-Component</p>
      </div>

      <div className="project mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-yellow-500 mr-2"
            style={{ fontSize: "1.5rem" }}
          />
          펫칭
        </h1>
        <p>
          <strong>About Project :</strong> 1. 반려동물을 맡아줄 펫시터 찾기
          서비스
          <br />
          2. 자신의 펫을 자랑하며 다른 사람의 펫을 구경하는 커뮤니티 서비스
        </p>
        <p>기술 스택 : React Native, TypeScript, TailwindCSS</p>
      </div>
    </section>
  );
}
