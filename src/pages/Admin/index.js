
import React from "react"
import styles from '../Admin/stylesheets/sitebar.css'
function Admin(){
return(
   <div> 
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>Admin Management</title>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
        integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
        integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="stylesheets/GlobalStyles.css"/>
    <link rel="stylesheet" href="stylesheets/sitebar.css"/>
    <link rel="stylesheet" href="stylesheets/admin-management.css"/>
    


    <div class="grid wide ">
        <div class="row mt-16">
            <div class="col l-3 m-3 c-3">
        
                <div class="sitebar d-none d-lg-block">
                    <div class  styles="sitebar-wrapper">

                        <div class styles="sitebar-menu">
                            <p class styles="sitebar-title">
                                Dashboard
                            </p>
                            <ul class ="sitebar-list">
                                <li class="sitebar-item sitebar-item--admin">
                                    <a href="/admin-management.html">
                                        <i class="fa-solid fa-house-chimney"></i> Trang chủ
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--revenue active">
                                    <a href="/revenue.html">
                                        <i class="fa-solid fa-chart-line"></i> Doanh thu
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Quick Menu
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--staffs">
                                    <a href="#">
                                        <i class="fa-solid fa-user-large"></i> Nhân viên
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--members">
                                    <a href="/customer/index.html">
                                        <i class="fa-solid fa-user-group"></i> Khách hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--products">
                                    <a href="/product/index.html">
                                        <i class="fa-solid fa-shoe-prints"></i> Sản phẩm
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--bills">
                                    <a href="/bills/index.html">
                                        <i class="fa-solid fa-file-invoice-dollar"></i> Hóa đơn
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--schedules">
                                    <a href="#">
                                        <i class="fa-regular fa-calendar-days"></i> Giỏ hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--materials">
                                    <a href="#">
                                        <i class="fa-solid fa-cubes"></i> Tồn kho
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--received-notes">
                                    <a href="#">
                                        <i class="fa-solid fa-clipboard-list"></i> Phiếu nhập hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--suppliers">
                                    <a href="#">
                                        <i class="fa-solid fa-truck"></i>  Nhà cung cấp
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Actions
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--tables-condition">
                                    <a href="#">
                                        <i class="fa-solid fa-table-cells"></i> Xem lịch đặt hàng
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--order">
                                    <a href="#">
                                        <i class="fa-solid fa-pen-to-square"></i> Đặt hàng
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Other
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--password">
                                    <a href="/change-password.html">
                                        <i class="fa-solid fa-lock"></i> Đổi mật khẩu
                                    </a>
                                </li>
                                <li class="sitebar-item">
                                    <a href="#">
                                        <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            
            <div class="col l-8 m-8 c-8 mt-32">
                <div class="home">
                  
                    <div class="title">
                        Thông tin tài khoản
                        <span></span>
                    </div>
                    <div class="home-info">
                        <div class="row">
                            <div class="col-12 col-lg-3 d-flex justify-content-center">
                                <img src="./unknown.jpg" alt="Avatar"/>
                            </div>
                            <div class="col-12 col-lg-9 p-0">
                                <div class="home-info__group d-flex justify-content-center">
                                    <div class="row w-100">
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Mã nhân viên:</strong></p>
                                            <input type="text" value="NV005533" disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Tên nhân viên:</strong></p>
                                            <input type="text" value="Nguyễn Văn Đạt" disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Chức vụ:</strong></p>
                                            <input type="text" value="Quản lý cửa hàng" disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Số điện thoại:</strong></p>
                                            <input type="text" value="01234567890" disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Ngày sinh:</strong></p>
                                            <input type="text" value="06/09/1969" disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Giới tính:</strong></p>
                                            <input type="text" value="Nam" disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Email:</strong></p>
                                            <input type="text" value="admin@gmail.com" disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3">
                                            <p><strong>Chi nhánh:</strong></p>
                                            <input type="text" value="Hà Nội"  disabled readonly/>
                                        </div>
                                        <div class="col-12 col-md-4 px-1 pb-3 ">
                                            <p><strong>Lương:</strong></p>
                                            <input type="text " value="50.000.000đ " disabled readonly/>
                                        </div>
                                        <div class="col-12 px-1 pb-3 ">
                                            <p><strong>Địa chỉ:</strong></p>
                                            <input type="text " value="Quận Ba Đình, Hà Nội " disabled readonly/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Admin;