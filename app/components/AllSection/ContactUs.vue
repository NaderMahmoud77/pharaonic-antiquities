<template>
  <section class="mb-14">
    <div class="container mx-auto px-4">
      <div
        v-gsap.entrance.slide-left.stagger="{
          duration: 1.5,
          stagger: 0.6,
        }"
      >
        <!-- Title -->
        <h2
          class="text-4xl font-bold text-center mb-3 text-primaryTwo dark:text-secondary"
        >
          {{ $t("section_contactUs.title") }}
        </h2>
        <p
          class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14"
        >
          {{ $t("section_contactUs.subtitle") }}
        </p>
      </div>

      <!-- ============= Contact Us ============= -->
      <div
        class="p-8! grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl shadow-sm dark:shadow-gray-300/20"
      >
        <!-- -------- Text -------- -->
        <div
          v-gsap.entrance.slide-right.stagger="{
            duration: 1.5,
            stagger: 0.6,
          }"
        >
          <h1
            class="text-primaryTwo dark:text-secondary font-semibold text-sm sm:text-3xl"
          >
            {{ $t("section_contactUs.content.title") }}
          </h1>
          <p
            class="my-4 text-sm sm:text-lg text-textmain dark:text-textsecondary"
          >
            {{ $t("section_contactUs.content.description") }}
          </p>

          <div class="flex flex-col gap-3">
            <!-- Location -->
            <div class="flex items-center gap-2">
              <v-icon
                icon="mdi-map-marker-outline"
                class="text-primaryTwo! dark:text-secondary!"
              />
              <p class="text-gray-400 sm:text-lg">
                {{ $t("section_contactUs.content.location") }}
              </p>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-2">
              <v-icon
                icon="mdi-email-outline"
                class="text-primaryTwo! dark:text-secondary!"
              />
              <p class="text-gray-400 sm:text-lg">pharaonic@antiquities.com</p>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-2">
              <v-icon
                icon="mdi-phone-outline"
                class="text-primaryTwo! dark:text-secondary!"
              />
              <p class="text-gray-400 sm:text-lg" dir="ltr">+20 1069208821</p>
            </div>
          </div>
        </div>
        <!-- -------- Inpots -------- -->
        <ClientOnly>
          <div
            class="text-primaryTwo! dark:text-textsecondary! bg-textsecondary dark:bg-[#ffffff1a] p-6! rounded-bl-4xl! rounded-tr-4xl!"
            v-gsap.entrance.slide-left.stagger="{
              duration: 1.5,
              stagger: 0.6,
            }"
          >
            <div class="flex gap-2">
              <v-text-field
                :label="$t('section_contactUs.content.name')"
              ></v-text-field>
              <v-text-field
                :label="$t('section_contactUs.content.email')"
                placeholder="johndoe@gmail.com"
                type="email"
              ></v-text-field>
            </div>
            <v-text-field
              :label="$t('section_contactUs.content.topic')"
            ></v-text-field>
            <v-textarea
              :label="$t('section_contactUs.content.mass')"
            ></v-textarea>
            <!-- Btn send -->
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>{{ $t("section_contactUs.content.send") }}</span>
            </button>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<!-- ------ style ------- -->
<style scoped>
button {
  font-family: inherit;
  font-size: 18px;
  background: linear-gradient(
    to bottom,
    var(--color-secondary) 0%,
    var(--color-primary) 100%
  );
  color: white;
  padding: 0.8em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: scale(0.95);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

button span {
  display: block;
  margin-left: 0.4em;
  transition: all 0.3s;
}

button svg {
  width: 18px;
  height: 18px;
  fill: white;
  transition: all 0.3s;
}

button .svg-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 0.5em;
  transition: all 0.3s;
}

button:hover .svg-wrapper {
  background-color: rgba(255, 255, 255, 0.5);
}

button:hover svg {
  transform: rotate(45deg);
}
</style>
