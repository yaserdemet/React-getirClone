import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="container mt-5 mb-3">
      <div className="row text-sm-center">
        <section className="d-flex flex-column gap-3 col-md-3  align-items-center">
          <Typography component="h1" color="secondary" variant="h6" align="center">
            Getiri İndirin
          </Typography>
          {/* variant ile görünüşünü belirleriz. */}
          <div>
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </div>
        </section>

        <section className="d-flex flex-column gap-3 col-md-3 ">
          <Typography component="h1" color="secondary" variant="h6" align="center">
            Getir'i Keşfedin
          </Typography>
          <ul   style={{ listStyleType: "none", fontSize: "0.8rem"  }}>
            <li>Hakkımızda</li>
            <li>Kariyer</li>
            <li>Teknoloji Kariyerleri</li>
            <li>İletişim</li>
            <li>Sosyal Sorumluluk Projeleri</li>
          </ul>
        </section>

        <section className="d-flex flex-column gap-3 col-md-3">
          <Typography component="h1"color="secondary"  variant="h6" align="center">
            Yardıma mı ihtiyacınız var?
          </Typography>
          <ul style={{ listStyleType: "none", fontSize: "0.8rem" }}>
            <li>Sıkça Sorulan Sorular</li>
            <li>Kişisel Verilerin Korunması</li>
            <li>Gizlilik Politikası</li>
            <li>Kullanım Koşulları</li>
            <li>Çerez Politikası</li>
          </ul>
        </section>
        <section className="d-flex flex-column gap-3 col-md-3">
          <Typography component="h1" color="secondary" variant="h6" align="center">
          İş Ortağımız Olun
          </Typography>
          <ul style={{ listStyleType: "none", fontSize: "0.8rem" }}>
            <li>Bayimiz Olun</li>
            <li>Deponuzu Kiralayın</li>
            <li>GetirYemek Restoranı Olun</li>
            <li>GetirÇarşı İşletmesi Olun</li>
            <li>Zincir Restoranlar</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Footer;
