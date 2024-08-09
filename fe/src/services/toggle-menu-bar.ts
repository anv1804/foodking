import $ from "jquery";

export const toggleOverlay = () => {
  $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
    $(".offcanvas__info").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  });
};

export const toggleSideBar = () => {
  $(".sidebar__toggle").on("click", function () {
    $(".offcanvas__info").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
  });
};

// () => {
//     $(".offcanvas__close, .offcanvas__overlay").off("click");
//     $(".sidebar__toggle").off("click");
// };
