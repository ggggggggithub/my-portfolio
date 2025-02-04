import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Info() {
  return (
    <section id="info" className="container mx-auto p-4 px-4 md:px-40">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
          <img
            src="/my-portfolio/su.jpeg"
            alt="Your Photo"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <div className="max-w-lg p-6">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-16">
              About Me
            </h2>
            <div className="text-left">
              <p className="mb-2 text-base md:text-lg">
                <strong>Name:</strong> Kim Seong Su
              </p>
              <p className="mb-2 text-base md:text-lg">
                <strong>Email:</strong> hamtoli5@gmail.com
              </p>
              <p className="mb-2 text-base md:text-lg">
                <strong>Phone:</strong> +82-10-4908-1280
              </p>
              <p className="mb-2 text-base md:text-lg">
                <strong>Github:</strong>{" "}
                <a
                  href="https://github.com/ggggggggithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-black hover:underline"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-xl md:text-2xl transition-none"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-12 md:mt-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-green-300">
          My Vision
        </h2>
        <p className="text-sm md:text-base mb-4">
          저는 웹 애플리케이션을 사용할 때, CSS가 아무리 깔끔해도 인터페이스
          조작이 불편하면 CSS의 장점이 모두 사라진다고 생각합니다. 이러한 생각을
          바탕으로, 저는 항상 편리한 UI를 최우선으로 고려하는 개발자가 되는 것을
          목표로 하고 있습니다. 웹 애플리케이션을 사용자가 쉽게 상호작용할 수
          있도록 만드는 것이 저의 목표입니다.
        </p>
      </div>
      <div className="mb-8 mt-12 md:mt-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-300">
          Skill
        </h2>
        <div className="project mb-8">
          <h3 className="text-xl md:text-2xl font-bold">ReactJS</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Redux, Zustand를 사용하여 전역 상태관리를 할 수 있습니다.</li>
            <li>함수형 컴포넌트 문법에 익숙합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-xl md:text-2xl font-bold">
            JavaScript, TypeScript
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>es6 자바스크립트 문법에 익숙합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-xl md:text-2xl font-bold">CSS</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>TailwindCSS를 사용할 수 있습니다.</li>
            <li>Styled-components를 사용할 수 있습니다.</li>
            <li>
              반응형 웹 디자인을 구현하고, 다양한 화면 크기에서 일관된 사용자
              경험을 제공할 수 있습니다.
            </li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-xl md:text-2xl font-bold">HTML</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>시멘틱 마크업 작업이 가능합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-xl md:text-2xl font-bold">Git & Github</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Git을 사용하여 프로젝트 관리를 합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-xl md:text-2xl font-bold">ETC</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>
              Axios - 서버와의 비동기 통신을 구현하고, GET/POST 요청 및 에러
              처리를 할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-8 mt-12 md:mt-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-pink-300">
          Experience
        </h2>
        <h1 className="text-xl md:text-2xl font-bold mb-4">
          미래내일인턴십 (2024.11.25 ~ 2025.01.17)
        </h1>
        <p className="mt-4 text-sm md:text-base">
        미래내일인턴십 프로그램으로 주식회사 해든앰앤씨에서 8주간 IT팀 인턴으로 프론트업무 진행
            </p>
            <p className="mt-2 text-sm md:text-base">
              <h2 className="text-xl md:text-xl font-bold mb-2">My result</h2>
       
              <strong>1. 해든앰앤씨 홈페이지 제작</strong>
              <br /> (1) 은공예 페이지 제작 
               <a
                href="https://www.headen.co.kr/craft"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-white dark:text-black text-white rounded-full ml-2 px-1 md:px-41 py-1 text-[8px] md:text-[12px] hover:bg-gray-700 transition"
              >
                Link
              </a>
              <br/> (2) R&D 연구소개 페이지 제작
              <a
                href="https://www.headen.co.kr/RND"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-white dark:text-black text-white rounded-full ml-2 px-1 md:px-41 py-1 text-[8px] md:text-[12px] hover:bg-gray-700 transition"
              >
                Link
              </a>
              <p className="mt-2 text-sm md:text-base">
              기술 스택 : EJS, CSS
            </p>

              <br className="mb-4" />
              <span className="flex items-center mt-6">
  <strong className="mr-2">2. 다량플레이스 리뉴얼</strong>
  <a
    href="https://daryang.co.kr/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 dark:bg-white dark:text-black text-white rounded-full px-1 md:px-41  text-[8px] md:text-[12px] hover:bg-gray-700 transition"
  >
    Link
  </a>

</span>
 (1) 배송조회 부분 - api를 연동해 데이터를 가져와 화면에 나타내는 페이지
 <br /> (2) 내 요청서 페이지 부분 - api를 연동해 데이터를 가져와 화면에 나타내는 페이지
 <p className="mt-2 text-sm md:text-base">
              기술 스택 : EJS, CSS
            </p>
            </p>
      </div>
    </section>
  );
}
