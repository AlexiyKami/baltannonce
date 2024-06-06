<script setup>
import '../assets/scss/components/extended-filter-modal.scss';

defineProps(["isFilterModalMenuOpened"]);
defineEmits(["setIsFilterModalMenuOpened"]);
</script>

<template>
  <div class="modal-menu" v-if="isFilterModalMenuOpened">
    <div class="modal-overlay" @click="$emit('setIsFilterModalMenuOpened', false)"></div>
    <div class="extended-filter">
    <h2 class="extended-filter__title heading_h2">Поиск анкет по параметрам</h2>
    <div class="extended-filter__containers">
      <div class="extended-filter__container">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Основные параметры</h4>
          <div class="item-extended-filter__stripe"></div>
          <form class="item-extended-filter__form wrap">
            <label class="heading_h6" for="">Возраст:</label>
            <div class="item-extended-filter__row">
              <input type="number" name="years-old" id="years-old" class="medium" min="0" placeholder="----">
              <span>-</span>
              <input type="number" name="years-old" id="years-old" class="medium" min="0" placeholder="----">
              <span class="item-extended-filter__unit">лет</span>
            </div>
            
          </form>
          <form class="item-extended-filter__form wrap">
            <label class="heading_h6" for="">Рост:</label>
            <div class="item-extended-filter__row">
              <input type="number" name="height" id="height" class="medium" min="0" placeholder="----">
              <span>-</span>
              <input type="number" name="height" id="height" class="medium" min="0" placeholder="----">
              <span class="item-extended-filter__unit">см</span>
            </div>
          </form>
          <form class="item-extended-filter__form wrap">
            <label class="heading_h6" for="">Вес:</label>
            <div class="item-extended-filter__row">
              <input type="number" name="weight" id="weight" class="medium" min="0" placeholder="----">
              <span>-</span>
              <input type="number" name="weight" id="weight" class="medium" min="0" placeholder="----">
              <span class="item-extended-filter__unit">кг</span>
            </div>
          </form>
        </div>
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Расценки</h4>
          <div class="item-extended-filter__stripe"></div>
          <form class="item-extended-filter__form wrap">
            <label class="heading_h6" for="">1 час:</label>
            <div class="item-extended-filter__row">
              <input type="number" name="1hour" id="1hour" class="medium" min="0" placeholder="----">
              <span>-</span>
              <input type="number" name="1hour" id="1hour" class="medium" min="0" placeholder="----">
            </div>
          </form>
          <form class="item-extended-filter__form wrap">
            <label class="heading_h6" for="">2 часа:</label>
            <div class="item-extended-filter__row">
              <input type="number" name="2hour" id="2hour" class="medium" min="0" placeholder="----">
              <span>-</span>
              <input type="number" name="2hour" id="2hour" class="medium" min="0" placeholder="----">
            </div>
          </form>
          <form class="item-extended-filter__form wrap">
            <label class="heading_h6" for="">Ночь:</label>
            <div class="item-extended-filter__row">
              <input type="number" name="night" id="night" class="medium" min="0" placeholder="----">
              <span>-</span>
              <input type="number" name="night" id="night" class="medium" min="0" placeholder="----">
            </div>
          </form>
        </div>
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Место встречи</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__form">
            <input type="checkbox" name="available" id="incall-aa">
            <label for="incall-aa">Апартаменты Incall</label>
          </div>
          <div class="item-extended-filter__form">
            <input type="checkbox" name="available" id="incall-hh">
            <label for="incall-hh">Отель Incall</label>
          </div>
          <div class="item-extended-filter__form">
            <input type="checkbox" name="available" id="outcall-aa">
            <label for="outcall-aa">Апартаменты Outcall</label>
          </div>
          <div class="item-extended-filter__form">
            <input type="checkbox" name="available" id="outcall-hh">
            <label for="outcall-hh">Отель Outcall</label>
          </div>
          <div class="item-extended-filter__form">
            <input type="checkbox" name="available" id="invite">
            <label for="invite">Путешествия по приглашению</label>
          </div>
        </div>
      </div>
      <div class="extended-filter__container extended-filter__container-preferences">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Предпочтения</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__forms-container">
            <div class="item-extended-filter__forms">
            <h5 class="item-extended-filter__subtitle heading_h5">TEST</h5>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item1">
              <label for="item1">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item2">
              <label for="item2">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item3">
              <label for="item3">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item4">
              <label for="item4">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item5">
              <label for="item5">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item6">
              <label for="item6">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item7">
              <label for="item7">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item8">
              <label for="item8">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item9">
              <label for="item9">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item10">
              <label for="item10">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item11">
              <label for="item11">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item12">
              <label for="item12">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item13">
              <label for="item13">test</label>
            </div>
            <div class="item-extended-filter__preferences">
              <input type="checkbox" name="available" id="item14">
              <label for="item14">test</label>
            </div>
            <h5 class="item-extended-filter__subtitle heading_h5">TEST</h5>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item15">
                <label for="item15">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item16">
                <label for="item16">test</label>
              </div>
            </div>
            <div class="item-extended-filter__forms">
              <h5 class="item-extended-filter__subtitle heading_h5">TEST</h5>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item17">
                <label for="item17">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item18">
                <label for="item18">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item19">
                <label for="item19">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item20">
                <label for="item20">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item21">
                <label for="item21">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item22">
                <label for="item22">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item23">
                <label for="item23">test</label>
              </div>
              <h5 class="item-extended-filter__subtitle heading_h5">TEST</h5>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item24">
                <label for="item24">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item25">
                <label for="item25">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item26">
                <label for="item26">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item27">
                <label for="item27">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item28">
                <label for="item28">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item29">
                <label for="item29">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item30">
                <label for="item30">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item31">
                <label for="item31">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item32">
                <label for="item32">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item33">
                <label for="item33">test</label>
              </div>
            </div>
            <div class="item-extended-filter__forms">
              <h5 class="item-extended-filter__subtitle heading_h5">TEST</h5>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item34">
                <label for="item34">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item35">
                <label for="item35">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item36">
                <label for="item36">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item37">
                <label for="item37">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item38">
                <label for="item38">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item39">
                <label for="item39">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item40">
                <label for="item40">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item41">
                <label for="item41">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item42">
                <label for="item42">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item43">
                <label for="item43">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item44">
                <label for="item44">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item45">
                <label for="item45">test</label>
              </div>
              <h5 class="item-extended-filter__subtitle heading_h5">TEST</h5>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item46">
                <label for="item46">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item47">
                <label for="item47">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item48">
                <label for="item48">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item49">
                <label for="item49">test</label>
              </div>
              <div class="item-extended-filter__preferences">
                <input type="checkbox" name="available" id="item50">
                <label for="item50">test</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extended-filter__container extended-filter__container-reviews">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Отзывы и оценки</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__forms-container">
            <div class="item-extended-filter__forms">
              <div class="item-extended-filter__reviews">
                <label class="heading_h6" for="">Отзывов, не менее:</label>
                <Dropdown>-</Dropdown>
              </div>
              <div class="item-extended-filter__reviews">
                <label class="heading_h6" for="">С оценками пользователей:</label>
                <div class="button button_secondary button_small">Выбрать</div>
              </div>
            </div>
            <div class="item-extended-filter__forms">
              <div class="item-extended-filter__reviews">
                <label class="heading_h6" for="">Оценок, не менее:</label>
                <Dropdown>-</Dropdown>
              </div>
              <div class="item-extended-filter__reviews">
                <label class="heading_h6" for="">С новыми отзывами за последние:</label>
                <Dropdown>-</Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extended-filter__container extended-filter__container-additional">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Дополнительные параметры</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__forms-container">
            <div class="item-extended-filter__forms">
              <div class="item-extended-filter__additional">
                <label class="heading_h6" for="">Новые за:</label>
                <Dropdown>-</Dropdown>
              </div>
              <div class="item-extended-filter__additional">
                <label class="heading_h6" for="">Сортировать по верификации</label>
                <Dropdown class="wide">Не выбрано</Dropdown>
              </div>
              <div class="item-extended-filter__additional">
                <label class="heading_h6" for="">Сортировать по разделу</label>
                <Dropdown class="wide">Не выбрано</Dropdown>
              </div>
              <div class="item-extended-filter__additional">
                <label class="heading_h6" for="">Часы работы:</label>
                <Dropdown class="narrow">-</Dropdown>
                <span>-</span>
                <Dropdown class="narrow">-</Dropdown>
              </div>
              <div class="item-extended-filter__additional">
                <label class="heading_h6" for="">Принимает в возрасте от:</label>
                <input type="number" name="" id="" class="medium" min="0" placeholder="----">
                <span>-</span>
                <input type="number" name="" id="" class="medium" min="0" placeholder="----">
              </div>
              <div class="item-extended-filter__additional">
                <label class="heading_h6" for="">Способ связи:</label>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="contacts" id="telegramm">
                  <label for="telegramm">Telegram</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="contacts" id="whatsappp">
                  <label for="whatsappp">Whatsapp</label>
                </div>
              </div>
              
            </div>
            <div class="item-extended-filter__forms">
              <div class="item-extended-filter__additional">
                <label class="heading_h6" for="">Анкет с уникальным номером телефона:</label>
                <Dropdown>-</Dropdown>
              </div>
              <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="questionary-video">
                  <label for="questionary-video">Анкеты с видео</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="smoking1">
                  <label for="smoking1">Курит</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="drinking">
                  <label for="drinking">Пьет алкоголь</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="friends">
                  <label for="friends">Подружки</label>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extended-filter__container extended-filter__container-appearance">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Внешность</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__forms-container">
            <div class="item-extended-filter__forms item-extended-filter__forms-appearance">
              <div class="item-extended-filter__appearance wrap">
                <label class="heading_h6" for="">Цвет волос:</label>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="haircolor" id="blonde2">
                  <label for="blonde2">Блондинка</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="haircolor" id="brown2">
                  <label for="brown2">Шатенка</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="haircolor" id="brunette2">
                  <label for="brunette2">Брюнетка</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="haircolor" id="light-brown2">
                  <label for="light-brown2">Русая</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="haircolor" id="red2">
                  <label for="red2">Рыжая</label>
                </div>
              </div>
              <div class="item-extended-filter__appearance">
                <label class="heading_h6 heading__align-self_start" for="">Параметры</label>
                <div class="item-extended-filter__row item-extended-filter__row_gap-big">
                  <div class="item-extended-filter__column">
                  <span>Грудь:</span>
                  <div class="item-extended-filter__row">
                    <input type="number" name="" id="" class="small" min="0" placeholder="----">
                    <span>-</span>
                    <input type="number" name="" id="" class="small" min="0" placeholder="----">
                    <span class="item-extended-filter__unit">см</span>
                  </div>
                </div>
                <div class="item-extended-filter__column">
                  <span>Талия:</span>
                  <div class="item-extended-filter__row">
                    <input type="number" name="" id="" class="small" min="0" placeholder="----">
                    <span>-</span>
                    <input type="number" name="" id="" class="small" min="0" placeholder="----">
                    <span class="item-extended-filter__unit">см</span>
                  </div>
                </div>
                <div class="item-extended-filter__column">
                  <span>Ягодицы:</span>
                  <div class="item-extended-filter__row">
                    <input type="number" name="" id="" class="small" min="0" placeholder="----">
                    <span>-</span>
                    <input type="number" name="" id="" class="small" min="0" placeholder="----">
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
                      <input type="number" name="" id="" class="small" min="0" placeholder="----">
                      <span>-</span>
                      <input type="number" name="" id="" class="small" min="0" placeholder="----">
                      <span class="item-extended-filter__unit">A-G или 1-6</span>
                    </div>
                  </div>
                  <div class="item-extended-filter__column">
                    <span>Тип:</span>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="breast-type" id="breast-type-n">
                      <label for="breast-type-n">Натуральная</label>
                      <input type="checkbox" name="breast-type" id="breast-type-a">
                      <label for="breast-type-a">Искусственная</label>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="item-extended-filter__appearance wrap">
                <label class="heading_h6" for="">Интимная стрижка:</label>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="intimate-haircut-f">
                  <label for="intimate-haircut-f">Полная депиляция</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="intimate-haircut-c">
                  <label for="intimate-haircut-c">Аккуратная стрижка</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="intimate-haircut-n">
                  <label for="intimate-haircut-n">Натуральная</label>
                </div>
              </div>
              <div class="item-extended-filter__appearance">
                <label class="heading_h6 heading__align-self_start" for="">Тату:</label>
                <div class="item-extended-filter__column">
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="tattoo-y">
                    <label for="tattoo-y">Да</label>
                    <input type="checkbox" name="" id="tattoo-n">
                    <label for="tattoo-n">Нет</label>
                  </div>
                  <div class="item-extended-filter__row  item-extended-filter__tattoo">
                    <span>Места на теле:</span>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-face">
                      <label for="tattoo-face">Лицо</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-hand">
                      <label for="tattoo-hand">Руки</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-leg">
                      <label for="tattoo-leg">Ноги</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-groin">
                      <label for="tattoo-groin">Пах</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-spine">
                      <label for="tattoo-spine">Спина</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-hip">
                      <label for="tattoo-hip">Бедра</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-stomach">
                      <label for="tattoo-stomach">Живот</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="tattoo-breast">
                      <label for="tattoo-breast">Грудь</label>
                    </div>
                    
                  </div>
                </div>
                
              </div>
              <div class="item-extended-filter__appearance">
                <label class="heading_h6 heading__align-self_start" for="">Пирсинг:</label>
                <div class="item-extended-filter__column">
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="piercing-y">
                    <label for="piercing-y">Да</label>
                    <input type="checkbox" name="" id="piercing-n">
                    <label for="piercing-n">Нет</label>
                  </div>
                  <div class="item-extended-filter__row item-extended-filter__piercing">
                    <span>Места на теле:</span>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-face">
                      <label for="piercing-face">Лицо</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-hand">
                      <label for="piercing-hand">Руки</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-leg">
                      <label for="piercing-leg">Ноги</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-groin">
                      <label for="piercing-groin">Пах</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-spine">
                      <label for="piercing-spine">Спина</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-hip">
                      <label for="piercing-hip">Бедра</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-stomach">
                      <label for="piercing-stomach">Живот</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="piercing-breast">
                      <label for="piercing-breast">Грудь</label>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="item-extended-filter__appearance wrap">
                <label class="heading_h6" for="">Раса:</label>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="race-white">
                  <label for="race-white">Белая</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="race-latin">
                  <label for="race-latin">Латинская</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="race-negro">
                  <label for="race-negro">Черная</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="race-asian">
                  <label for="race-asian">Азиатка</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="race-exotic">
                  <label for="race-exotic">Экзотическая</label>
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
                      <input type="checkbox" name="" id="language-ru">
                      <label for="language-ru">Русский</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="language-en">
                      <label for="language-en">Английский</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="language-lt">
                      <label for="language-lt">Литовский</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="language-lv">
                      <label for="language-lv">Латвийский</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="language-ee">
                      <label for="language-ee">Эстонский</label>
                    </div>
                    <div class="item-extended-filter__row">
                      <input type="checkbox" name="" id="language-es">
                      <label for="language-es">Испанский</label>
                    </div>
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="language-pt">
                    <label for="language-pt">Португальский</label>
                  </div>
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="language-de">
                    <label for="language-de">Немецкий</label>
                  </div>
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="language-pl">
                    <label for="language-pl">Польский</label>
                  </div>
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="language-fi">
                    <label for="language-fi">Финский</label>
                  </div>
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="language-sw">
                    <label for="language-sw">Шведский</label>
                  </div>
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="language-it">
                    <label for="language-it">Итальянский</label>
                  </div>
                  <div class="item-extended-filter__row">
                    <input type="checkbox" name="" id="language-fr">
                    <label for="language-fr">Французский</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__has-passport">
            <input type="checkbox" name="" id="has-passport">
            <label for="has-passport">Есть паспорт для путешествий</label>
          </div>
        </div>
      </div>
      <div class="extended-filter__container extended-filter__container-fetish">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Фетишизм</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__forms-container">
            <div class="item-extended-filter__forms item-extended-filter__forms-fetish">
              <div class="item-extended-filter__fetish">
                <div class="item-extended-filter__row">
                  <label class="heading_h6" for="">Размер одежды:</label>
                  <input type="number" name="" id="" class="medium" min="0" placeholder="----">
                  <span>-</span>
                  <input type="number" name="" id="" class="medium" min="0" placeholder="----">
                  <span class="item-extended-filter__unit">см</span>
                </div>
                <div class="item-extended-filter__row">
                  <label class="heading_h6" for="">Размер обуви:</label>
                  <input type="number" name="" id="" class="medium" min="0" placeholder="----">
                  <span>-</span>
                  <input type="number" name="" id="" class="medium" min="0" placeholder="----">
                  <span class="item-extended-filter__unit">см</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extended-filter__container extended-filter__container-location">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Расположение</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__forms-container">
            <div class="item-extended-filter__forms item-extended-filter__forms-location">
              <div class="item-extended-filter__location">
                <label class="heading_h6" for="">Литва:</label>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="vilnus">
                  <label for="vilnus">Вильнюс</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="kaunas">
                  <label for="kaunas">Каунас</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="klaipeda">
                  <label for="klaipeda">Клайпеда</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="shaulai">
                  <label for="shaulai">Шяуляй</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="panevezis">
                  <label for="panevezis">Паневежис</label>
                </div>
              </div>
              <div class="item-extended-filter__location">
                <label class="heading_h6" for="">Латвия:</label>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="riga">
                  <label for="riga">Рига</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="urmala">
                  <label for="urmala">Юрмала</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="daugavpils">
                  <label for="daugavpils">Даугавпилс</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="liepaia">
                  <label for="liepaia">Лиепая</label>
                </div>
              </div>
              <div class="item-extended-filter__location">
                <label class="heading_h6" for="">Эстония:</label>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="tallin">
                  <label for="tallin">Таллин</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="tartu">
                  <label for="tartu">Тарту</label>
                </div>
                <div class="item-extended-filter__row">
                  <input type="checkbox" name="" id="narva">
                  <label for="narva">Нарва</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extended-filter__container extended-filter__container-appearance">
        <div class="extended-filter__item item-extended-filter">
          <h4 class="item-extended-filter__title">Спрос и Предложение</h4>
          <div class="item-extended-filter__stripe"></div>
          <div class="item-extended-filter__create-questionary">
              <input type="checkbox" name="" id="create-questionary">
              <label for="create-questionary">Создать как анкету в Спросе</label>
            </div>
        </div>
      </div>
    </div>
    <div class="extended-filter__button button button_primary" @click="$emit('setIsFilterModalMenuOpened', false)">Найти</div>
    </div>
  </div>
  
</template>
