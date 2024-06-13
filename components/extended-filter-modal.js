const extendedFilterModal = document.querySelector('.modal-menu');

extendedFilterModal.innerHTML = `
<div class="modal-overlay"></div>
<div class="extended-filter">
<h2 class="extended-filter__title heading_h2">Поиск анкет по параметрам</h2>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="extended-filter__cross button_icon-secondary">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
<div class="extended-filter__containers">
  <div class="extended-filter__container">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Основные параметры</h4>
      <div class="item-extended-filter__stripe"></div>
      <form class="item-extended-filter__form wrap">
        <label class="heading_h6" for="">Возраст:</label>
        <div class="item-extended-filter__row">
          <input id="years-old" type="number" name="years-old" class="medium" min="0" placeholder="----">
          <span>-</span>
          <input id="years-old" type="number" name="years-old" class="medium" min="0" placeholder="----">
          <span class="item-extended-filter__unit">лет</span>
        </div>
        
      </form>
      <form class="item-extended-filter__form wrap">
        <label class="heading_h6" for="">Рост:</label>
        <div class="item-extended-filter__row">
          <input id="height" type="number" name="height" class="medium" min="0" placeholder="----">
          <span>-</span>
          <input id="height" type="number" name="height" class="medium" min="0" placeholder="----">
          <span class="item-extended-filter__unit">см</span>
        </div>
      </form>
      <form class="item-extended-filter__form wrap">
        <label class="heading_h6" for="">Вес:</label>
        <div class="item-extended-filter__row">
          <input id="weight" type="number" name="weight" class="medium" min="0" placeholder="----">
          <span>-</span>
          <input id="weight" type="number" name="weight" class="medium" min="0" placeholder="----">
          <span class="item-extended-filter__unit">кг</span>
        </div>
      </form>
    </div>
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Расценки</h4>
      <div class="item-extended-filter__stripe"></div>
      <form class="item-extended-filter__form wrap">
        <label class="heading_h6" for="">1 час:</label>
        <div class="item-extended-filter__row">
          <input id="1hour" type="number" name="1hour" class="medium" min="0" placeholder="----">
          <span>-</span>
          <input id="1hour" type="number" name="1hour" class="medium" min="0" placeholder="----">
        </div>
      </form>
      <form class="item-extended-filter__form wrap">
        <label class="heading_h6" for="">2 часа:</label>
        <div class="item-extended-filter__row">
          <input id="2hour" type="number" name="2hour" class="medium" min="0" placeholder="----">
          <span>-</span>
          <input id="2hour" type="number" name="2hour" class="medium" min="0" placeholder="----">
        </div>
      </form>
      <form class="item-extended-filter__form wrap">
        <label class="heading_h6" for="">Ночь:</label>
        <div class="item-extended-filter__row">
          <input id="night" type="number" name="night" class="medium" min="0" placeholder="----">
          <span>-</span>
          <input id="night" type="number" name="night" class="medium" min="0" placeholder="----">
        </div>
      </form>
    </div>
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Место встречи</h4>
      <div class="item-extended-filter__stripe"></div>
      <div class="item-extended-filter__form">
        <input id="incall-aa" type="checkbox" name="available">
        <label for="incall-aa">Апартаменты Incall</label>
      </div>
      <div class="item-extended-filter__form">
        <input id="incall-hh" type="checkbox" name="available">
        <label for="incall-hh">Отель Incall</label>
      </div>
      <div class="item-extended-filter__form">
        <input id="outcall-aa" type="checkbox" name="available">
        <label for="outcall-aa">Апартаменты Outcall</label>
      </div>
      <div class="item-extended-filter__form">
        <input id="outcall-hh" type="checkbox" name="available">
        <label for="outcall-hh">Отель Outcall</label>
      </div>
      <div class="item-extended-filter__form">
        <input id="invite" type="checkbox" name="available">
        <label for="invite">Путешествия по приглашению</label>
      </div>
    </div>
  </div>
  <div class="extended-filter__container extended-filter__container-preferences">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Предпочтения</h4>
      <div class="item-extended-filter__stripe"></div>
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms">
        <h5 class="item-extended-filter__subtitle heading_h5">Секс</h5>
        <div class="item-extended-filter__preferences">
          <input id="item1" type="checkbox" name="available">
          <label for="item1">Секс классический </label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item2" type="checkbox" name="available">
          <label for="item2">Секс анальный</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item3" type="checkbox" name="available">
          <label for="item3">Секс групповой</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item4" type="checkbox" name="available">
          <label for="item4">Услуги семейной паре</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item5" type="checkbox" name="available">
          <label for="item5">Минет в презервативе</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item6" type="checkbox" name="available">
          <label for="item6">Минет без резинки</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item7" type="checkbox" name="available">
          <label for="item7">Горловой Минет</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item8" type="checkbox" name="available">
          <label for="item8">Куннилингус</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item9" type="checkbox" name="available">
          <label for="item9">Поцелуи</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item10" type="checkbox" name="available">
          <label for="item10">Окончание на грудь</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item11" type="checkbox" name="available">
          <label for="item11">Окончание на лицо</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item12" type="checkbox" name="available">
          <label for="item12">Окончание в рот</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item13" type="checkbox" name="available">
          <label for="item13">Сквирт</label>
        </div>
        <div class="item-extended-filter__preferences">
          <input id="item14" type="checkbox" name="available">
          <label for="item14">Игрушки</label>
        </div>
        <h5 class="item-extended-filter__subtitle heading_h5">Стриптиз</h5>
          <div class="item-extended-filter__preferences">
            <input id="item15" type="checkbox" name="available">
            <label for="item15">Стриптиз профи</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item16" type="checkbox" name="available">
            <label for="item16">Стриптиз не профи</label>
          </div>
        </div>
        <div class="item-extended-filter__forms">
          <h5 class="item-extended-filter__subtitle heading_h5">Массаж</h5>
          <div class="item-extended-filter__preferences">
            <input id="item17" type="checkbox" name="available">
            <label for="item17">Классический</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item18" type="checkbox" name="available">
            <label for="item18">Профессиональный</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item19" type="checkbox" name="available">
            <label for="item19">Урологический</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item20" type="checkbox" name="available">
            <label for="item20">Эротический</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item21" type="checkbox" name="available">
            <label for="item21">Лингам</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item22" type="checkbox" name="available">
            <label for="item22">Карсай</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item23" type="checkbox" name="available">
            <label for="item23">Массажный стол</label>
          </div>
          <h5 class="item-extended-filter__subtitle heading_h5">Экстрим</h5>
          <div class="item-extended-filter__preferences">
            <input id="item24" type="checkbox" name="available">
            <label for="item24">Страпон</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item25" type="checkbox" name="available">
            <label for="item25">Анилингус вам</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item26" type="checkbox" name="available">
            <label for="item26">Анилингус мне</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item27" type="checkbox" name="available">
            <label for="item27">Золот. дождь выдача</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item28" type="checkbox" name="available">
            <label for="item28">Золотой дождь прием</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item29" type="checkbox" name="available">
            <label for="item29">Копро выдача</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item30" type="checkbox" name="available">
            <label for="item30">Фистинг анальный вам</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item31" type="checkbox" name="available">
            <label for="item31">Фистинг анальный мне</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item32" type="checkbox" name="available">
            <label for="item32">Фистинг классический</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item33" type="checkbox" name="available">
            <label for="item33">Фингеринг</label>
          </div>
        </div>
        <div class="item-extended-filter__forms">
          <h5 class="item-extended-filter__subtitle heading_h5">Садо-мазо</h5>
          <div class="item-extended-filter__preferences">
            <input id="item34" type="checkbox" name="available">
            <label for="item34">Бандаж</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item35" type="checkbox" name="available">
            <label for="item35">Госпожа</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item36" type="checkbox" name="available">
            <label for="item36">Игры</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item37" type="checkbox" name="available">
            <label for="item37">Легкая доминация</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item38" type="checkbox" name="available">
            <label for="item38">Порка</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item39" type="checkbox" name="available">
            <label for="item39">Клизма</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item40" type="checkbox" name="available">
            <label for="item40">Рабыня</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item41" type="checkbox" name="available">
            <label for="item41">Легкая рабыня</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item42" type="checkbox" name="available">
            <label for="item42">Фетиш</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item43" type="checkbox" name="available">
            <label for="item43">Трамплинг</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item44" type="checkbox" name="available">
            <label for="item44">Боллбастинг</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item45" type="checkbox" name="available">
            <label for="item45">Феминизация</label>
          </div>
          <h5 class="item-extended-filter__subtitle heading_h5">Разное</h5>
          <div class="item-extended-filter__preferences">
            <input id="item46" type="checkbox" name="available">
            <label for="item46">Ролевые игры</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item47" type="checkbox" name="available">
            <label for="item47">Фото/видео съемка</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item48" type="checkbox" name="available">
            <label for="item48">Эскорт</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item49" type="checkbox" name="available">
            <label for="item49">Виртуальный секс</label>
          </div>
          <div class="item-extended-filter__preferences">
            <input id="item50" type="checkbox" name="available">
            <label for="item50">Cекс по телефону</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extended-filter__container extended-filter__container-reviews">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Отзывы и оценки</h4>
      <div class="item-extended-filter__stripe"></div>
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">Отзывов, не менее:</label>
            <div class="dropdown">-</div>
          </div>
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">С оценками пользователей:</label>
            <div class="button button_secondary button_small">Выбрать</div>
          </div>
        </div>
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">Оценок, не менее:</label>
            <div class="dropdown">-</div>
          </div>
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">С новыми отзывами за последние:</label>
            <div class="dropdown">-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extended-filter__container extended-filter__container-additional">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Дополнительные параметры</h4>
      <div class="item-extended-filter__stripe"></div>
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Новые за:</label>
            <div class="dropdown">-</div>
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Сортировать по верификации</label>
            <div class="dropdown wide">Не выбрано</div>
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Сортировать по разделу</label>
            <div class="dropdown wide">Не выбрано</div>
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Часы работы:</label>
            <div class="dropdown narrow">-</div>
            <span>-</span>
            <div class="dropdown narrow">-</div>
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Принимает в возрасте от:</label>
            <input id="" type="number" name="" class="medium" min="0" placeholder="----">
            <span>-</span>
            <input id="" type="number" name="" class="medium" min="0" placeholder="----">
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Способ связи:</label>
            <div class="item-extended-filter__row">
              <input id="telegramm" type="checkbox" name="contacts">
              <label for="telegramm">Telegram</label>
            </div>
            <div class="item-extended-filter__row">
              <input id="whatsappp" type="checkbox" name="contacts">
              <label for="whatsappp">Whatsapp</label>
            </div>
          </div>
          
        </div>
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Анкет с уникальным номером телефона:</label>
            <div class="dropdown">-</div>
          </div>
          <div class="item-extended-filter__row">
              <input id="questionary-video" type="checkbox" name="">
              <label for="questionary-video">Анкеты с видео</label>
            </div>
            <div class="item-extended-filter__row">
              <input id="smoking1" type="checkbox" name="">
              <label for="smoking1">Курит</label>
            </div>
            <div class="item-extended-filter__row">
              <input id="drinking" type="checkbox" name="">
              <label for="drinking">Пьет алкоголь</label>
            </div>
            <div class="item-extended-filter__row">
              <input id="friends" type="checkbox" name="">
              <label for="friends">Подружки</label>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extended-filter__container extended-filter__container-appearance">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Внешность</h4>
      <div class="item-extended-filter__stripe"></div>
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms item-extended-filter__forms-appearance">
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Цвет глаз:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="black-eyed" type="checkbox" name="eyecolor">
                <label for="black-eyed">Черный</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="green-eyed" type="checkbox" name="eyecolor">
                <label for="green-eyed">Зеленый</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="blue-eyed" type="checkbox" name="eyecolor">
                <label for="blue-eyed">Голубой</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="grey-eyed" type="checkbox" name="eyecolor">
                <label for="grey-eyed">Серый</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="yellow-eyed" type="checkbox" name="eyecolor">
                <label for="yellow-eyed">Желтый</label>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Цвет волос:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="blonde2" type="checkbox" name="haircolor">
                <label for="blonde2">Блондинка</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="brown2" type="checkbox" name="haircolor">
                <label for="brown2">Шатенка</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="brunette2" type="checkbox" name="haircolor">
                <label for="brunette2">Брюнетка</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="light-brown2" type="checkbox" name="haircolor">
                <label for="light-brown2">Русая</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="red2" type="checkbox" name="haircolor">
                <label for="red2">Рыжая</label>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Длина волос:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="hairless" type="checkbox" name="hairlength">
                <label for="hairless">Без волос</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="short-hair" type="checkbox" name="hairlength">
                <label for="short-hair">Короткая стрижка</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="shoulder-hair" type="checkbox" name="hairlength">
                <label for="shoulder-hair">До плеч</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="shoulder-blades-hair" type="checkbox" name="hairlength">
                <label for="shoulder-blades-hair">До лопаток</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="waist-hair" type="checkbox" name="hairlength">
                <label for="waist-hair">До талии</label>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6" for="">Рост:</label>
            <div class="dropdown">-</div>
            <span class="item-extended-filter__unit">см</span>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Параметры</label>
            <div class="item-extended-filter__row item-extended-filter__row_gap-big">
              <div class="item-extended-filter__column">
              <span>Грудь:</span>
              <div class="item-extended-filter__row">
                <input id="" type="number" name="" class="small" min="0" placeholder="----">
                <span>-</span>
                <input id="" type="number" name="" class="small" min="0" placeholder="----">
                <span class="item-extended-filter__unit">см</span>
              </div>
            </div>
            <div class="item-extended-filter__column">
              <span>Талия:</span>
              <div class="item-extended-filter__row">
                <input id="" type="number" name="" class="small" min="0" placeholder="----">
                <span>-</span>
                <input id="" type="number" name="" class="small" min="0" placeholder="----">
                <span class="item-extended-filter__unit">см</span>
              </div>
            </div>
            <div class="item-extended-filter__column">
              <span>Ягодицы:</span>
              <div class="item-extended-filter__row">
                <input id="" type="number" name="" class="small" min="0" placeholder="----">
                <span>-</span>
                <input id="" type="number" name="" class="small" min="0" placeholder="----">
                <span class="item-extended-filter__unit">см</span>
              </div>
            </div>
            </div>
            
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Грудь:</label>
            <div class="item-extended-filter__row item-extended-filter__row_gap-big">
              <div class="item-extended-filter__column">
                <span>Размер:</span>
                <div class="item-extended-filter__row">
                  <input id="" type="number" name="" class="small" min="0" placeholder="----">
                  <span>-</span>
                  <input id="" type="number" name="" class="small" min="0" placeholder="----">
                  <span class="item-extended-filter__unit">A-G или 1-6</span>
                </div>
              </div>
              <div class="item-extended-filter__column">
                <span>Тип:</span>
                <div class="item-extended-filter__row">
                  <input id="breast-type-n" type="checkbox" name="breast-type">
                  <label for="breast-type-n">Натуральная</label>
                  <input id="breast-type-a" type="checkbox" name="breast-type">
                  <label for="breast-type-a">Искусственная</label>
                </div>
              </div>
            </div>
            
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Интимная стрижка:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="intimate-haircut-f" type="checkbox" name="">
                <label for="intimate-haircut-f">Полная депиляция</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="intimate-haircut-c" type="checkbox" name="">
                <label for="intimate-haircut-c">Аккуратная стрижка</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="intimate-haircut-n" type="checkbox" name="">
                <label for="intimate-haircut-n">Натуральная</label>
              </div>
            </div>
            
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Тату:</label>
            <div class="item-extended-filter__column">
              <div class="item-extended-filter__row">
                <input id="tattoo-y" type="checkbox" name="">
                <label for="tattoo-y">Да</label>
                <input id="tattoo-n" type="checkbox" name="">
                <label for="tattoo-n">Нет</label>
              </div>
              <div class="item-extended-filter__row  item-extended-filter__tattoo">
                <span>Места на теле:</span>
                <div class="item-extended-filter__row">
                  <input id="tattoo-face" type="checkbox" name="">
                  <label for="tattoo-face">Лицо</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="tattoo-hand" type="checkbox" name="">
                  <label for="tattoo-hand">Руки</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="tattoo-leg" type="checkbox" name="">
                  <label for="tattoo-leg">Ноги</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="tattoo-groin" type="checkbox" name="">
                  <label for="tattoo-groin">Пах</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="tattoo-spine" type="checkbox" name="">
                  <label for="tattoo-spine">Спина</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="tattoo-hip" type="checkbox" name="">
                  <label for="tattoo-hip">Бедра</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="tattoo-stomach" type="checkbox" name="">
                  <label for="tattoo-stomach">Живот</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="tattoo-breast" type="checkbox" name="">
                  <label for="tattoo-breast">Грудь</label>
                </div>
                
              </div>
            </div>
            
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Пирсинг:</label>
            <div class="item-extended-filter__column">
              <div class="item-extended-filter__row">
                <input id="piercing-y" type="checkbox" name="">
                <label for="piercing-y">Да</label>
                <input id="piercing-n" type="checkbox" name="">
                <label for="piercing-n">Нет</label>
              </div>
              <div class="item-extended-filter__row item-extended-filter__piercing">
                <span>Места на теле:</span>
                <div class="item-extended-filter__row">
                  <input id="piercing-face" type="checkbox" name="">
                  <label for="piercing-face">Лицо</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="piercing-hand" type="checkbox" name="">
                  <label for="piercing-hand">Руки</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="piercing-leg" type="checkbox" name="">
                  <label for="piercing-leg">Ноги</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="piercing-groin" type="checkbox" name="">
                  <label for="piercing-groin">Пах</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="piercing-spine" type="checkbox" name="">
                  <label for="piercing-spine">Спина</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="piercing-hip" type="checkbox" name="">
                  <label for="piercing-hip">Бедра</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="piercing-stomach" type="checkbox" name="">
                  <label for="piercing-stomach">Живот</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="piercing-breast" type="checkbox" name="">
                  <label for="piercing-breast">Грудь</label>
                </div>
              </div>
            </div>
            
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Раса:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="race-white" type="checkbox" name="">
                <label for="race-white">Белая</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="race-latin" type="checkbox" name="">
                <label for="race-latin">Латинская</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="race-negro" type="checkbox" name="">
                <label for="race-negro">Черная</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="race-asian" type="checkbox" name="">
                <label for="race-asian">Азиатка</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="race-exotic" type="checkbox" name="">
                <label for="race-exotic">Экзотическая</label>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6" for="">Национальности:</label>
            <div class="button button_secondary button_small">Выбрать</div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Языки:</label>
            <div class="item-extended-filter__row item-extended-filter__languages">
                <div class="item-extended-filter__row">
                  <input id="language-ru" type="checkbox" name="">
                  <label for="language-ru">Русский</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="language-en" type="checkbox" name="">
                  <label for="language-en">Английский</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="language-lt" type="checkbox" name="">
                  <label for="language-lt">Литовский</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="language-lv" type="checkbox" name="">
                  <label for="language-lv">Латвийский</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="language-ee" type="checkbox" name="">
                  <label for="language-ee">Эстонский</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="language-es" type="checkbox" name="">
                  <label for="language-es">Испанский</label>
                </div>
              <div class="item-extended-filter__row">
                <input id="language-pt" type="checkbox" name="">
                <label for="language-pt">Португальский</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="language-de" type="checkbox" name="">
                <label for="language-de">Немецкий</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="language-pl" type="checkbox" name="">
                <label for="language-pl">Польский</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="language-fi" type="checkbox" name="">
                <label for="language-fi">Финский</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="language-sw" type="checkbox" name="">
                <label for="language-sw">Шведский</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="language-it" type="checkbox" name="">
                <label for="language-it">Итальянский</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="language-fr" type="checkbox" name="">
                <label for="language-fr">Французский</label>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Паспорт:</label>
            <div class="item-extended-filter__row wrap item-extended-filter__has-passport">
              <input id="has-passport" type="checkbox" name="">
              <label for="has-passport">Есть паспорт для путешествий</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extended-filter__container extended-filter__container-fetish">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Фетишизм</h4>
      <div class="item-extended-filter__stripe"></div>
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms item-extended-filter__forms-fetish">
          <div class="item-extended-filter__fetish">
            <div class="item-extended-filter__row">
              <label class="heading_h6" for="">Размер одежды:</label>
              <div class="item-extended-filter__row">
                <input id="" type="number" name="" class="medium" min="0" placeholder="----">
                <span>-</span>
                <input id="" type="number" name="" class="medium" min="0" placeholder="----">
                <span class="item-extended-filter__unit">см</span>
              </div>
            </div>
            <div class="item-extended-filter__row">
              <label class="heading_h6" for="">Размер обуви:</label>
              <div class="item-extended-filter__row">
                <input id="" type="number" name="" class="medium" min="0" placeholder="----">
                <span>-</span>
                <input id="" type="number" name="" class="medium" min="0" placeholder="----">
                <span class="item-extended-filter__unit">см</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extended-filter__container extended-filter__container-location">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Расположение</h4>
      <div class="item-extended-filter__stripe"></div>
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms item-extended-filter__forms-location">
          <div class="item-extended-filter__location">
            <label class="heading_h6 heading__align-self_start" for="">Литва:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="vilnus" type="checkbox" name="">
                <label for="vilnus">Вильнюс</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="kaunas" type="checkbox" name="">
                <label for="kaunas">Каунас</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="klaipeda" type="checkbox" name="">
                <label for="klaipeda">Клайпеда</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="shaulai" type="checkbox" name="">
                <label for="shaulai">Шяуляй</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="panevezis" type="checkbox" name="">
                <label for="panevezis">Паневежис</label>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__location">
            <label class="heading_h6 heading__align-self_start" for="">Латвия:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="riga" type="checkbox" name="">
                <label for="riga">Рига</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="urmala" type="checkbox" name="">
                <label for="urmala">Юрмала</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="daugavpils" type="checkbox" name="">
                <label for="daugavpils">Даугавпилс</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="liepaia" type="checkbox" name="">
                <label for="liepaia">Лиепая</label>
              </div>
            </div>
            
          </div>
          <div class="item-extended-filter__location">
            <label class="heading_h6 heading__align-self_start" for="">Эстония:</label>
            <div class="item-extended-filter__row wrap">
              <div class="item-extended-filter__row">
                <input id="tallin" type="checkbox" name="">
                <label for="tallin">Таллин</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="tartu" type="checkbox" name="">
                <label for="tartu">Тарту</label>
              </div>
              <div class="item-extended-filter__row">
                <input id="narva" type="checkbox" name="">
                <label for="narva">Нарва</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="extended-filter__button button button_primary">Найти</div>

</div>`

const extendedFilterBtn = document.querySelector('.hero__extended-filter-btn');
const extendedFilterModalOverlay = document.querySelector('.modal-overlay');
const extendedFilterModalMenu = document.querySelector('.modal-menu');
const extendedFilterButton = document.querySelector('.extended-filter__button');
const extendedFilterCrossBtn = document.querySelector('.extended-filter__cross');

extendedFilterBtn.addEventListener('click', () => {
  extendedFilterModalMenu.classList.toggle('closed');
  document.body.style.overflow = 'hidden';
})

extendedFilterModalOverlay.addEventListener('click', () => {
  extendedFilterModalMenu.classList.add('closed');
  document.body.style.overflow = 'auto';
})

extendedFilterButton.addEventListener('click', () => {
  extendedFilterModalMenu.classList.add('closed');
  document.body.style.overflow = 'auto';
})

extendedFilterCrossBtn.addEventListener('click', () => {
  extendedFilterModalMenu.classList.add('closed');
  document.body.style.overflow = 'auto';
})
