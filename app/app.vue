<script setup>
import { useRuntimeConfig } from 'nuxt/app';

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
</script>

<template>
  <main>
    <div class="bg-[#FFFBE5]">
      <div class="grid m-auto grid-cols-1 smartphone:grid-cols-3 smartphone:w-[1440px]">
        <div class="hidden smartphone:block smartphone:col-span-2 box">
            <div class="leading-none">
              <p class="text-center text-[#FCDADA] font-jost text-[30px] ">WEDDING</p>
              <p class="text-center text-[#FCDADA] font-cursive text-[64px] ">Invitation</p>
            </div>
            <div class="grid grid-cols-5">
              <div class="col-span-2">
              </div>
              <div class="col-span-3">
                <dl class="font-mincho text-[24px] pb-2">
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
              <button class="py-[36px] px-[81px] rounded-full shadow-md bg-[#D7F0E5] disabled:bg-[#D9D9D9] disabled:text-white" href="#invitation"><span class="font-mincho text-[36px]">招待状に回答する</span></button>
            </div>
        </div>
        <div class="col-span-1 mw-[750px] h-[100vh] overflow-x-auto">
          <div class="grid grid-cols-10">
            <NuxtImg :src="state.images.top" class="col-span-9"/>
            <div class="col-span-1 w-full">
              <span class="[writing-mode:vertical-rl] font-jost text-[#FCDADA]"><span class="text-[24px]">{{ state.texts.top_name }}</span><span class="text-[17px]">{{ state.texts.top_month }}</span><span class="text-[28px]">{{ state.texts.top_day }}</span><span class="text-[17px]">{{ state.texts.top_year }}</span></span>
            </div>
          </div>
          <div class="greeting py-[40px]">
            <div class="leading-none">
              <p class="text-center text-[#FF8F89] font-jost text-[30px] ">WEDDING</p>
              <p class="text-center text-[#FF89A9] font-cursive text-[64px] ">Invitation</p>
            </div>
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
          <ImageOnContent class="gradation">
            <template v-slot:image>
              <NuxtImg :src="state.images.countdown" class="mask-img-top-bottom" />
            </template>
            <template v-slot:content>
              <div class="grid-rows-3 leading-none">
                <div>
                  <span class="font-jost text-white text-[28px]">countdown</span>
                </div>
                <CountDown />
              </div>
            </template>
          </ImageOnContent>
          <div class="information py-[40px]">
            <div>
              <p class="text-center font-cursive text-[60px] tracking-tighter">Information</p>
            </div>
            <dl class="font-mincho text-[24px] pb-2">
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
            <div>
              <BasicMap :position="{ lat: 35.685355, lng: 139.753144 }" :zoom="14" />
            </div>
          </div>
          <div class="relative">
            <ImageOnContent>
              <template v-slot:image>
                <NuxtImg :src="state.images.profile" class="image" />
              </template>
              <template v-slot:content>
                <div class="content flex w-full h-full items-center justify-center">
                    <p class="font-cursive text-white text-[80px]">profile</p>
                </div>
              </template>
            </ImageOnContent>
            <div class="absolute top-[90%] left-[90%]">
              <NuxtImg :src="state.images.jewel1" />
            </div>
          </div>
          <div class="profile">
            <div class="grid grid-cols-2">
              <div>
              </div>
              <div>
                <p class="text-center font-mincho">{{ state.texts.profile_groom_name }}</p>
                <p class="text-center font-jost">{{ state.texts.profile_groom_type }}</p>
              </div>
            </div>
            <p>{{ state.texts.profile_groom_comment }}</p>
            <div class="grid grid-cols-2">
              <div>
                <p class="text-center font-mincho">{{ state.texts.profile_bride_name }}</p>
                <p class="text-center font-jost">{{ state.texts.profile_bride_type }}</p>
              </div>
              <div>
              </div>
            </div>
            <p>{{ state.texts.profile_bride_comment }}</p>
          </div>
          <hr class="text-[#F5DAF6] border-8">
          <NuxtPage />
        </div>
      </div>
    </div>
  </main>
</template>
<style>
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
.curve {
  overflow: hidden;

  
}
.box {
  background-image: linear-gradient(0deg, transparent calc(100% - 2px), #F5DAF6 calc(100% - 2px)),
                    linear-gradient(90deg, transparent calc(100% - 2px), #F5DAF6 calc(100% - 2px));
  background-size: 66px 66px;
  background-repeat: repeat;
  background-position: center center;
}
.mask-img-top-bottom {
  --mask:
    radial-gradient(22.36px at 50% 30px,#000 99%,#0000 101%) calc(50% - 20px) 0/40px 51% repeat-x,
    radial-gradient(22.36px at 50% -20px,#0000 99%,#000 101%) 50% 10px/40px calc(51% - 10px) repeat-x,
    radial-gradient(22.36px at 50% calc(100% - 30px),#000 99%,#0000 101%) calc(50% - 20px) 100%/40px 51% repeat-x,
    radial-gradient(22.36px at 50% calc(100% + 20px),#0000 99%,#000 101%) 50% calc(100% - 10px)/40px calc(51% - 10px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
.gradation {
  background: linear-gradient(180deg, #EEFFF7, #E6F8FF);
}
</style>