<script setup lang="ts">
useSeoMeta({
  // title: 'Coming Soon',
  // ogTitle: 'CeLuc - Coming Soon',
  // description: 'CeLuc is an upcomming IT-Services Company in Bavaria.',
  // ogDescription: 'CeLuc is an upcomming IT-Services Company in Bavaria.',
  // ogImage: 'https://dam.celuc.de/assets/b3a8f52c-455d-45e6-9169-c52c5de5d77c',
  // twitterCard: 'summary_large_image',
})

useSeoMeta({
  title: 'Coming Soon',
  description: 'CeLuc is an upcomming IT-Services Company in Bavaria.',
  ogTitle: 'Coming Soon',
  ogDescription: 'CeLuc is an upcomming IT-Services Company in Bavaria.',
  ogImage: 'https://dam.celuc.de/assets/dfc08b80-9a81-40cc-af34-3bcf1e23724a',
  ogUrl: 'https://celuc.de',
  twitterTitle: 'Coming Soon',
  twitterDescription: 'CeLuc is an upcomming IT-Services Company in Bavaria.',
  twitterImage:
    'https://dam.celuc.de/assets/07d77e6a-9648-4d5a-a3e0-4a23b7652862',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img(
    'b6479605-53c9-404e-975c-1db66cbf8cf1',
    { placeholder: true },
    { provider: 'directus' }
  )
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div id="wrapper" class="flex">
    <NuxtImg
      provider="directus"
      src="b6479605-53c9-404e-975c-1db66cbf8cf1"
      placeholder
      preset="background"
      id="bg"
      alt="Background"
    />
    <div id="glasspane-wrapper" class="w-full px-6 mx-auto my-auto md:px-12">
      <div id="glasspane" class="w-full p-8 mx-auto lg:p-24">
        <div class="top-0 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 304 304"
            fill="none"
            class="mx-auto"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M67.9296 139.187C78.7643 58.197 177.956 30.157 233.709 86.577C233.872 86.7421 234.08 86.8544 234.307 86.899C234.534 86.9436 234.768 86.9185 234.979 86.827L286.034 65.107C286.166 65.052 286.283 64.9677 286.378 64.8604C286.472 64.7531 286.541 64.6255 286.58 64.4871C286.618 64.3487 286.625 64.203 286.6 64.0611C286.574 63.9191 286.518 63.7844 286.434 63.667C264.078 32.4203 234.582 12.5203 197.947 3.96698C141.164 -9.28302 76.3455 11.127 40.7028 58.187C22.245 82.5603 12.713 110.814 12.1066 142.947C12 148.527 11.9733 154.11 12.0267 159.697C12.4165 200.927 28.3687 238.997 62.7721 263.767C63.0476 263.967 63.3255 264.224 63.6189 264.496C64.3686 265.191 65.2194 265.979 66.3903 266.137C66.7968 266.19 67 266.01 67 265.597C66.9201 230.09 66.9334 194.607 67.04 159.147C67.0667 150.074 67.3632 143.42 67.9296 139.187ZM238.527 213.957C237.987 214.364 237.088 215.257 235.828 216.637C210.48 244.277 175.697 257.617 138.935 246.117C138.102 245.857 137.686 245.294 137.686 244.427V82.917C137.686 82.3503 137.403 82.0737 136.836 82.087C114.167 82.567 95.0165 97.787 89.8789 119.547C88.9194 123.594 88.443 130.224 88.4496 139.437C88.4696 187.81 88.4696 235.917 88.4496 283.757C88.4496 284.201 88.5694 284.637 88.7963 285.019C89.0232 285.401 89.3489 285.715 89.739 285.927C159.505 324.357 247.852 298.937 291.771 233.887C291.884 233.722 291.957 233.533 291.986 233.335C292.015 233.136 291.999 232.934 291.938 232.744C291.877 232.553 291.774 232.378 291.636 232.233C291.498 232.089 291.329 231.977 291.141 231.907C274.383 225.547 257.628 219.154 240.876 212.727C240.089 212.427 239.476 212.647 239.037 213.387C238.903 213.607 238.733 213.797 238.527 213.957Z"
              fill="black"
            />
          </svg>
          <h4 class="mt-4">Our new site</h4>
        </div>
        <h1 class="mt-6 text-center">Coming Soon</h1>
        <p class="mt-4 text-center lg:mt-11">
          We’re currently working on creating our new website. We’ll be
          launching soon.
        </p>
        <div id="progress-wrapper" class="flex justify-center w-full">
          <div id="progressbar" class="w-full mx-12 mt-9">
            <div id="progress" />
          </div>
        </div>
        <div id="socials" class="bottom-0 mt-9">
          <a href="#" id="twitter" class="socials-item" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41 34"
              class="socials-icon"
            >
              <path
                d="M36.7436 8.77871C36.7689 9.13315 36.7689 9.48767 36.7689 9.84211C36.7689 20.653 28.5404 33.1098 13.5012 33.1098C8.86791 33.1098 4.56379 31.7678 0.943237 29.4387C1.60154 29.5146 2.23444 29.5399 2.91807 29.5399C6.7411 29.5399 10.2604 28.2487 13.0708 26.046C9.47555 25.97 6.46264 23.6154 5.42457 20.3746C5.93098 20.4505 6.43732 20.5012 6.96906 20.5012C7.70327 20.5012 8.43756 20.3998 9.12111 20.2227C5.37399 19.4631 2.56355 16.1717 2.56355 12.1967V12.0955C3.65221 12.7031 4.91824 13.0829 6.26002 13.1335C4.0573 11.665 2.61421 9.15848 2.61421 6.32279C2.61421 4.80371 3.01923 3.4112 3.72819 2.1959C7.75385 7.15832 13.805 10.399 20.5903 10.7535C20.4637 10.1459 20.3877 9.513 20.3877 8.88002C20.3877 4.37329 24.0336 0.702148 28.5656 0.702148C30.9202 0.702148 33.0469 1.68957 34.5408 3.28463C36.389 2.93019 38.1612 2.24656 39.7311 1.3098C39.1233 3.20872 37.8321 4.80379 36.1358 5.81646C37.7816 5.63931 39.3766 5.18348 40.845 4.55058C39.7312 6.1709 38.3386 7.61399 36.7436 8.77871Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="#"
            id="instagram"
            class="socials-item"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="socials-icon"
            >
              <path
                d="M15.9447 7.76539C11.4387 7.76539 7.80418 11.3999 7.80418 15.9059C7.80418 20.4119 11.4387 24.0464 15.9447 24.0464C20.4507 24.0464 24.0852 20.4119 24.0852 15.9059C24.0852 11.3999 20.4507 7.76539 15.9447 7.76539ZM15.9447 21.1983C13.0328 21.1983 10.6523 18.8249 10.6523 15.9059C10.6523 12.9869 13.0257 10.6135 15.9447 10.6135C18.8637 10.6135 21.2371 12.9869 21.2371 15.9059C21.2371 18.8249 18.8566 21.1983 15.9447 21.1983ZM26.3169 7.4324C26.3169 8.48804 25.4667 9.33114 24.4182 9.33114C23.3625 9.33114 22.5194 8.48096 22.5194 7.4324C22.5194 6.38384 23.3696 5.53366 24.4182 5.53366C25.4667 5.53366 26.3169 6.38384 26.3169 7.4324ZM31.7085 9.35948C31.5881 6.81602 31.0071 4.56303 29.1438 2.70679C27.2876 0.85056 25.0346 0.269601 22.4911 0.142074C19.8697 -0.00670848 12.0126 -0.00670848 9.39119 0.142074C6.85481 0.262516 4.60182 0.843475 2.7385 2.69971C0.875183 4.55594 0.301309 6.80893 0.173781 9.3524C0.0249993 11.9738 0.0249993 19.8309 0.173781 22.4523C0.294224 24.9958 0.875183 27.2488 2.7385 29.105C4.60182 30.9612 6.84772 31.5422 9.39119 31.6697C12.0126 31.8185 19.8697 31.8185 22.4911 31.6697C25.0346 31.5493 27.2876 30.9683 29.1438 29.105C31 27.2488 31.581 24.9958 31.7085 22.4523C31.8573 19.8309 31.8573 11.9809 31.7085 9.35948ZM28.3219 25.265C27.7693 26.6536 26.6995 27.7235 25.3038 28.2832C23.2138 29.1121 18.2544 28.9208 15.9447 28.9208C13.635 28.9208 8.66853 29.105 6.58558 28.2832C5.19695 27.7305 4.12714 26.6607 3.56743 25.265C2.7385 23.175 2.92979 18.2156 2.92979 15.9059C2.92979 13.5962 2.74559 8.62974 3.56743 6.54679C4.12005 5.15816 5.18987 4.08834 6.58558 3.52864C8.67562 2.69971 13.635 2.891 15.9447 2.891C18.2544 2.891 23.2208 2.70679 25.3038 3.52864C26.6924 4.08126 27.7622 5.15107 28.3219 6.54679C29.1509 8.63683 28.9596 13.5962 28.9596 15.9059C28.9596 18.2156 29.1509 23.1821 28.3219 25.265Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="#" id="linkedin" class="socials-item" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 32"
              class="socials-icon"
            >
              <path
                d="M29.7794 0.0357971H2.56647C1.31953 0.0357971 0.306396 1.0631 0.306396 2.32421V29.4876C0.306396 30.7487 1.31953 31.776 2.56647 31.776H29.7794C31.0264 31.776 32.0466 30.7487 32.0466 29.4876V2.32421C32.0466 1.0631 31.0264 0.0357971 29.7794 0.0357971ZM9.8993 27.2417H5.19495V12.0942H9.90639V27.2417H9.8993ZM7.54713 10.0255C6.03805 10.0255 4.81946 8.79977 4.81946 7.29778C4.81946 5.79579 6.03805 4.57011 7.54713 4.57011C9.04912 4.57011 10.2748 5.79579 10.2748 7.29778C10.2748 8.80686 9.0562 10.0255 7.54713 10.0255ZM27.5335 27.2417H22.8292V19.8734C22.8292 18.1164 22.7938 15.8563 20.3849 15.8563C17.9335 15.8563 17.558 17.7692 17.558 19.7459V27.2417H12.8537V12.0942H17.3668V14.163H17.4305C18.0611 12.9728 19.5985 11.7187 21.8869 11.7187C26.6479 11.7187 27.5335 14.8573 27.5335 18.9382V27.2417Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#bg {
  pointer-events: none;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  object-position: center;
}
#wrapper {
  /* background-image: url('https://dam.celuc.de/assets/b6479605-53c9-404e-975c-1db66cbf8cf1'); */
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
#glasspane {
  max-width: 1270px;
  max-height: 645px;
  border-radius: 23px;
  background: rgba(255, 255, 255, 0.3);
  /* padding: 94px; */
}
#progressbar {
  max-width: 666px;
  height: 23px;
  border-radius: 100px;
  border: 1px solid;
  border-color: #333333;
  overflow: hidden;
}
#progress {
  background: #000;
  height: 100%;
  width: 10%;
}
#socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
}
.socials-item {
  display: flex;
  width: 58px;
  height: 58px;
  justify-content: center;
  align-items: center;
  border-radius: 117.647px;
  border: 1.176px solid #000;
  transition: all;
  transition-duration: 300ms;
}
.socials-item:hover {
  cursor: pointer;
  scale: 1.1;
}
.socials-icon {
  width: 31px;
  height: 31px;
  fill: #000;
}
h1 {
  font-family: 'Poppins';
  font-weight: 700;
  font-style: normal;
  line-height: 97.1px;
  @apply text-6xl md:text-[88px];
}
h4 {
  font-size: 24px;
  font-family: 'Poppins';
  font-weight: 600;
  font-style: normal;
  line-height: 34.6px;
}
p {
  font-size: 16.5px;
  font-family: 'Poppins';
  font-weight: 500;
  font-style: normal;
  line-height: 28px;
}
</style>
