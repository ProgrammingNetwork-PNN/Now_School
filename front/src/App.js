import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import {Routes, Route,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


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
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">지금 우리 학교는</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">홈</Nav.Link>
            <Nav.Link href="post">게시글</Nav.Link>
            <Nav.Link href="mypage">마이페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br/><img src={process.env.PUBLIC_URL + '/img/main-img.jpg'}/><br/><br/>
    <Routes>
      <Route path="/home" element={<div> 
        <p>버튼을 클릭하시면 해당 건물 사용학과를 알려드립니다.</p>
        <img src={process.env.PUBLIC_URL + '/img/campus-map.jpg'}/>
        <br/><br/><br/><br/>
        <Button href="2">2.하연관 (A동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="3">3.창조관 (B동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="4">4.신어관 (C동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="5">5.탐진관 (D동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="6">6.장영실관 (E동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="7">7.성산관 (F동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="8">8.일강관 (G동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="9">9.약학관 (H동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="10">10.PRIM의생명공학관 (I동)</Button>&nbsp;&nbsp;&nbsp;
        <Button href="11">11.체육학과동 (J동)</Button>
        
      </div>} />
      <Route path="/2" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>2.하연관 (A동)</p>
        <img src={process.env.PUBLIC_URL + '/img/2.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>보건안전공학과(407)</ListGroup.Item>
      <ListGroup.Item>식품영양, 식품공학부(418)</ListGroup.Item>
      <ListGroup.Item>의공학부(308)	</ListGroup.Item>
    </ListGroup>
    <br/><br/>
        <Button href="home">뒤로 가기</Button>
        
      </div>} />
      <Route path="/3" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>3.창조관 (B동)</p>
        <img src={process.env.PUBLIC_URL + '/img/3.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>의예과(118)</ListGroup.Item>
      <ListGroup.Item>환경공학과(101)</ListGroup.Item>
      <ListGroup.Item>방사선화학과(209)	</ListGroup.Item>
      <ListGroup.Item>의생명공학과(518)	</ListGroup.Item>
    </ListGroup>
    <br/><br/>
        <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/4" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>4.신어관 (C동)</p>
        <img src={process.env.PUBLIC_URL + '/img/4.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>간호학과(425)</ListGroup.Item>
      <ListGroup.Item>소비자가족학과(424)</ListGroup.Item>
      <ListGroup.Item>미디어커뮤니케이션학과(209)	</ListGroup.Item>
      <ListGroup.Item>사회복지학과(236)	</ListGroup.Item>
      <ListGroup.Item>유아교육과(410)	</ListGroup.Item>
      <ListGroup.Item>특수교육과(333)	</ListGroup.Item>
      <ListGroup.Item>멀티미디어학부(504)</ListGroup.Item>
      <ListGroup.Item>실내건축학과(504)	</ListGroup.Item>
      <ListGroup.Item>웹툰영상학과(504)	</ListGroup.Item>
      <ListGroup.Item>컴퓨터디자인과(504)	</ListGroup.Item>
      <ListGroup.Item>통계학과(311)	</ListGroup.Item>
    </ListGroup>
    <br/><br/>
        <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/5" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>5.탐진관 (D동)</p>
        <img src={process.env.PUBLIC_URL + '/img/5.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>인문문화융합학부(539)</ListGroup.Item>
      <ListGroup.Item>공공인재학부(523-1)</ListGroup.Item>
      <ListGroup.Item>보건행정학과(307-2)	</ListGroup.Item>
      <ListGroup.Item>경찰행정학과(501)	</ListGroup.Item>
      <ListGroup.Item>법학과(519)	</ListGroup.Item>
      <ListGroup.Item>경영학과(423)</ListGroup.Item>
      <ListGroup.Item>국제통상학과(401)</ListGroup.Item>
      <ListGroup.Item>문화콘텐츠학과(538)	</ListGroup.Item>
      <ListGroup.Item>자유전공학부(522)	</ListGroup.Item>
    </ListGroup>
    <br/><br/>
       <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/6" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>6.장영실관 (E동)</p>
        <img src={process.env.PUBLIC_URL + '/img/6.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>상담심리치료학과(534)</ListGroup.Item>
      <ListGroup.Item>건축학과(440)</ListGroup.Item>
      <ListGroup.Item>산업경영공학과(443)	</ListGroup.Item>
      <ListGroup.Item>재난방재학과(442)	</ListGroup.Item>
      <ListGroup.Item>계약학과(209)	</ListGroup.Item>
      <ListGroup.Item>토목도시공학부(442)</ListGroup.Item>
      <ListGroup.Item>AI소프트웨어학부(239)</ListGroup.Item>
      <ListGroup.Item>컴퓨터공학과(342)	</ListGroup.Item>
      <ListGroup.Item>드론IOT시뮬레이션학부(340)	</ListGroup.Item>
    </ListGroup>
    <br/><br/>
        <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/7" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>7.성산관 (F동)</p>
        <img src={process.env.PUBLIC_URL + '/img/7.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>물리치료학과(510)</ListGroup.Item>
      <ListGroup.Item>반려동물보건학과(527)	</ListGroup.Item>
      <ListGroup.Item>임상병리학과(405)	</ListGroup.Item>
      <ListGroup.Item>작업치료학과(412)	</ListGroup.Item>
      <ListGroup.Item>의료IT학과(912)	</ListGroup.Item>
      <ListGroup.Item>음악학과(809)		</ListGroup.Item>
    </ListGroup>
    <br/><br/>
      <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/8" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>8.일강관 (G동)</p>
        <img src={process.env.PUBLIC_URL + '/img/8.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>미래에너지공학과(107)</ListGroup.Item>
      <ListGroup.Item>전자IT기계자동차공학부(210)		</ListGroup.Item>
    </ListGroup>
    <br/><br/>
    <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/9" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>9.약학관 (H동)</p>
        <img src={process.env.PUBLIC_URL + '/img/9.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>약학과(320)</ListGroup.Item>
    </ListGroup>
    <br/><br/>
   <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/10" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>10.PRIM의생명공학관 (I동)</p>
        <img src={process.env.PUBLIC_URL + '/img/10.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>나노융합공학부(208)	</ListGroup.Item>
      <ListGroup.Item>제약공학과(408)</ListGroup.Item>
    </ListGroup>
    <br/><br/>
        <Button href="home">뒤로 가기</Button>
      </div>} />
      <Route path="/11" element={<div>
        <p style={ {color : 'blue', fontSize : '30px'} }>11.체육학과동 (J동)</p>
        <img src={process.env.PUBLIC_URL + '/img/11.jpg'}/><br/><br/>
        <ListGroup>
      <ListGroup.Item>스포츠헬스케어(201)</ListGroup.Item>
    </ListGroup>
    <br/><br/>
 <Button href="home">뒤로 가기</Button>
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
        <br/><br/>
        <Button href="change">게시글 수정</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button href="write">게시글 작성</Button>

      </div>} />
      <Route path="/change" element={<div>
       게시글 수정
       
      </div>} />

      <Route path="/write" element={<div>
        작성
 
      </div>} />

      <Route path="/mypage" element={<div>
        <img src={process.env.PUBLIC_URL + '/img/프로필.png'}/>


        <br/><br/><br/><h1 style={{color:'gray'}}>내가 쓴 글</h1><br/><br/>

        

        <div className="list">
        <h4>{글제목[0]} </h4>
        <p>{글내용[0]}</p>
        <span onClick={() => {좋아요0변경(좋아요0+1)}}>🧡</span> {좋아요0} 
        <span onClick={() => {댓글0변경(댓글0+1)}}>💭</span> {댓글0}
        <p>방금 / 익명</p>
        </div>

        </div>} />

       
      

    </Routes>

    </div>
  );
  
}

export default App;
