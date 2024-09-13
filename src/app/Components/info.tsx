import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Info() {
  return (
    <section id="info" className="container mx-auto p-4 px-40">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:flex justify-center">
          <img
            src="/su.jpeg"
            alt="Your Photo"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <div className="max-w-lg p-6 ">
            <h2 className="text-6xl font-bold mb-16">About Me</h2>
            <div className="text-left">
              <p className="mb-2 text-lg">
                <strong>Name:</strong> Kim Seong Su
              </p>
              <p className="mb-2 text-lg">
                <strong>Email:</strong> hamtoli5@gmail.com
              </p>
              <p className="mb-2 text-lg">
                <strong>Phone:</strong> +82-10-4908-1280
              </p>
              <p className="mb-2 text-lg">
                <strong>github:</strong>{" "}
                <a
                  href="https://github.com/ggggggggithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-black hover:underline"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-20">
        <h2 className="text-4xl font-bold mb-4 text-green-300">My Vision</h2>
        <p className="mb-4">
          저는 웹 애플리케이션을 사용할 때, CSS가 아무리 깔끔해도 인터페이스
          조작이 불편하면 CSS의 장점이 모두 사라진다고 생각합니다. 이러한 생각을
          바탕으로, 저는 항상 편리한 UI를 최우선으로 고려하는 개발자가 되는 것을
          목표로 하고 있습니다. 웹 애플리케이션을 사용자가 쉽게 상호작용할 수
          있도록 만드는 것이 저의 목표입니다.
        </p>
      </div>
      <div className="mb-8 mt-20">
        <h2 className="text-4xl font-bold mb-4 text-blue-300">Skill</h2>
        <div className="project mb-8">
          <h3 className="text-2xl font-bold">ReactJS</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Redux, Zustand를 사용하여 전역 상태관리를 할 수 있습니다.</li>
            <li>함수형 컴포넌트 문법에 익숙합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-2xl font-bold">JavaScript</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>es6 자바스크립트 문법을 사용합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-2xl font-bold">CSS</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>tailwindCSS를 사용할 수 있습니다.</li>
            <li>
              반응형 웹 디자인을 구현하고, 다양한 화면 크기에서 일관된 사용자
              경험을 제공할 수 있습니다.
            </li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-2xl font-bold">HTML</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>시멘틱 마크업 작업이 가능합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-2xl font-bold">Git & Github</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Git을 사용하여 프로젝트 관리를 합니다.</li>
          </ul>
        </div>
        <div className="project mb-8">
          <h3 className="text-2xl font-bold">ETC</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>
              Axios - 서버와의 비동기 통신을 구현하고, GET/POST 요청 및 에러
              처리를 할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
