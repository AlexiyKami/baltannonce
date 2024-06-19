<script setup>
import './register-form.scss';
import { PasswordIcon } from '@/shared/ui';
import {
  RegisterCardWithDescription,
  RegisterGenderCard,
  RegisterTextField,
  RegisterLocations
} from '@/entities/Register';
import { cities } from '@/shared/model/cities';
import Loader from '@/shared/api/api';
import {
  isLocationsCorrect,
  isEmailCorrect,
  isNickCorrect,
  isPasswordCorrect
} from '../../lib/helpers/fields-validation';

const type = ref('user');
const gender = ref('');
const locations = ref([]);
const email = ref('');
const nick = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const privacyPolicy = ref(false);
const wantToReceiveLetters = ref(false);
const passwordRequirements = ref({
  min: false,
  lowercaseLetter: false,
  capitalLetter: false,
  number: false
});
const showPassword = ref(false);
const showPasswordConfirmation = ref(false);
const submitError = ref(false);

const isNickInputFocused = ref(false);
const isPasswordInputFocused = ref(false);

const sendForm = async () => {
  if (
    !gender.value ||
    !isLocationsCorrect(locations.value) ||
    !isEmailCorrect(email.value) ||
    !isNickCorrect(nick.value) ||
    !isPasswordCorrect(passwordRequirements.value) ||
    !passwordConfirmation.value ||
    !privacyPolicy.value ||
    password.value !== passwordConfirmation.value
  ) {
    submitError.value = true;
  } else {
    if (type.value === 'user') {
      await Loader.registerUser({
        username: nick.value,
        email: email.value,
        password: password.value,
        cities: locations.value
      });
    } else {
      await Loader.registerAdvertiser({
        username: nick.value,
        email: email.value,
        password: password.value,
        cities: locations.value
      });
    }
    console.log({
      username: nick.value,
      email: email.value,
      password: password.value,
      cities: locations.value
    });
  }
};

const setLocations = (city, country) => {
  if (locations.value.find((location) => location.city_name === city)) {
    locations.value = locations.value.filter((location) => location.city_name !== city);
  } else {
    locations.value.push({ city_name: city, country_name: country });
  }
};

watch(password, () => {
  passwordRequirements.value.min = password.value.length >= 8;
  passwordRequirements.value.lowercaseLetter = /\p{Ll}/u.test(password.value);
  passwordRequirements.value.capitalLetter = /\p{Lu}/u.test(password.value);
  passwordRequirements.value.number = /\d/.test(password.value);
});
</script>

<template>
  <form class="register__form" novalidate @submit.prevent="sendForm">
    <div class="register__user-type-container">
      <h2 class="register__form-title heading_h3">Выберите тип</h2>
      <div class="register__user-type">
        <RegisterCardWithDescription
          title="Пользователь"
          text="Я хочу воспользоваться услугами"
          name="user"
          :type="type"
          @set-type="type = 'user'"
        >
          <path
            d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </RegisterCardWithDescription>
        <RegisterCardWithDescription
          title="Рекламодатель"
          text="Я хочу рекламировать свои услуги"
          name="advertiser"
          :type="type"
          @set-type="type = 'advertiser'"
        >
          <path
            d="M17.068 2.001L17.184 2.014C17.4454 2.05761 17.6789 2.20323 17.833 2.41887C17.9871 2.6345 18.0494 2.90251 18.006 3.164C17.576 5.744 18.094 8.58 19.434 11.594C20.608 14.237 20.254 17.018 18.979 19.658C18.7874 20.0564 18.5765 20.4452 18.347 20.823L18.115 21.187C18.0181 21.3329 17.916 21.4753 17.809 21.614C17.6532 21.8158 17.4262 21.9505 17.1745 21.9905C16.9227 22.0305 16.6651 21.9729 16.4544 21.8293C16.2438 21.6858 16.0958 21.4673 16.0409 21.2183C15.986 20.9694 16.0282 20.7088 16.159 20.49L16.231 20.386C16.592 19.883 16.909 19.346 17.178 18.788C17.968 17.152 18.321 15.491 18.057 13.905C16.147 14.374 15.016 15.212 14.304 16.255C13.491 17.445 13.129 19.041 12.999 21.045C12.9864 21.302 12.8757 21.5444 12.6896 21.7221C12.5035 21.8998 12.2563 21.9993 11.999 22C11.469 22 11.024 21.575 11.001 21.044C10.871 19.041 10.509 17.446 9.69598 16.254C8.98798 15.218 7.86698 14.384 5.97898 13.914C5.71798 15.497 6.07098 17.156 6.85898 18.788C7.07398 19.233 7.31698 19.67 7.59298 20.082L7.80598 20.386C7.96196 20.5958 8.02958 20.8583 7.99438 21.1173C7.95917 21.3764 7.82394 21.6113 7.61763 21.7718C7.41133 21.9324 7.15036 22.0058 6.89062 21.9763C6.63088 21.9468 6.39302 21.8167 6.22798 21.614C6.12094 21.4753 6.01888 21.3329 5.92198 21.187L5.68998 20.823C5.48998 20.495 5.27298 20.103 5.05798 19.658C3.78398 17.018 3.42798 14.237 4.60298 11.594C5.94298 8.58 6.46098 5.744 6.03098 3.164C6.00505 3.03268 6.00575 2.89749 6.03303 2.76644C6.06032 2.63539 6.11364 2.51115 6.18983 2.40109C6.26602 2.29103 6.36353 2.19739 6.47658 2.12572C6.58963 2.05404 6.71592 2.00579 6.84797 1.98383C6.98001 1.96187 7.11512 1.96664 7.24528 1.99786C7.37545 2.02908 7.49802 2.08612 7.60574 2.16559C7.71345 2.24506 7.80411 2.34535 7.87235 2.46051C7.94059 2.57567 7.98501 2.70335 8.00298 2.836C8.48498 5.726 7.96298 8.807 6.60298 12.01C8.79998 12.585 10.333 13.642 11.348 15.127C11.6 15.497 11.816 15.887 12 16.294C12.184 15.887 12.4 15.497 12.652 15.127C13.671 13.634 15.216 12.574 17.43 12.001C16.074 8.801 15.552 5.723 16.034 2.836C16.0739 2.59414 16.2013 2.37537 16.3919 2.22125C16.5825 2.06713 16.8231 1.98939 17.068 2.001ZM12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10C11.7348 10 11.4804 9.89464 11.2929 9.70711C11.1053 9.51957 11 9.26522 11 9C11 8.73478 11.1053 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8Z"
            fill="currentColor"
          />
        </RegisterCardWithDescription>
      </div>
    </div>
    <div class="register__gender-container">
      <h2 class="register__form-title heading_h3">Выберите пол</h2>
      <span v-if="submitError && !gender" class="register__error-message"
        >Пожалуйста, выберите пол</span
      >
      <div class="register__gender">
        <RegisterGenderCard
          title="Мужской"
          :gender="gender"
          name="male"
          @set-gender="gender = 'male'"
        >
          <path
            d="M14.232 9.747C13.6735 9.19118 13.011 8.75081 12.2823 8.45103C11.5536 8.15126 10.773 7.99794 9.98501 7.99985C9.19705 8.00175 8.41719 8.15883 7.68995 8.46213C6.9627 8.76542 6.30232 9.20899 5.7465 9.7675C5.19068 10.326 4.75031 10.9885 4.45053 11.7172C4.15076 12.4459 3.99744 13.2265 3.99935 14.0145C4.00125 14.8024 4.15833 15.5823 4.46163 16.3096C4.76492 17.0368 5.20849 17.6972 5.767 18.253C6.89497 19.3755 8.42266 20.004 10.014 20.0002C11.6053 19.9963 13.13 19.3605 14.2525 18.2325C15.375 17.1045 16.0035 15.5768 15.9997 13.9855C15.9958 12.3942 15.36 10.8695 14.232 9.747ZM14.232 9.747L20 4M20 4H16M20 4V8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </RegisterGenderCard>
        <RegisterGenderCard
          title="Женский"
          :gender="gender"
          name="female"
          @set-gender="gender = 'female'"
        >
          <path
            d="M12 14.313C13.5334 14.313 15.0039 13.7039 16.0881 12.6196C17.1724 11.5354 17.7815 10.0648 17.7815 8.5315C17.7815 6.99815 17.1724 5.5276 16.0881 4.44336C15.0039 3.35912 13.5334 2.75 12 2.75C10.4667 2.75 8.99611 3.35912 7.91187 4.44336C6.82763 5.5276 6.21851 6.99815 6.21851 8.5315C6.21851 10.0648 6.82763 11.5354 7.91187 12.6196C8.99611 13.7039 10.4667 14.313 12 14.313ZM12 14.313V21.25M8.53101 17.781H15.469"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </RegisterGenderCard>
      </div>
    </div>
    <div class="register__locations-container">
      <h2 class="register__form-title heading_h3">Выберите город <span>(не более 2)</span></h2>
      <span v-if="submitError && !isLocationsCorrect(locations)" class="register__error-message"
        >Пожалуйста, выберите до двух городов</span
      >
      <RegisterLocations
        title="Литва"
        country="lithuania"
        :locations="locations"
        :cities="cities.lithuanianCities"
        @set-locations="setLocations"
      />
      <RegisterLocations
        title="Латвия"
        country="latvia"
        :locations="locations"
        :cities="cities.latvianCities"
        @set-locations="setLocations"
      />
      <RegisterLocations
        title="Эстония"
        country="estonia"
        :locations="locations"
        :cities="cities.estonianCities"
        @set-locations="setLocations"
      />
    </div>
    <div class="register__inputs-container">
      <h2 class="register__form-title heading_h3">Ввести информацию</h2>
      <div class="register__inputs">
        <RegisterTextField
          type="email"
          placeholder="Email"
          :value="email"
          @set-value="(value) => (email = value)"
        >
          <span
            v-if="submitError && !email"
            class="register__error-message register__error-message_small"
            >Пожалуйста, заполните поле</span
          >
          <span
            v-if="submitError && !isEmailCorrect(email) && email"
            class="register__error-message register__error-message_small"
            >Email который вы ввели не является допустимым</span
          >
        </RegisterTextField>
        <RegisterTextField
          type="text"
          placeholder="Ник"
          :value="nick"
          @set-value="(value) => (nick = value)"
          @set-focus="(value) => (isNickInputFocused = value)"
        >
          <span
            v-if="submitError && !nick"
            class="register__error-message register__error-message_small"
            >Пожалуйста, заполните поле</span
          >
          <div
            v-if="(nick && isNickInputFocused) || (nick && submitError && !isNickCorrect(nick))"
            class="register__inputs-tips"
          >
            <span
              class="register__inputs-tip"
              :class="{
                'register__inputs-tip_correct': isNickCorrect(nick)
              }"
              >От 2 до 10 символов</span
            >
          </div>
        </RegisterTextField>
        <RegisterTextField
          :type="showPassword ? 'text' : 'password'"
          placeholder="Пароль"
          :value="password"
          @set-value="(value) => (password = value)"
          @set-focus="(value) => (isPasswordInputFocused = value)"
        >
          <span
            v-if="submitError && !password"
            class="register__error-message register__error-message_small"
            >Пожалуйста, заполните поле</span
          >
          <div
            v-if="
              (password && isPasswordInputFocused) ||
              (password && submitError && !isPasswordCorrect(passwordRequirements))
            "
            class="register__inputs-tips"
          >
            <span
              class="register__inputs-tip"
              :class="{
                'register__inputs-tip_correct': passwordRequirements.min
              }"
              >Минимум 8 символов</span
            >
            <span
              class="register__inputs-tip"
              :class="{
                'register__inputs-tip_correct': passwordRequirements.lowercaseLetter
              }"
              >Минимум 1 строчная буква</span
            >
            <span
              class="register__inputs-tip"
              :class="{
                'register__inputs-tip_correct': passwordRequirements.capitalLetter
              }"
              >Минимум 1 заглавная буква</span
            >
            <span
              class="register__inputs-tip"
              :class="{
                'register__inputs-tip_correct': passwordRequirements.number
              }"
              >Минимум 1 цифра</span
            >
            <span class="register__inputs-tip-no-symbol"
              >Можно использовать специальные символы</span
            >
          </div>
          <PasswordIcon
            :show-password="showPassword"
            @set-visibility="
              (value) => {
                showPassword = value;
                isPasswordInputFocused = true;
              }
            "
          />
        </RegisterTextField>
        <RegisterTextField
          :type="showPasswordConfirmation ? 'text' : 'password'"
          placeholder="Подтверждение пароля"
          :value="passwordConfirmation"
          @set-value="(value) => (passwordConfirmation = value)"
        >
          <span
            v-if="submitError && !passwordConfirmation"
            class="register__error-message register__error-message_small"
            >Пожалуйста, заполните поле</span
          >
          <span
            v-if="submitError && password !== passwordConfirmation && passwordConfirmation"
            class="register__error-message register__error-message_small"
            >Пароли не совпадают</span
          >
          <PasswordIcon
            :show-password="showPasswordConfirmation"
            @set-visibility="(value) => (showPasswordConfirmation = value)"
          />
        </RegisterTextField>
      </div>
    </div>
    <div class="register__checkboxes">
      <div class="register__privacy-policy">
        <div class="register__checkbox-container">
          <input id="register-terms-of-use" v-model="privacyPolicy" type="checkbox" >
          <label for="register-terms-of-use">
            Я согласен с
            <a href="#" class="button text-button">Политика конфиденциальности</a> &
            <a href="#" class="button text-button">Условия и положения</a>
          </label>
        </div>
        <span v-if="submitError && !privacyPolicy" class="register__error-message"
          >Пожалуйста, подтвердите согласие с правилами</span
        >
      </div>

      <div v-if="type === 'user'" class="register__checkbox-container">
        <input id="register-subscribe-email" v-model="wantToReceiveLetters" type="checkbox" >
        <label for="register-subscribe-email"
          >Я хочу получать письма от рекламодателя в фаворитах</label
        >
      </div>
    </div>
    <div class="register__actions-container">
      <button class="button button_primary register__button" @submit.prevent="sendForm">
        Регистрация
      </button>
    </div>
  </form>
</template>
