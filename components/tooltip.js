const tooltipContainers = document.querySelectorAll('.tooltip-container');

if (tooltipContainers) {
  tooltipContainers.forEach((container) => {
    container.insertAdjacentHTML('beforeend', `<span class="tooltip__text">Lorem ipsum dolor sit amet consectetur. Ornare sagittis risus sapien ullamcorper. Tortor sed ipsum morbi nibh natoque aenean lacinia. </span>`)
  })
}

