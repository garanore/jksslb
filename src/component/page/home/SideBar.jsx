// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="navbar-expand-sm">
      <div className=" ">
        <div className="">
          {/* <!-- Sidebar --> */}
          <aside id="sidebar" className="js-sidebar ">
            <div className="h-100">
              <div className="sidebar-logo">{/* <a href="#"></a> */}</div>

              <div>
                <ul className="sidebar-nav">
                  <li className="sidebar-header">Admin Elements</li>
                  <li className="sidebar-item">
                    <Link to="/DashBoard" className="sidebar-link">
                      <i className="fa-solid fa-list pe-2"></i>
                      ড্যাশবোর্ড
                    </Link>
                  </li>

                  {/* সদস্য শুরু  */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#member"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-file-lines pe-2"></i>
                      সদস্য
                    </a>

                    <ul
                      id="member"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <Link to="/MemberAdmission" className="sidebar-link">
                          সদস্য ভর্তি করুণ
                        </Link>
                      </li>

                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          সদস্য বিবরণ
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* সদস্য শেষ */}

                  {/* কর্মী শুরু */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#worker"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-sliders pe-2"></i>
                      কর্মী
                    </a>
                    <ul
                      id="worker"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <Link to="WorkerAdd" className="sidebar-link">
                          কর্মী যোগ করুণ
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="WorkerDetails" className="sidebar-link">
                          কর্মীর বিবরণ
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="WorkerTransfer" className="sidebar-link">
                          কর্মী পরিবর্তন করুণ
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* কর্মী শেষ  */}

                  {/* কেন্দ্র শুরু */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#center"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-sliders pe-2"></i>
                      কেন্দ্র
                    </a>
                    <ul
                      id="center"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <Link to="CenterAdd" className="sidebar-link">
                          কেন্দ্র যোগ করুণ
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="CenterDetails" className="sidebar-link">
                          কেদ্রের তালিকা
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="MemberDetails" className="sidebar-link">
                          কেদ্রের সদস্য তালিকা
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          কেদ্রের হিসাব
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* কেন্দ্র শেষ  */}

                  {/* শাঁখা শুরু */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#branch"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-sliders pe-2"></i>
                      শাঁখা
                    </a>
                    <ul
                      id="branch"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <Link to="BranchAdd" className="sidebar-link">
                          শাঁখা যোগ করুণ
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="BranchList" className="sidebar-link">
                          শাঁখার তালিকা
                        </Link>
                      </li>
                      {/* <li className="sidebar-item">
                        <Link to="BranchMemberList" className="sidebar-link">
                          শাঁখার সদস্য তালিকা
                        </Link>
                      </li> */}
                      <li className="sidebar-item">
                        <Link to="OfficeCollection" className="sidebar-link">
                          অফিস জমা
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* শাঁখা শেষ  */}

                  {/* ঋণ শুরু  */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#loan"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-sliders pe-2"></i>
                      ঋণ
                    </a>
                    <ul
                      id="loan"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <Link to="LoanOpen" className="sidebar-link">
                          ঋণ বিতরণ
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="LoanDetails" className="sidebar-link">
                          ঋণ বিবরণ
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="InstallmentDetails" className="sidebar-link">
                          কিস্তির তালিকা
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="InstallmentCollection"
                          className="sidebar-link"
                        >
                          কিস্তি কালেকশন
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* ঋণ শেষ  */}

                  {/* সঞ্চয় শুরু  */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#savings"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-sliders pe-2"></i>
                      সঞ্চয়
                    </a>
                    <ul
                      id="savings"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <Link to="SavingsOpen" className="sidebar-link">
                          সঞ্চয় খুলুন
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="SavingsList" className="sidebar-link">
                          সঞ্চয়ের বিবরণ
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="CollectionList" className="sidebar-link">
                          কালেকশন তালিকা
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="SavingsCollection" className="sidebar-link">
                          সঞ্চয় কালেকশন
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="SavingsWithdraw" className="sidebar-link">
                          সঞ্চয় উত্তলন
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* সঞ্চয় শেষ  */}

                  {/* হিসাব শুরু */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#account"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-sliders pe-2"></i>
                      হিসাব
                    </a>
                    <ul
                      id="account"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          শাঁখা যোগ করুণ
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          শাঁখার তালিকা
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          শাঁখার বিবরণ
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          অফিস জমা
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* হিসাব শুরু  */}

                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#auth"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-user pe-2"></i>
                      Auth
                    </a>
                    <ul
                      id="auth"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          Login
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <Link to="Auth-register" className="sidebar-link">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-header">Multi Level Menu</li>
                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#multi"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-share-nodes pe-2"></i>
                      Multi Dropdown
                    </a>
                    <ul
                      id="multi"
                      className="sidebar-dropdown list-unstyled collapse"
                      data-bs-parent="#sidebar"
                    >
                      <li className="sidebar-item">
                        <a
                          href="#"
                          className="sidebar-link collapsed"
                          data-bs-target="#level-1"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          Level 1
                        </a>
                        <ul
                          id="level-1"
                          className="sidebar-dropdown list-unstyled collapse"
                        >
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                              Level 1.1
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                              Level 1.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
