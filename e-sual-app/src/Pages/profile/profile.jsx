import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../../style/style.css'
import SearchForm from './components/serachForm'

function Profile() {
    return (
        <>
            <section class="home">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 home-search">
                <SearchForm/>
                        </div>
                        <div class="col-md-9 home-contents">
                            <div class="profile-contents">
                                <div class="d-flex flex-direction-column-res ps-3">
                                    <div class="img-box">
                                        <img class="w-100" src="assets/image/Ellipse 1.png" alt="" />
                                    </div>
                                    <div class="profile-names ms-3 mt-3 text-align-center-res">
                                        <h3 class="mb-3">Hunter Rodgers</h3>
                                        <div class="d-flex ">
                                            <button type="button" class="green-button-profile">Yeni istifadəçi</button>
                                            <button type="button" class="purple-button-profile">Xal: 1500</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="follow-button-box mt-4 text-align-center-res">
                                    <button type="button">1 entry</button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">0 takipçi</button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">4 takipedilən</button>
                                </div>
                                <div class="description-box mt-4">
                                    Hi! My name is Hunter Rodgers. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                    a type specimen book.
                                </div>
                                <div style={{ display: 'block', width: 700, padding: 30 }}>
                                    <Tabs defaultActiveKey="first" >
                                        <Tab eventKey="first" title="Entry`lər" className="pt-3">
                                            Hii, I am 1st tab content
                                        </Tab>
                                        <Tab eventKey="second" title="Favorilər" className="pt-3">
                                            Hii, I am 2nd tab content
                                        </Tab>
                                        <Tab eventKey="third" title="Statistika" className="pt-3 filterThree">
                                            <h6>Paylaşılan post sayı: <span>1</span></h6>
                                            <h6>Yazılmış rəy sayı: <span> 42</span></h6>
                                            <h6>Favori entry sayı:<span> 35 </span></h6>
                                            <h6>Xal:<span> 1500 </span></h6>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Profile
