import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <section id="project" className="container mx-auto p-4 mt-8 px-4 md:px-40">
      <div className="project mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-300">
          Project
        </h1>
      </div>

      <div className="project mb-8">
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-2">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-yellow-500 mt-1.5 text-lg md:text-xl"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              [도와조약] 사용자 알러지 기반 알약 추천 웹 서비스
              <a
                href="https://github.com/codestates-seb/seb43_main_009"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-white dark:text-black text-white rounded-full ml-4 px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://dowajoyak.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-white dark:text-black text-white rounded-full ml-4 px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-gray-700 transition"
              >
                Link
              </a>
            </h1>
            <p className="mt-4 text-sm md:text-base">
              <strong>About Project :</strong> 1. 설문조사를 통해 자신에게
              부족한 영양소를 확인, 그에 맞는 영양제를 추천하는 서비스 <br />
              2. 약 섭취 전, 해당 약품이 알레르기 성분을 포함하고 있는지 유무를
              확인시켜주는 서비스
            </p>
            <p className="mt-2 text-sm md:text-base">
              <strong>My Part :</strong> - 커뮤니티 전체 글 조회 페이지 <br />
              - Axios를 사용해 서버에 있는 데이터를 불러옵니다. <br />
              - Redux를 사용해 상태관리를 진행합니다. <br />
              - 약 검색 시 조회되는 약 목록 페이지
              <br />
              - Axios를 사용해 서버에 있는 데이터를 불러옵니다. <br />- Redux를
              사용해 상태관리를 진행합니다.
            </p>
            <p className="mt-2 text-sm md:text-base">
              기술 스택 : React, JavaScript, Redux, Styled-Component
            </p>
          </div>
        </div>
      </div>

      <div className="project mb-8">
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-2">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-yellow-500 text-lg md:text-xl"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              펫칭
              <a
                href="https://github.com/Petching/Petching"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-white dark:text-black text-white rounded-full ml-4 px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://petching.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-white dark:text-black text-white rounded-full ml-4 px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-gray-700 transition"
              >
                Link
              </a>
            </h1>
            <p className="mt-4 text-sm md:text-base">
              <strong>About Project :</strong> 1. 반려동물을 맡아줄 펫시터 찾기
              서비스
              <br />
              2. 자신의 펫을 자랑하며 다른 사람의 펫을 구경하는 커뮤니티 서비스
            </p>
            <p className="mt-2 text-sm md:text-base">
              기술 스택 : React, TypeScript, Zustand, Tailwind-CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
