import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
// import { link45, file, check2all } from "../npm/icon";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            return (
              <div key={idx} className="col-md-3">
                <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                  <ProductImage className={product.cssClass} />
                </CardIcon>
              </div>
            );
          })}
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid bg-light mb-3">
          
        </div>
        <div className="container-fluid bg-light mb-3">
          <div className="row">
            <h2>1 - PRESENTATION DU SECTEUR</h2>
            <p>Le nombre d???apiculteurs dans le monde est estim?? ?? 6,6 millions poss??dant plus de 50 millions de ruches et produisant 1,263 millions de tonnes de miel par an. La Chine, avec 7,8 millions de ruches, assure plus de 20% de la production mondiale de miel (256000 T), soit 2 fois la production europ??enne. Les plus grands exportateurs mondiaux de miel sont la Chine avec 87000 T, l???Argentine avec 73000 T et le Mexique avec 23000 T. En Europe, le premier pays producteur est l???Espagne avec 31000 T, suivi par la France avec 27000 T ; ?? eux deux, ces pays assurent plus de 50% de la production europ??enne. En Tunisie, l???apiculture ne cesse de susciter l???int??r??t des d??cideurs ainsi que des producteurs et ce pour les raisons suivantes : <br/>??? L?????levage d???abeilles mellif??res se pr??te bien ?? l???intensification sans n??cessiter de grandes superficies agricoles ; <br/>??? La marge d???intensification est encore tr??s importante puisqu???on peut obtenir jusqu????? 30 kg par ruche bien conduite contre une moyenne nationale inf??rieure ?? 8 kg. <br/>??? L???apiculture contribue efficacement, par le biais de la pollinisation, ?? l???int??gration entre l???agriculture et l???environnement. <br/>??? L???existence de tradition de consommation de miel.
            </p>
            <h3>Caracteristiques de l???abeille </h3>
            <p>Appelle ausii  ?? apis mellifera  intermissa ??  et elle se trouve cette race dans l???afrique du nord et et en malte et elle se caract??rise par sa coleur noir fonc?? et sa grande taille et son grand langue qui atteint 6.5 metre </p><br />
            <p>Elle est sauvage  et contre les maladies elle est actif et se caracterise aussi par la collect nombreuse  de propolise  et elle s???adapte au climat</p><br />
            <p>Sa production</p><br />
            <p>La moyenne de production national de miel est de 8-12 kg par ruche  aussi el peut produire 30 kg dans les bons conditions </p><br />
            <h3>Les membres d???abeille </h3><br />
            <p>La reine : Appel??e ??galement m??re, la reine des abeilles est la seule abeille f??conde de la colonie. Elle est unique et son r??le est de pondre des ??ufs femelles pour assurer la rel??ve : elle peut en pondre environ 2 500 ??ufs en 24 heures</p><br />
            <p>Les faux bourdons : Un faux bourdon (parfois appel?? aussi abeillaud1 ou bourdon2), est le m??le de l'abeille. Il est important de le distinguer du bourdon en tant que tel, un animal diff??rent, du genre Bombus. Le faux bourdon est le produit de l'??closion d'un ??uf non f??cond??
            </p><br />
            <p>Les ouvriers : La plupart des abeilles d'une ruche sont des ouvri??res. Ce sont elles qui veillent au bon fonctionnement de la ruche et au bien-??tre de ceux qui la peuplent. Leur nombre varie en fonction des saisons : elles sont aux alentours de 100 000 en hiver, et dans les 30 000 en ??t??.
            </p><br />
          </div>
        </div>

        <div className="bg-info bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">NOS PRODUITS</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/asal.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">LE MIEL</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/materiel.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">MATERIEL</div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
