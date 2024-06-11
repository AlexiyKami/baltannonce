const footer = document.querySelector('.footer');

footer.innerHTML = `
<div class="footer__container _container">
  <div class="footer__content">
    <a href="index.html" class="footer__logo" aria-label="Главная">
      <svg width="161" height="20" viewBox="0 0 161 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M154.298 19.9904C152.816 19.9904 151.537 19.6825 150.459 19.0669C149.388 18.4448 148.564 17.5661 147.987 16.431C147.41 15.2894 147.121 13.9458 147.121 12.4002C147.121 10.8802 147.41 9.54626 147.987 8.39827C148.571 7.24387 149.385 6.346 150.43 5.70467C151.476 5.05692 152.704 4.73305 154.115 4.73305C155.026 4.73305 155.885 4.88055 156.693 5.17557C157.508 5.46417 158.226 5.9131 158.848 6.52237C159.477 7.13164 159.97 7.90765 160.329 8.85041C160.689 9.78676 160.868 10.9027 160.868 12.1982V13.266H148.757V10.9187H157.53C157.524 10.2517 157.379 9.65849 157.097 9.13901C156.815 8.61312 156.421 8.19946 155.914 7.89803C155.414 7.5966 154.83 7.44589 154.163 7.44589C153.451 7.44589 152.826 7.61905 152.287 7.96537C151.748 8.30528 151.328 8.75421 151.027 9.31217C150.732 9.86372 150.581 10.4698 150.575 11.1304V13.1794C150.575 14.0388 150.732 14.7763 151.046 15.392C151.36 16.0013 151.8 16.4695 152.364 16.7965C152.928 17.1172 153.589 17.2775 154.346 17.2775C154.852 17.2775 155.311 17.207 155.721 17.0659C156.132 16.9184 156.488 16.7035 156.789 16.4214C157.091 16.1392 157.318 15.7896 157.472 15.3728L160.724 15.7383C160.519 16.5977 160.127 17.3481 159.55 17.9894C158.979 18.6243 158.248 19.1182 157.357 19.4709C156.465 19.8172 155.446 19.9904 154.298 19.9904Z" fill="currentColor"/>
        <path d="M138.567 19.9904C137.091 19.9904 135.825 19.6665 134.767 19.0188C133.715 18.371 132.904 17.4764 132.333 16.3348C131.768 15.1868 131.486 13.8656 131.486 12.3713C131.486 10.8706 131.775 9.54626 132.352 8.39827C132.929 7.24387 133.744 6.346 134.795 5.70467C135.854 5.05692 137.104 4.73305 138.547 4.73305C139.747 4.73305 140.808 4.95431 141.732 5.39683C142.661 5.83293 143.402 6.45182 143.954 7.25349C144.505 8.04874 144.82 8.97868 144.896 10.0433H141.568C141.433 9.33141 141.113 8.73818 140.606 8.26359C140.106 7.78259 139.436 7.54209 138.595 7.54209C137.884 7.54209 137.258 7.73449 136.719 8.11929C136.181 8.49768 135.761 9.04281 135.459 9.75469C135.164 10.4666 135.017 11.3195 135.017 12.3136C135.017 13.3205 135.164 14.1863 135.459 14.911C135.754 15.6293 136.168 16.1841 136.7 16.5753C137.239 16.9601 137.871 17.1525 138.595 17.1525C139.108 17.1525 139.567 17.0563 139.971 16.8639C140.382 16.6651 140.725 16.3797 141 16.0077C141.276 15.6357 141.465 15.1836 141.568 14.6513H144.896C144.813 15.6967 144.505 16.6234 143.973 17.4315C143.441 18.2331 142.716 18.8616 141.799 19.317C140.882 19.7659 139.804 19.9904 138.567 19.9904Z" fill="currentColor"/>
        <path d="M119.096 11.0438V19.7018H115.613V4.92545H118.942V7.43627H119.115C119.455 6.60895 119.997 5.95158 120.741 5.46417C121.491 4.97675 122.418 4.73305 123.521 4.73305C124.541 4.73305 125.429 4.9511 126.186 5.38721C126.949 5.82331 127.539 6.45503 127.956 7.28235C128.379 8.10967 128.587 9.11336 128.581 10.2934V19.7018H125.099V10.8321C125.099 9.84448 124.842 9.07167 124.329 8.51371C123.822 7.95575 123.12 7.67677 122.222 7.67677C121.613 7.67677 121.071 7.81145 120.596 8.08081C120.128 8.34376 119.76 8.72535 119.49 9.22559C119.227 9.72583 119.096 10.3319 119.096 11.0438Z" fill="currentColor"/>
        <path d="M105.577 19.9904C104.134 19.9904 102.884 19.6729 101.825 19.038C100.767 18.4031 99.9462 17.5148 99.3626 16.3733C98.7854 15.2317 98.4968 13.8977 98.4968 12.3713C98.4968 10.845 98.7854 9.50778 99.3626 8.35979C99.9462 7.2118 100.767 6.32035 101.825 5.68543C102.884 5.05051 104.134 4.73305 105.577 4.73305C107.02 4.73305 108.271 5.05051 109.329 5.68543C110.387 6.32035 111.205 7.2118 111.782 8.35979C112.366 9.50778 112.657 10.845 112.657 12.3713C112.657 13.8977 112.366 15.2317 111.782 16.3733C111.205 17.5148 110.387 18.4031 109.329 19.038C108.271 19.6729 107.02 19.9904 105.577 19.9904ZM105.596 17.2006C106.379 17.2006 107.033 16.9857 107.559 16.556C108.085 16.1199 108.476 15.5363 108.733 14.8052C108.995 14.0741 109.127 13.2596 109.127 12.3617C109.127 11.4574 108.995 10.6397 108.733 9.90861C108.476 9.17108 108.085 8.58426 107.559 8.14815C107.033 7.71204 106.379 7.49399 105.596 7.49399C104.795 7.49399 104.128 7.71204 103.595 8.14815C103.07 8.58426 102.675 9.17108 102.412 9.90861C102.156 10.6397 102.027 11.4574 102.027 12.3617C102.027 13.2596 102.156 14.0741 102.412 14.8052C102.675 15.5363 103.07 16.1199 103.595 16.556C104.128 16.9857 104.795 17.2006 105.596 17.2006Z" fill="currentColor"/>
        <path d="M86.1063 11.0438V19.7018H82.6239V4.92545H85.9524V7.43627H86.1256C86.4655 6.60895 87.0074 5.95158 87.7514 5.46417C88.5017 4.97675 89.4285 4.73305 90.5315 4.73305C91.5513 4.73305 92.4395 4.9511 93.1963 5.38721C93.9595 5.82331 94.5495 6.45503 94.9664 7.28235C95.3897 8.10967 95.5981 9.11336 95.5917 10.2934V19.7018H92.1092V10.8321C92.1092 9.84448 91.8527 9.07167 91.3396 8.51371C90.833 7.95575 90.1307 7.67677 89.2329 7.67677C88.6236 7.67677 88.0817 7.81145 87.6071 8.08081C87.1389 8.34376 86.7701 8.72535 86.5008 9.22559C86.2378 9.72583 86.1063 10.3319 86.1063 11.0438Z" fill="currentColor"/>
        <path d="M69.5984 11.0438V19.7018H66.116V4.92545H69.4445V7.43627H69.6177C69.9576 6.60895 70.4995 5.95158 71.2434 5.46417C71.9938 4.97675 72.9205 4.73305 74.0236 4.73305C75.0433 4.73305 75.9316 4.9511 76.6884 5.38721C77.4515 5.82331 78.0416 6.45503 78.4584 7.28235C78.8817 8.10967 79.0902 9.11336 79.0837 10.2934V19.7018H75.6013V10.8321C75.6013 9.84448 75.3448 9.07167 74.8317 8.51371C74.325 7.95575 73.6228 7.67677 72.7249 7.67677C72.1156 7.67677 71.5737 7.81145 71.0991 8.08081C70.631 8.34376 70.2622 8.72535 69.9928 9.22559C69.7299 9.72583 69.5984 10.3319 69.5984 11.0438Z" fill="currentColor"/>
        <path d="M54.8124 20C53.876 20 53.0327 19.8333 52.2823 19.4998C51.5383 19.1599 50.9483 18.6596 50.5122 17.999C50.0825 17.3385 49.8677 16.524 49.8677 15.5556C49.8677 14.7218 50.0216 14.0324 50.3294 13.4873C50.6373 12.9421 51.0573 12.506 51.5897 12.1789C52.122 11.8519 52.7216 11.6049 53.3886 11.4382C54.062 11.265 54.7578 11.14 55.4761 11.063C56.3419 10.9732 57.0442 10.8931 57.5829 10.8225C58.1216 10.7456 58.5129 10.6301 58.7566 10.4762C59.0067 10.3159 59.1317 10.0689 59.1317 9.73545V9.67773C59.1317 8.95302 58.9169 8.39186 58.4872 7.99423C58.0575 7.5966 57.4386 7.39779 56.6305 7.39779C55.7776 7.39779 55.101 7.58378 54.6007 7.95575C54.1069 8.32772 53.7734 8.76704 53.6002 9.27369L50.3487 8.81193C50.6052 7.91406 51.0285 7.1637 51.6185 6.56085C52.2085 5.95158 52.93 5.49623 53.783 5.19481C54.636 4.88697 55.5788 4.73305 56.6113 4.73305C57.3232 4.73305 58.0319 4.81642 58.7373 4.98317C59.4428 5.14991 60.0873 5.42569 60.6709 5.81049C61.2546 6.18888 61.7227 6.70515 62.0755 7.35931C62.4346 8.01347 62.6142 8.83117 62.6142 9.81241V19.7018H59.2664V17.672H59.151C58.9393 18.0824 58.6411 18.4672 58.2563 18.8264C57.8779 19.1791 57.4001 19.4645 56.8229 19.6825C56.2522 19.8942 55.582 20 54.8124 20ZM55.7166 17.4411C56.4157 17.4411 57.0218 17.3032 57.5348 17.0274C58.0479 16.7452 58.4423 16.3733 58.7181 15.9115C59.0003 15.4497 59.1414 14.9463 59.1414 14.4012V12.6599C59.0323 12.7497 58.8463 12.8331 58.5834 12.9101C58.3269 12.987 58.0383 13.0544 57.7176 13.1121C57.3969 13.1698 57.0795 13.2211 56.7652 13.266C56.451 13.3109 56.1784 13.3494 55.9475 13.3814C55.428 13.452 54.9631 13.5674 54.5526 13.7278C54.1422 13.8881 53.8183 14.1126 53.581 14.4012C53.3437 14.6833 53.2251 15.0489 53.2251 15.4978C53.2251 16.1392 53.4591 16.6234 53.9273 16.9505C54.3955 17.2775 54.9919 17.4411 55.7166 17.4411Z" fill="currentColor"/>
        <path d="M47.6479 4.92544V7.61905H39.1534V4.92544H47.6479ZM41.2506 1.38528H44.733V15.2573C44.733 15.7255 44.8036 16.0847 44.9447 16.3348C45.0922 16.5785 45.2846 16.7452 45.5219 16.835C45.7592 16.9248 46.0221 16.9697 46.3107 16.9697C46.5288 16.9697 46.7276 16.9537 46.9072 16.9216C47.0932 16.8895 47.2343 16.8607 47.3305 16.835L47.9173 19.5575C47.7313 19.6216 47.4651 19.6922 47.1188 19.7691C46.7789 19.8461 46.362 19.891 45.8682 19.9038C44.996 19.9295 44.2104 19.798 43.5113 19.5094C42.8123 19.2144 42.2575 18.759 41.847 18.1433C41.443 17.5277 41.2442 16.7581 41.2506 15.8345V1.38528Z" fill="currentColor"/>
        <path d="M36.6884 0V19.7018H33.2059V0H36.6884Z" fill="currentColor"/>
        <path d="M21.9023 20C20.966 20 20.1226 19.8333 19.3723 19.4998C18.6283 19.1599 18.0383 18.6596 17.6022 17.999C17.1725 17.3385 16.9576 16.524 16.9576 15.5556C16.9576 14.7218 17.1116 14.0324 17.4194 13.4873C17.7272 12.9421 18.1473 12.506 18.6796 12.1789C19.2119 11.8519 19.8116 11.6049 20.4786 11.4382C21.152 11.265 21.8478 11.14 22.5661 11.063C23.4319 10.9732 24.1342 10.8931 24.6729 10.8225C25.2116 10.7456 25.6028 10.6301 25.8465 10.4762C26.0967 10.3159 26.2217 10.0689 26.2217 9.73545V9.67773C26.2217 8.95302 26.0069 8.39186 25.5772 7.99423C25.1475 7.5966 24.5286 7.39779 23.7205 7.39779C22.8675 7.39779 22.1909 7.58378 21.6907 7.95575C21.1969 8.32772 20.8634 8.76704 20.6902 9.27369L17.4386 8.81193C17.6952 7.91406 18.1185 7.1637 18.7085 6.56085C19.2985 5.95158 20.02 5.49623 20.873 5.19481C21.726 4.88697 22.6687 4.73305 23.7013 4.73305C24.4131 4.73305 25.1218 4.81642 25.8273 4.98317C26.5328 5.14991 27.1773 5.42569 27.7609 5.81049C28.3445 6.18888 28.8127 6.70515 29.1654 7.35931C29.5246 8.01347 29.7042 8.83117 29.7042 9.81241V19.7018H26.3564V17.672H26.241C26.0293 18.0824 25.7311 18.4672 25.3463 18.8264C24.9679 19.1791 24.4901 19.4645 23.9129 19.6825C23.3421 19.8942 22.6719 20 21.9023 20ZM22.8066 17.4411C23.5057 17.4411 24.1117 17.3032 24.6248 17.0274C25.1379 16.7452 25.5323 16.3733 25.8081 15.9115C26.0902 15.4497 26.2313 14.9463 26.2313 14.4012V12.6599C26.1223 12.7497 25.9363 12.8331 25.6734 12.9101C25.4168 12.987 25.1282 13.0544 24.8076 13.1121C24.4869 13.1698 24.1694 13.2211 23.8552 13.266C23.5409 13.3109 23.2684 13.3494 23.0375 13.3814C22.518 13.452 22.053 13.5674 21.6426 13.7278C21.2321 13.8881 20.9083 14.1126 20.671 14.4012C20.4337 14.6833 20.315 15.0489 20.315 15.4978C20.315 16.1392 20.5491 16.6234 21.0173 16.9505C21.4855 17.2775 22.0819 17.4411 22.8066 17.4411Z" fill="currentColor"/>
        <path d="M0 19.7018V0H7.54209C8.96585 0 10.1491 0.224466 11.0919 0.6734C12.041 1.11592 12.7497 1.72198 13.2179 2.49158C13.6925 3.26118 13.9298 4.1334 13.9298 5.10823C13.9298 5.90989 13.7759 6.59612 13.468 7.16691C13.1602 7.73128 12.7465 8.18983 12.227 8.54257C11.7076 8.8953 11.1271 9.14863 10.4858 9.30255V9.49495C11.1849 9.53343 11.8551 9.74828 12.4964 10.1395C13.1441 10.5243 13.6732 11.0694 14.0837 11.7749C14.4941 12.4804 14.6994 13.3333 14.6994 14.3338C14.6994 15.3535 14.4525 16.2706 13.9586 17.0851C13.4648 17.8932 12.7209 18.5313 11.7268 18.9995C10.7327 19.4677 9.48212 19.7018 7.97499 19.7018H0ZM3.56902 16.7196H7.40741C8.7029 16.7196 9.63604 16.4727 10.2068 15.9788C10.784 15.4786 11.0726 14.8373 11.0726 14.0548C11.0726 13.4712 10.9283 12.9453 10.6397 12.4772C10.3511 12.0026 9.94068 11.6306 9.40837 11.3612C8.87606 11.0855 8.24114 10.9476 7.50361 10.9476H3.56902V16.7196ZM3.56902 8.37903H7.09957C7.71525 8.37903 8.27 8.2668 8.76383 8.04233C9.25766 7.81145 9.64566 7.48757 9.92785 7.07071C10.2164 6.64743 10.3608 6.14719 10.3608 5.56999C10.3608 4.8068 10.0914 4.17829 9.55267 3.68446C9.02036 3.19064 8.22832 2.94372 7.17653 2.94372H3.56902V8.37903Z" fill="currentColor"/>
      </svg>
    </a>
    <nav class="footer__navmenu navmenu-footer">
      <ul class="navmenu-footer__list">
        <li class="navmenu-footer__item">
        <a href="index.html" class="navmenu-footer__link active">Девушки</a>
        </li>
        <li class="navmenu-footer__item">
        <a href="men.html" class="navmenu-footer__link">Мужчины</a>
        </li>
        <li class="navmenu-footer__item">
        <a href="#" class="navmenu-footer__link">Спрос и предложение</a>
        </li>
        <li class="navmenu-footer__item">
        <a href="#" class="navmenu-footer__link">Содержанки</a>
        </li>
        <li class="navmenu-footer__item">
        <a href="#" class="navmenu-footer__link">В первый раз?</a>
        </li>
        <li class="navmenu-footer__item">
        <a href="#" class="navmenu-footer__link">Поддержка и Оплата</a>
        </li>
        <li class="navmenu-footer__item">
        <a href="#" class="navmenu-footer__link">Terms and Conditions</a>
        </li>
        <li class="navmenu-footer__item">
        <a href="#" class="navmenu-footer__link">Privacy Policy</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="footer__line"></div>
  <div class="footer__copyright">
    <p class="footer__copyright-text body-text_2">
      Copyright © 2024-2024 Baltannonce.net. All Rights Reserved.
    </p>
  </div>
</div>
`