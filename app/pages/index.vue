<template>
    <div class="invitation" id="invitation">
        <div class="py-[75px] curve">
            <div class="text-center leading-none">
            <p class="font-cursive text-[60px]">Invitation</p>
            <p class="font-mincho text-[24px]">ご入力ください</p>
            </div>
        </div>
        <div class="mx-2">
            <label for="attendance"><span class="font-mincho text-[24px] mr-2">ご出欠</span><Badge>必須</Badge></label>
            <div id="attendance">
                <RadioButton :items="attendances" v-model="form.attendance" :id="'attendance1'" :name="'attendance'" />
            </div>
            <label for="name"><span class="font-mincho text-[24px] mr-2">お名前</span><Badge>必須</Badge></label>
            <div id="name">
                <NameInput
                v-model:first="form.first"
                v-model:last="form.last"
                v-model:firstkana="form.firstkana"
                v-model:lastkana="form.lastkana"
                />
            </div>
            <div>
                <label><span class="font-mincho text-[24px]">ご連名</span></label>
                <div>
                <FullNameInput v-model:name="form.name1" v-model:kana="form.name1kana" placeholder="連名1" />
                <FullNameInput v-model:name="form.name2" v-model:kana="form.name2kana" placeholder="連名2" />
                <FullNameInput v-model:name="form.name3" v-model:kana="form.name3kana" placeholder="連名3" />
                <FullNameInput v-model:name="form.name4" v-model:kana="form.name4kana" placeholder="連名4" />
                </div>
            </div>
            <div>
                <label for="flag"><span class="font-mincho text-[24px] mr-2">いずれかをお選びください</span><Badge>必須</Badge></label>
                <div id="flag">
                <RadioButton :items="flags" v-model="form.flag" :id="'flag1'" :name="'flag'" />
                </div>
            </div>
            <div>
                <label for="mailaddress"><span class="font-mincho text-[24px]">メールアドレス</span></label>
                <div id="mailaddress" class="grid grid-cols-1">
                <Input :v-model="form.mailaddress" placeholder="mail@mail.com"/>
                </div>
            </div>
            <div>
                <label><span class="font-mincho text-[24px]">ご住所</span></label>
                <div class="grid grid-cols-1">
                <AddressInput v-model:zipcode="form.zipcode" v-model:address1="form.city" v-model:address2="form.address2" v-model:address3="form.address3" />
                </div>
            </div>
            <div>
                <label for="allergy"><span class="font-mincho text-[24px]">アレルギーについて</span></label>
                <div id="allergy">
                <p id="allergy-helper-text" class="font-mincho break-keep">アレルギーなど<wbr />食べられないものが<wbr />ございましたら、<wbr />ご遠慮なく<wbr />お書き添えください</p>
                <textarea class="m-1 h-[170px] border-1 border-[#C0E5D4] outline-[#C0E5D4] rounded-[6px]" aria-describedby="allergy-helper-text"></textarea>
                </div>
            </div>
            <button class="py-[36px] px-[81px] rounded-full shadow-md bg-[#D7F0E5] disabled:bg-[#D9D9D9] disabled:text-white" :disabled="checkRequired()" @click="handleFormSubmit()"><span class="font-mincho text-[36px]">招待状に回答する</span></button>
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from 'nuxt/app';
const router = useRouter();

const config = useRuntimeConfig();

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
  return form.attendance === null || form.first === '' || form.last === '' || form.firstkana === '' || form.lastkana === '' || form.flag === null;
}

const handleFormSubmit = async () => {
    const body = new URLSearchParams();
    body.append('entry.707064267', form.attendance);
    body.append('entry.654003671', form.first);
    body.append('entry.720946575', form.last);
    body.append('entry.1837378746', form.firstkana);
    body.append('entry.379307055', form.lastkana);

    const CORS_PROXY = config.public.NUXT_APP_URL + "/api/proxy/";

    const res = await fetch(CORS_PROXY + config.public.GOOGLE_FORM_ACTION, {
        method: 'POST',
        body: body.toString(),
    });
    switch(res.status){
        case 200:
            router.push('/thanks');
            break;
        default:
            break;
    }
}
</script>