<script setup>
import { useRuntimeConfig } from 'nuxt/app';
import { useTemplateRef } from 'vue'

const state = reactive({
  images: [],
  texts: [],
});

const config = useRuntimeConfig();

const imagesRes = await fetch(config.public.NUXT_APP_URL + "/api/gallery");
imagesRes.json().then((images) => {
  state.images = images;
});

const textsRes = await fetch(config.public.NUXT_APP_URL + "/api/text");
textsRes.json().then((texts) => {
  state.texts = texts;
});

const smartphone = useTemplateRef('smartphone');
const horizon = useTemplateRef('horizon');

const scrollToNearbyInvitation = () => {
  var rect = horizon.value.getBoundingClientRect();
  var position = rect.top;

  smartphone.value.scrollTo(0, position);
}
</script>

<template>
  <main>
    <div>
      <div class="grid m-auto grid-cols-1 smartphone:grid-cols-3 smartphone:w-[1440px]">
        <div class="hidden smartphone:block smartphone:col-span-2">
          <div class="relative">
            <div class="relative">
              <div>
                <div class="leading-none mt-[60px] mb-[30px]">
                  <p class="text-center text-[#FCDADA] font-jost text-[66px] ">WEDDING</p>
                  <p class="text-center text-[#FCDADA] font-cursive text-[145px] tracking-tighter">Invitation</p>
                </div>
                <div class="grid grid-cols-5 mb-[60px]">
                  <div class="flex justify-center col-span-2">
                    <NuxtImg :src="state.images.photos" width="250px" height="330px" />
                  </div>
                  <div class="col-span-3">
                    <dl class="font-mincho text-[20px] pb-2">
                      <div class="grid grid-cols-5 pb-2">
                        <dt class="col-span-2 mx-10" style="text-align-last: justify;">日時</dt>
                        <dd class="col-span-3">{{ state.texts.information_datetime }}</dd>
                      </div>
                      <div class="grid grid-cols-5 pb-2">
                        <dt class="col-span-2 mx-10" style="text-align-last: justify;">受付</dt>
                        <dd class="col-span-3">{{ state.texts.information_entry }}</dd>
                      </div>
                      <div class="grid grid-cols-5 pb-2">
                        <dt class="col-span-2 mx-10" style="text-align-last: justify;">挙式</dt>
                        <dd class="col-span-3">{{ state.texts.information_ceremony }}</dd>
                      </div>
                      <div class="grid grid-cols-5 pb-2">
                        <dt class="col-span-2 mx-10" style="text-align-last: justify;">披露宴</dt>
                        <dd class="col-span-3">{{ state.texts.information_reception }}</dd>
                      </div>
                      <div class="grid grid-cols-5 pb-2">
                        <dt class="col-span-2 mx-10" style="text-align-last: justify;">場所</dt>
                        <dd class="col-span-3">{{ state.texts.information_place }}</dd>
                      </div>
                      <div class="grid grid-cols-5 pb-2">
                        <dt class="col-span-2 mx-10" style="text-align-last: justify;">住所</dt>
                        <dd class="col-span-3">{{ state.texts.information_address }}</dd>
                      </div>
                      <div class="grid grid-cols-5 pb-2">
                        <dt class="col-span-2 mx-10" style="text-align-last: justify;">電話番号</dt>
                        <dd class="col-span-3">{{ state.texts.information_number }}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div class="flex justify-center">
                  <button class="py-[28px] px-[81px] rounded-full shadow-md bg-[#D7F0E5] disabled:bg-[#D9D9D9] disabled:text-white" @click="scrollToNearbyInvitation()">
                    <span class="font-mincho text-[36px]">招待状に回答する</span>
                  </button>
                </div>
              </div>
              <div class="absolute top-[80%] left-[-5%]">
                <NuxtImg src="/img/jewel8.png" width="215px" height="263px" />
              </div>
            </div>
            <div class="absolute top[65%] left-[75%]">
              <NuxtImg :src="state.images.thanks" width="212" height="110" />
            </div>
          </div>
        </div>
        <div class="col-span-1 mw-[750px] h-[100dvh] overflow-x-auto box-border" ref="smartphone">
          <div class="relative">
            <div class="top grid grid-cols-10">
              <NuxtImg :src="state.images.top" class="col-span-9 w-full" width="329" height="409"/>
              <div class="col-span-1 w-full">
                <span class="[writing-mode:vertical-rl] font-jost text-[#FCDADA]">
                  <span class="mx-[22px]">
                    <span class="text-[24px]">{{ state.texts.top_name }}</span>
                  </span>
                  <span class="mx-[4px]">
                    <span class="text-[17px]">{{ state.texts.top_month }}</span>
                    <span class="text-[28px]">{{ state.texts.top_day }}</span>
                    <span class="text-[17px]">{{ state.texts.top_year }}</span>
                  </span>
                </span>
              </div>
            </div>
            <div class="absolute top-[90%] left-[74%]">
              <NuxtImg src="/img/jewel1.png" width="116px" height="108px" />
            </div>
          </div>
          <div class="greeting">
            <div class="relative">
              <div class="leading-none">
                <p class="text-center text-[#FF8F89] font-jost text-[30px] ">WEDDING</p>
                <p class="text-center text-[#FF89A9] font-cursive text-[64px] ">Invitation</p>
              </div>
              <div class="absolute top-[90%] left-[0%]">
                <NuxtImg src="/img/jewel2.png" width="112px" height="114" />
              </div>
            </div>
            <div class="py-10">
              <div class="pb-8">
                <p class="text-center font-mincho">{{ state.texts.greeting_acronym }}</p>
              </div>
              <div class="pb-10">
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph1 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph2 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph3 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph4 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph5 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph6 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph7 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph8 }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_paragraph9 }}</p>
              </div>
              <div class="pb-8">
                <p class="text-center font-mincho">{{ state.texts.greeting_backronyum }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_date }}</p>
              </div>
              <div>
                <p class="text-center font-mincho">{{ state.texts.greeting_groom }}</p>
                <p class="text-center font-mincho">{{ state.texts.greeting_bride }}</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <ImageOnContent class="gradation">
              <template v-slot:image>
                <NuxtImg :src="state.images.countdown" class="mask-img-top-bottom" />
              </template>
              <template v-slot:content>
                <div class="grid-rows-3 leading-none">
                  <div class="flex justify-center">
                    <span class="font-jost text-white text-[28px]">COUNT DOWN</span>
                  </div>
                  <CountDown :today="state.texts.countdown_today" />
                </div>
              </template>
            </ImageOnContent>
            <div class="absolute top-[85%] left-[67%]">
              <NuxtImg src="/img/jewel3.png" width="209px" height="75px" />
            </div>
          </div>
          <div class="information py-[40px]">
            <div>
              <p class="text-center font-cursive italic text-[60px] text-[#FF8F89] tracking-tighter">Information</p>
            </div>
            <dl class="font-mincho text-[20px] mb-8">
              <div class="grid grid-cols-5 pb-2">
                <dt class="col-span-2 mx-10" style="text-align-last: justify;">日時</dt>
                <dd class="col-span-3">{{ state.texts.information_datetime }}</dd>
              </div>
              <div class="grid grid-cols-5 pb-2">
                <dt class="col-span-2 mx-10" style="text-align-last: justify;">受付</dt>
                <dd class="col-span-3">{{ state.texts.information_entry }}</dd>
              </div>
              <div class="grid grid-cols-5 pb-2">
                <dt class="col-span-2 mx-10" style="text-align-last: justify;">挙式</dt>
                <dd class="col-span-3">{{ state.texts.information_ceremony }}</dd>
              </div>
              <div class="grid grid-cols-5 pb-2">
                <dt class="col-span-2 mx-10" style="text-align-last: justify;">披露宴</dt>
                <dd class="col-span-3">{{ state.texts.information_reception }}</dd>
              </div>
              <div class="grid grid-cols-5 pb-2">
                <dt class="col-span-2 mx-10" style="text-align-last: justify;">場所</dt>
                <dd class="col-span-3">{{ state.texts.information_place }}</dd>
              </div>
              <div class="grid grid-cols-5 pb-2">
                <dt class="col-span-2 mx-10" style="text-align-last: justify;">住所</dt>
                <dd class="col-span-3">{{ state.texts.information_address }}</dd>
              </div>
              <div class="grid grid-cols-5 pb-2">
                <dt class="col-span-2 mx-10" style="text-align-last: justify;">電話番号</dt>
                <dd class="col-span-3">{{ state.texts.information_number }}</dd>
              </div>
            </dl>
            <div class="m-4">
              <BasicMap :position="{ lat: Number(state.texts.information_lat), lng: Number(state.texts.information_lng) }" :zoom="28" :name="state.texts.information_place" />
            </div>
          </div>
          <div class="relative">
            <ImageOnContent>
              <template v-slot:image>
                <NuxtImg :src="state.images.profile" class="image" />
              </template>
              <template v-slot:content>
                <div class="flex w-full h-full items-center justify-center">
                    <p class="font-cursive text-white text-[80px]">profile</p>
                </div>
              </template>
            </ImageOnContent>
            <div class="absolute top-[85%] left-[76%]">
              <NuxtImg src="/img/jewel4.png" width="108px" height="92px" />
            </div>
          </div>
          <div class="profile py-[39px]">
            <div class="mx-15">
              <div class="grid grid-cols-2">
                <div class="flex justify-center">
                  <NuxtImg :src="state.images.groom" width="175px" height="175px" />
                </div>
                <div class="flex items-center justify-center">
                  <div>
                    <p class="text-center text-[30px] font-mincho">{{ state.texts.profile_groom_name }}</p>
                    <p class="text-center text-[16px] text-[#FF8F89] font-jost">{{ state.texts.profile_groom_type }}</p>
                  </div>
                </div>
              </div>
              <div class="my-4">
                <p class="text-center text-[16px] font-mincho">{{ state.texts.profile_groom_comment }}</p>
              </div>
              <div class="grid grid-cols-2">
                <div class="flex items-center justify-center">
                  <div>
                    <p class="text-center text-[30px] font-mincho">{{ state.texts.profile_bride_name }}</p>
                    <p class="text-center text-[16px] text-[#FF8F89] font-jost">{{ state.texts.profile_bride_type }}</p>
                  </div>
                </div>
                <div class="flex justify-center">
                  <NuxtImg :src="state.images.bride" width="175px" height="175px" />
                </div>
              </div>
              <div class="my-4">
                <p class="text-center text-[16px] font-mincho">{{ state.texts.profile_bride_comment }}</p>
              </div>
            </div>
          </div>
          <hr class="text-[#F5DAF6] border-8" ref="horizon">
          <NuxtPage />
        </div>
      </div>
    </div>
  </main>
</template>
<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  background-color: #FFFBE5;
  background-image: linear-gradient(0deg, transparent calc(100% - 2px), #F5DAF6 calc(100% - 2px)),
                    linear-gradient(90deg, transparent calc(100% - 2px), #F5DAF6 calc(100% - 2px));
  background-size: 66px 66px;
  background-repeat: repeat;
  background-position: center center;
}
.top {
  background-color: #EEFFF7;
}
.greeting {
  background-color: #EEFFF7;
}
.information {
  background-color: #E6F8FF;
}
.profile {
  background-color: #FDFDFD;
}
.invitation {
  background-color: #FFFFFF;
}
.thanks {
  background-color: #FFFFFF;
}
.mask-img-top-bottom {
  --mask:
    radial-gradient(34.41px at 50% 48px,#000 99%,#0000 101%) calc(50% - 40px) 0/80px 51% repeat-x,
    radial-gradient(34.41px at 50% -28px,#0000 99%,#000 101%) 50% 20px/80px calc(51% - 20px) repeat-x,
    radial-gradient(34.41px at 50% calc(100% - 48px),#000 99%,#0000 101%) calc(50% - 40px) 100%/80px 51% repeat-x,
    radial-gradient(34.41px at 50% calc(100% + 28px),#0000 99%,#000 101%) 50% calc(100% - 20px)/80px calc(51% - 20px) repeat-x;
  -webkit-mask: var(--mask);
      mask: var(--mask);
}
.gradation {
  background: linear-gradient(180deg, #EEFFF7, #E6F8FF);
}
</style>