import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './about.css'
import {
  DiPython,
  DiJava,
  DiJavascript,
  DiDocker,
  DiGithubBadge,
  DiSpark
} from 'react-icons/di'

export const About = () => {
  return (
    <Container classname="About-container">
      <Row classname="mb-5 mt-3">
        <Col lg="8">
          <h1 classname="display-4 mb-4">About me</h1>
          <hr classname="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row className="sec_sp pt-5">
        <Col lg="5">
          <h3 className="">Bio</h3>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <div>
            <p>Hello! I'm Thien Le (Kaitouz) and I'm a software engineering student. 
                My current focus is Machine Learning and Big Data and I'm trying to become a Data Engineer. 
                So if you want to accompany me on this path or offer me a job, feel free to contact me. 
                I'm looking for a partner to work with on Kaggle competitions.
            </p>
          </div>
        </Col>
      </Row>


      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Technical Skills</h3>
          <i class="devicon-devicon-plain-wordmark colored"></i>

        </Col>
        <Col lg="7">

          <h3 className="skills-title">Programming Languages</h3>
          <Row style={{ justifyContent: "Left", paddingBottom: "50px" }}>
            <Col className='tech-icons'>
              <DiPython />
            </Col>
            <Col className='tech-icons'>
              <DiJava />
            </Col>
            <Col className='tech-icons'>
              <DiJavascript />
            </Col>
          </Row>

          <h3 className="skills-title">Tools</h3>
          <Row style={{ justifyContent: "Left", paddingBottom: "50px" }}>
          <Col className='tech-icons'>
              <DiDocker />
            </Col>
            <Col className='tech-icons'>
              <DiGithubBadge />
            </Col>
            <Col className='tech-icons'>
              <DiSpark />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lang="5">
          <h3 className="color_sec py-4">Licenses & Certifications</h3>
        </Col>
        <Col lg="7">
          <div className="award py-4">
                <h5 className="award__title"><a href='https://coursera.org/share/0c30d1da97c331a255bb6985a7d17413'>Neural Networks and Deep Learning</a></h5>
                <p className="award_description">A course about foundational concept of neural networks and deep learning by DeepLearning.AI (Stanford University).</p>
          </div>
          <div className="award py-4">
                <h5 className="award__title"><a href='https://coursera.org/share/eae21460623dfdc057055327bc34c08d'>Advanced Learning Algorithms</a></h5>
                <p className="award_description">A practical course on how to implement algorithms to build real-world AI applications by DeepLearning.AI (Stanford University).</p>
          </div>
        </Col>
      </Row>

      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Experiences</h3>
        </Col>
        <Col lg="7">
          <table className="table caption-top">
            <tbody>
              <tr></tr>
              
                <th scope="row">jobtitle</th>
                <td>where</td>
                <td>date</td>
             
            </tbody>
          </table>
        </Col>
      </Row>

    </Container>
  )
}
