import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

import jsLogo from "../../assets/js.png";
import tsLogo from "../../assets/ts.png";
import reactLogo from "../../assets/react.png";
import vueLogo from "../../assets/vue.png";
import reduxLogo from "../../assets/redux.png";
import nodeLogo from "../../assets/node.png";
import rxLogo from "../../assets/rxjs.png";
import htmlLogo from "../../assets/html.png";
import sassLogo from "../../assets/sass.png";
import sagaLogo from "../../assets/saga.png";
import gitLogo from "../../assets/git.png";

export const AboutPage = () => {
  return (
    <div>
      <h2>О себе</h2>
      <p>
        Привет, меня зовут Дима, мне 18 лет. Я программист, специализирующийся на фронтенд разработке. За более чем 2
        года работы с вебом я успел познакомиться с такими технологиями как:
      </p>
      <ListGroup className="mb-3" style={{ maxWidth: 400 }}>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Javascript</span>
          <Image height={30} width="auto" src={jsLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Typescript</span>
          <Image height={30} width="auto" src={tsLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>React</span>
          <Image height={30} width="auto" src={reactLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>VueJS</span>
          <Image height={30} width="auto" src={vueLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Redux</span>
          <Image height={30} width="auto" src={reduxLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Node.js</span>
          <Image height={30} width="auto" src={nodeLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>RxJS</span>
          <Image height={30} width="auto" src={rxLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Html</span>
          <Image height={30} width="auto" src={htmlLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Sass</span>
          <Image height={30} width="auto" src={sassLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Redux Saga</span>
          <Image height={30} width="auto" src={sagaLogo} />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>Git</span>
          <Image height={30} width="auto" src={gitLogo} />
        </ListGroup.Item>
      </ListGroup>
      <p>Весной 2023 года я проходил стажировку в Яндекс.Маркете.</p>
      <p>Буду рад попробовать себя в чем-то новом.</p>
      <p>
        Моё резюме: <a href="https://hh.ru/resume/89f11765ff0b3de1ad0039ed1f723832545a56">hh.ru</a>
      </p>
      <p>
        Мой GitHub: <a href="https://github.com/PiggyDiggy">GitHub</a>
      </p>
    </div>
  );
};
