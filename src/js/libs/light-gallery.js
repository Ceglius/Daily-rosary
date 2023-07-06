// Підключення базового набору функціоналу
import lightGallery from "lightgallery";

// Плагіни
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgThumbnail from "lightgallery/plugins/thumbnail/lg-thumbnail.min.js";
// import lgZoom from "lightgallery/plugins/zoom/lg-zoom.min.js";

// Базові стилі
// import '../../scss/libs/gallery/lightgallery.scss';
// Стилі доповнень
// import '../../scss/libs/gallery/lg-thumbnail.scss';
// import '../../scss/libs/gallery/lg-video.scss';
// import '../../scss/libs/gallery/lg-autoplay.scss';
// import '../../scss/libs/gallery/lg-zoom.scss';
// import '../../scss/libs/gallery/lg-pager.scss';
// import '../../scss/libs/gallery/lg-fullscreen.scss';
// import '../../scss/libs/gallery/lg-share.scss';
// import '../../scss/libs/gallery/lg-comments.scss';s
// import '../../scss/libs/gallery/lg-rotate.scss';
// import '../../scss/libs/gallery/lg-medium-zoom.scss';
// import '../../scss/libs/gallery/lg-relative-caption.scss';

// Усі стилі
import "../../scss/libs/gallery/lightgallery-bundle.scss";



lightGallery(document.querySelector("[data-gallery]"), {
//   plugins: [lgZoom, lgThumbnail],
  licenseKey: "your_license_key",
  speed: 500,
  getCaptionFromTitleOrAlt: "",
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
  selector: "a",
});
