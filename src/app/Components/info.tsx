export default function Info() {
  return (
    <section id="info" className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">My Vision</h2>
        <p className="mb-4">
          저는 웹 애플리케이션을 사용할 때, CSS가 아무리 깔끔해도 인터페이스
          조작이 불편하면 CSS의 장점이 모두 사라진다고 생각합니다. 이러한 생각을
          바탕으로, 저는 항상 편리한 UI를 최우선으로 고려하는 개발자가 되는 것을
          목표로 하고 있습니다. 웹 애플리케이션을 사용자가 쉽게 상호작용할 수
          있도록 만드는 것이 저의 목표입니다.
        </p>
      </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
