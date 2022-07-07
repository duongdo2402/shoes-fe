
import React from "react"

function Checkout(){
return(

    <div>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Checkout</title>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />

    <link rel="stylesheet" href="./stylesheets/GlobalStyles.css"/>
    <link rel="stylesheet" href="./stylesheets/sitebar.css"/>
    <link rel="stylesheet" href="./stylesheets/base.css"/>
    <link rel="stylesheet" href="./stylesheets/private/checkout.css"/>



    

    <div class="grid wide ">
        <div class="row mt-16">
            <div class="col l-3 m-3 c-3">
                
                <div class="sitebar d-none d-lg-block">
                    <div class="sitebar-wrapper">

                        <div class="sitebar-menu">
                            <p class="sitebar-title">
                                Dashboard
                            </p>
                            <ul class="sitebar-list">
                                <li class="sitebar-item sitebar-item--home">
                                    <a href="/admin-management.html">
                                        <i class="fa-solid fa-house-chimney"></i> Trang chủ
                                    </a>
                                </li>
                                <li class="sitebar-item sitebar-item--revenue">
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
                                <li class="sitebar-item sitebar-item--bills active">
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
                                        <i class="fa-solid fa-truck"></i> Nhà cung cấp
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
                <div class="staff">
                    <div class="title">
                        Hóa đơn
                        <span></span>
                    </div>
                    <div class="heading d-flex flex-column flex-md-row justify-content-md-between">
                       
                        <div class="search d-flex pt-2 pt-md-0 flex-column flex-md-row align-items-md-center">
                            <label for="search-input">Tìm kiếm: </label>
                            <div class="search-wrapper">
                                <input id="search-input" class="search-input" type="text" placeholder="Nhập từ khóa"/>
                                <i class="fa-solid fa-magnifying-glass search-btn"></i>
                            </div>
                        </div>
                    </div>
                    <div class="content pt-5">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-light table">
                                <thead>
                                    <tr class="text-white" style="background-color: var(--primary);">
                                        <th style="min-width: 60px; width: 15%" class="text-center">ID</th>
                                        <th style="min-width: 200px; width: 15%" class="text-center">Mã đặt hàng</th>
                                        <th style="min-width: 140px; width: 25%" class="text-center">Chi nhánh</th>
                                        <th style="min-width: 120px; width: 20%" class="text-center">Ngày xuất</th>
                                        <th style="min-width: 180px; width: 25%" class="text-center">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="text-center align-middle">
                                            <a href="/bills/detail.html" class="text-dark">HD0001</a>
                                        </td>
                                        <td class="text-center align-middle">
                                            DH0001
                                        </td>
                                        <td class="text-center align-middle">Hồ Chí Minh</td>
                                        <td class="text-center align-middle">14/03/2022</td>
                                        <td class="text-center align-middle">
                                            <a href="/bills/edit.html" type="button" class="btn btn-lg btn-outline-primary" data-tooltip="tooltip" data-placement="top" title="Chỉnh sửa">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </a>
                                            <button type="button" class="btn btn-lg btn-outline-danger" data-tooltip="tooltip" data-placement="top" title="Xóa" data-toggle="modal" data-id="HD0001" data-target="#delete-modal">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button type="button" class="btn btn-lg btn-outline-info" data-tooltip="tooltip" data-placement="top" title="In" data-toggle="modal" data-id="HD0001" data-target="#print-modal">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-lg btn-danger">Xem thêm</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

    <footer class="footer "></footer>

    <div id="delete-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Xóa hóa đơn?</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="delete-modal-body__message" class="modal-body__message">Do you want to delete ?</p>
                </div>
                <div class="modal-footer">
                    <button id="btn-confirm-delete" type="button" class="btn btn-danger">Xác nhận</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                </div>
            </div>
        </div>
    </div>

    <form id="delete-form" name="delete-form" method="POST"></form>

    <div id="print-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">In hóa đơn?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="print-modal-body__message" class="modal-body__message">Do you want to print ?</p>
                </div>
                <div class="modal-footer">
                    <button id="btn-confirm-print" type="button" class="btn btn-success">Xác nhận</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            const deleteForm = document.getElementById('delete-form')
            const btnDelete = document.getElementById('btn-confirm-delete')
            const deleteModalMessage = document.getElementById('delete-modal-body__message')
            const btnPrint = document.getElementById('btn-confirm-print')
            const printModalMessage = document.getElementById('print-modal-body__message')
            let id;

            
            $('[data-tooltip="tooltip"]').tooltip();

       
            $('#delete-modal').on('show.bs.modal', function(event) {
                let button = $(event.relatedTarget)
                id = button.data('id')
                deleteModalMessage.innerHTML = `Bạn có thật sự muốn xóa hóa đơn: <strong class="text-danger">${id}</strong> không?`
            })

            // When button delete clicked
            btnDelete.onclick = function() {
                deleteForm.action = ``
                deleteForm.submit()
            }

            $('#print-modal').on('show.bs.modal', function(event) {
                let button = $(event.relatedTarget)
                id = button.data('id')
                printModalMessage.innerHTML = `Bạn có thật sự muốn in hóa đơn: ${id} không?`
            })

            btnPrint.onclick = function() {
                $('#print-modal').modal('hide')
                console.log('In hóa đơn thành công')
            }
             });
    </script>
</div>
)
}
export default Checkout