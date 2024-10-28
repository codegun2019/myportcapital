<template>
  <div class="bg-[#080808]  text-white md:py-16 py-5 md:px-16 px-5 items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">
        {{ $t("Package.Header_welcome_title") }}<span class="text-primary-500">{{ $t("Package.Header_welcome_subttile") }}</span>
      </h1>
      <!-- คำอธิบาย -->
      <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        {{ $t("Package.Header_welcome_description") }}
      </p>
    </div>
    <div class="container mx-auto py-8 lg:w-2/4 w-100 table-withdraw mb-10">
      <div class="overflow-x-auto withdrawal-scroll-block accordion-table">
        <table class="table-auto w-full text-left text-white w-full flex-no-wrap rounded-lg overflow-hidden my-5">
          <thead>
            <tr class="hidden lg-block border-b border-[#3e3f3f]  flex flex-col flex-no wrap md:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="py-3 px-6">{{ $t("text.Channel") }}</th>
              <th class="py-3 px-6">{{ $t("text.Minimum_Deposit") }}</th>
              <th class="py-3 px-6">{{ $t("text.Minimum_Withdrawal") }}</th>
              <th class="py-3 px-6">{{ $t("text.Maximum_Withdrawal") }}</th>
              <th class="py-3 px-6">{{ $t("text.Processing_Time") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="section1_1" alt="bronze" class="w-20 h-20 mr-2">
                Qr Code
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">{{ $t("text.Instant") }}</td>
            </tr>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="section1_2" alt="silver" class="w-20 h-20 mr-2">
                Online Banking
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">{{ $t("text.Instant") }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="container mx-auto py-8 lg:w-2/4 w-100 table-withdraw mb-10">
      <div class="overflow-x-auto withdrawal-scroll-block accordion-table">
        <table class="table-auto w-full text-left text-white w-full flex-no-wrap rounded-lg overflow-hidden my-5">
          <thead>
            <tr class="hidden lg-block border-b border-[#3e3f3f]  flex flex-col flex-no wrap md:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="py-3 px-6">{{ $t("text.Channel") }}</th>
              <th class="py-3 px-6">{{ $t("text.Minimum_Deposit") }}</th>
              <th class="py-3 px-6">{{ $t("text.Minimum_Withdrawal") }}</th>
              <th class="py-3 px-6">{{ $t("text.Maximum_Withdrawal") }}</th>
              <th class="py-3 px-6">{{ $t("text.Processing_Time") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="section1_3" alt="bronze" class="w-20 h-20 mr-2">
                Qr Code
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="section1_4" alt="silver" class="w-20 h-20 mr-2">
                Online Banking
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="section1_4" alt="silver" class="w-20 h-20 mr-2">
                Online Banking
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </template>

  <script setup>
  import IconDeposit from '~/assets/flags/cfds.svg'

  import section1_1 from '~/assets/images/deposit/section1/01_icon_QR.svg'
  import section1_2 from '~/assets/images/deposit/section1/02_iocn_bank.svg'
  import section1_3 from '~/assets/images/deposit/section1/03_icon_QR.svg'
  import section1_4 from '~/assets/images/deposit/section1/04_icon_bank.svg'
  import section1_5 from '~/assets/images/deposit/section1/05_icon_bank.svg'
  </script>

  <style scoped>
  .table-withdraw {
    background: linear-gradient(#333, #212121);
    border-radius: 2.5rem;
  }
  </style>