import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bottom">
        <div className="div_bottom">
          <div className="left-bottom">
            <p className="logo" style={{ fontSize: 30 }}>
              <a href="index.html">
                <span style={{ color: "red" }}>C</span>MANGA
              </a>
            </p>
            <div>
              <p>
                Luôn cập nhật liên tục các bộ truyện mới, truyện VIP để phục vụ độc
                giả
                <br />
                Đọc truyện hoàn toàn miễn phí, hỗ trợ đa thiết bị.
              </p>
            </div>
            <div>
              <p>
                Email khiếu nại:cmangadotcom@gmail.com
                <br />
                <a>Giới thiệu</a>
                <a>Liên hệ</a>
                <a>Chính sách </a>
                <br />
                Copyright © 2020 CMANGAVIP.COM
              </p>
            </div>
          </div>
          <div className="right-bottom">
            <ul style={{ paddingLeft: "0rem" }}>
              <li>
                <a href="">Truyện tranh ngôn tình</a>
              </li>
              <li>
                <a href="">manhwa</a>
              </li>
              <li>
                <a href="">manhua</a>
              </li>
              <li>
                <a href="">Đam mỹ</a>
              </li>
              <li>
                <a href="">yaoi</a>
              </li>
              <li>
                <a href="">Ngôn tình</a>
              </li>
              <li>
                <a href="">Cổ đại</a>
              </li>
              <li>
                <a href="">Chuyển sinh</a>
              </li>
              <div className="clear" />
            </ul>
            <p>
              Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet.
              Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên
              web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào, khi được yêu
              cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
