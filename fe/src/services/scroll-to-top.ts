import $ from "jquery";
export const fnScrollToTop = (): void => {
  const scrollPath = document.querySelector(
    ".scroll-up path"
  ) as SVGPathElement | null;

  if (!scrollPath) {
    return;
  }

  const pathLength = scrollPath.getTotalLength();
  scrollPath.style.transition = scrollPath.style.webkitTransition = "none";
  scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  scrollPath.style.strokeDashoffset = pathLength.toString();
  scrollPath.getBoundingClientRect();
  scrollPath.style.transition = scrollPath.style.webkitTransition =
    "stroke-dashoffset 10ms linear";

  const updateScroll = (): void => {
    const scrollTotal = $(window).scrollTop() ?? 0;
    const height = ($(document).height() ?? 0) - ($(window).height() ?? 0);
    const scrollTotalHeight = pathLength - (scrollTotal * pathLength) / height;
    scrollPath.style.strokeDashoffset = scrollTotalHeight.toString();
  };

  updateScroll();

  $(window).scroll(updateScroll);

  const offset = 50;
  const duration = 950;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() ?? 0 > offset) {
      $(".scroll-up").addClass("active-scroll");
    } else {
      $(".scroll-up").removeClass("active-scroll");
    }
  });
};
