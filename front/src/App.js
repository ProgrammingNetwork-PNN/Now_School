import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import {Routes, Route,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function App() {

  let[글제목,b] =useState(['와 인제대 폼 미쳤다', '밥 사줄 사람', '민섭아 잘하자']);
  let[글내용,c] =useState(['이번 축제 레전드', '뿡', '제발 수업 좀 와!!']);
  let[좋아요0,좋아요0변경] = useState(0);
  let[좋아요1,좋아요1변경] = useState(0);
  let[좋아요2,좋아요2변경] = useState(0);
  let[댓글0,댓글0변경] = useState(0);
  let[댓글1,댓글1변경] = useState(0);
  let[댓글2,댓글2변경] = useState(0);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">지금 우리 학교는</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">홈</Nav.Link>
            <Nav.Link href="post">게시글</Nav.Link>
            <Nav.Link href="mypage">마이페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <img src={process.env.PUBLIC_URL + '/img/main-img.jpg'}/>
    <Routes>
      <Route path="/home" element={<div>
        <img src={process.env.PUBLIC_URL + '/img/campus-map.jpg'}/>
      </div>} />

      <Route path="/post" element={<div>
        <div className="list">
        <h4>{글제목[0]} </h4>
        <p>{글내용[0]}</p>
        <span onClick={() => {좋아요0변경(좋아요0+1)}}>🧡</span> {좋아요0} 
        <span onClick={() => {댓글0변경(댓글0+1)}}>💭</span> {댓글0}
        <p>방금 / 익명</p>
        </div>
        
        <div className="list">
        <h4>{글제목[1]} </h4>
        <p>{글내용[1]}</p>
        <span onClick={() => {좋아요1변경(좋아요1+1)}}>🧡</span> {좋아요1} 
        <span onClick={() => {댓글1변경(댓글1+1)}}>💭</span> {댓글1}
        <p>방금 / 익명</p>
        </div>

        <div className="list">
        <h4>{글제목[2]} </h4>
        <p>{글내용[2]}</p>
        <span onClick={() => {좋아요2변경(좋아요2+1)}}>🧡</span> {좋아요2} 
        <span onClick={() => {댓글2변경(댓글2+1)}}>💭</span> {댓글2}
        <p>방금 / 익명</p>
        </div>

        <Button href="change">게시글 수정</Button>
        <Button href="write">게시글 작성</Button>

      </div>} />

      <Route path="/mypage" element={<div>
        <img src={process.env.PUBLIC_URL + '/img/프로필.png'}/>


        <h1 style={{color:'gray'}}>내가 쓴 글</h1>

        

        <div className="list">
        <h4>{글제목[0]} </h4>
        <p>{글내용[0]}</p>
        <span onClick={() => {좋아요0변경(좋아요0+1)}}>🧡</span> {좋아요0} 
        <span onClick={() => {댓글0변경(댓글0+1)}}>💭</span> {댓글0}
        <p>방금 / 익명</p>
        </div>

        </div>} />

       
      <Route path="/change" element={<div>
       게시글 수정
       
      </div>} />

      <Route path="/write" element={<div>
        작성
 
      </div>} />

    </Routes>

    </div>
  );
  
}

export default App;
