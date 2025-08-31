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

const attendances = ['ご出席', 'ご欠席'];
const flags = ['新郎ゲスト', '新婦ゲスト'];

const form = reactive({
  attendance: null,
  first: '',
  last: '',
  firstkana: '',
  lastkana: '',
  name1: '',
  name1kana: '',
  name2: '',
  name2kana: '',
  name3: '',
  name3kana: '',
  name4: '',
  name4kana: '',
  flag: null,
  mailaddress: '',
  zipcode: '',
  city: "",
  address2: '',
  address3: '',
  allergy: '',
});

const checkRequired = () => {
  return form.attendance === null || first === '' || last === '' || firstkana === '' || lastkana === '' || flag === null;
}

async function handleFormSubmit() {
  const body = new URLSearchParams();
  body.append('entry.707064267', form.attendance);
  body.append('entry.654003671', form.first);
  body.append('entry.720946575', form.last);
  body.append('entry.1837378746', form.firstkana);
  body.append('entry.379307055', form.lastkana);

  const res = await fetch(config.public.GOOGLE_FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString()
  });
  res.json().then((data) => {
    console.log(data);
  });
}
</script>

<template>
  <main>
    <div class="grid grid-cols-1 smartphone:grid-cols-3">
      <div class="hidden smartphone:block smartphone:col-span-2">
        <p>aaa</p>
      </div>
      <div class="col-span-1">
        <NuxtImg :src="state.images.top"/>
        <div class="greeting py-[40px]">
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
            <div class="flex w-full h-full items-center justify-center">
              <div>
                <span class="font-jost text-white text-[28px]">countdown</span>
              </div>
              <CountDown />
            </div>
          </template>
        </ImageOnContent>
        <div class="information py-[40px]">
          <dl>
            <div class="grid grid-cols-3">
              <dt class="col-span-1 text-center">日時</dt>
              <dd class="col-span-2">{{ state.texts.information_datetime }}</dd>
            </div>
            <div class="grid grid-cols-3">
              <dt class="col-span-1 text-center">受付</dt>
              <dd class="col-span-2">{{ state.texts.information_entry }}</dd>
            </div>
            <div class="grid grid-cols-3">
              <dt class="col-span-1 text-center">挙式</dt>
              <dd class="col-span-2">{{ state.texts.information_ceremony }}</dd>
            </div>
            <div class="grid grid-cols-3">
              <dt class="col-span-1 text-center">披露宴</dt>
              <dd class="col-span-2">{{ state.texts.information_reception }}</dd>
            </div>
            <div class="grid grid-cols-3">
              <dt class="col-span-1 text-center">場所</dt>
              <dd class="col-span-2">{{ state.texts.information_place }}</dd>
            </div>
            <div class="grid grid-cols-3">
              <dt class="col-span-1 text-center">住所</dt>
              <dd class="col-span-2">{{ state.texts.information_address }}</dd>
            </div>
            <div class="grid grid-cols-3">
              <dt class="col-span-1 text-center">電話番号</dt>
              <dd class="col-span-2">{{ state.texts.information_number }}</dd>
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
            <template v-slot:content>>
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
        <div class="invitation">
          <label for="attendance">ご出欠</label>
          <div id="attendance">
            <RadioButton :items="attendances" v-model="form.attendance" :id="'attendance1'" :name="'attendance'" />
          </div>
          <label for="name">お名前</label>
          <div id="name">
            <NameInput
              v-model:first="form.first"
              v-model:last="form.last"
              v-model:firstkana="form.firstkana"
              v-model:lastkana="form.lastkana"
            />
          </div>
          <div>
            <label>ご連名</label>
            <div>
              <FullNameInput v-model:name="form.name1" v-model:kana="form.name1kana" placeholder="連名1" />
              <FullNameInput v-model:name="form.name2" v-model:kana="form.name2kana" placeholder="連名2" />
              <FullNameInput v-model:name="form.name3" v-model:kana="form.name3kana" placeholder="連名3" />
              <FullNameInput v-model:name="form.name4" v-model:kana="form.name4kana" placeholder="連名4" />
            </div>
          </div>
          <div>
            <label for="flag">いずれかをお選びください</label>
            <div id="flag">
              <RadioButton :items="flags" v-model="form.flag" :id="'flag1'" :name="'flag'" />
            </div>
          </div>
          <div>
            <label for="mailaddress">メールアドレス</label>
            <div id="mailaddress" class="grid grid-cols-1">
              <Input :v-model="form.mailaddress" placeholder="mail@mail.com"/>
            </div>
          </div>
          <div>
            <label>ご住所</label>
            <div class="grid grid-cols-1">
              <AddressInput v-model:zipcode="form.zipcode" v-model:address1="form.city" v-model:address2="form.address2" v-model:address3="form.address3" />
            </div>
          </div>
          <div>
            <label for="allergy">アレルギーについて</label>
            <div id="allergy">
              <p id="allergy-helper-text" class="font-mincho break-keep">アレルギーなど<wbr />食べられないものが<wbr />ございましたら、<wbr />ご遠慮なく<wbr />お書き添えください</p>
              <textarea class="m-1 h-[170px] border-1 border-[#C0E5D4] outline-[#C0E5D4] rounded-[6px]" aria-describedby="allergy-helper-text"></textarea>
            </div>
          </div>
          <button class="h-[72px] rounded-full shadow-md font-mincho bg-[#D7F0E5] disabled:bg-[#D9D9D9] disabled:text-white" :disabled="checkRequired" @click="handleFormSubmit">招待状に回答する</button>
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