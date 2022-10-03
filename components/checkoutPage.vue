<template>

  <div class="p-2">
    <div v-if="!cartStore.isEmpty" class="-mt-5">
      <p>You've got great taste! After filling in a few details and completing the payment, your awesome items will be
        on their way to you!</p>
      <form name="cartForm" @submit.prevent="handleSubmit">
        <div v-show="step==steps[0]" class="flex flex-col max-w-full ">
          <h2 class="mt-4 mb-5 font-semibold font-serif"><span
              class="w-4 h-4 text-xs px-3 py-2 rounded-full text-white bg-indigo-500 mr-3">1</span>Personal
            Details</h2>
          <div class="flex flex-row gap-3 justify-evenly">
            <div class="flex-grow">
              <label class="block ml-1" for="firstName">First Name</label>
              <input class="p-2" id="firstName" name="firstName" v-model="personal.firstName" placeholder="First Name"
                required />
            </div>
            <div class="">
              <label class="block ml-1" for="lastName">Last Name</label>
              <input class="p-2" id="lastName" name="lastName" v-model="personal.lastName" placeholder="Last Name"
                required />
            </div>
          </div>
          <div class="mt-3 -ml-3">
            <label class="block ml-4" for="email">Email</label>
            <input class="p-2 w-[102%] sm:w-[98%] ml-3" type="email" id="email" name="email" v-model="personal.email"
              placeholder="email" required />
          </div>
          <div id="billing">
            <div class="mt-5 -ml-3">
              <label class="block ml-4" for="billingAddress">Billing Address</label>
              <input class="p-2 w-[102%] sm:w-[98%] ml-3" type="text" id="billingAddress" name="billingAddress"
                v-model="billingAddress.address" placeholder="address" required />
            </div>
            <div class="flex flex-row gap-3 mt-3">
              <div>
                <label class="block ml-1" for="billingSuburb">Suburb</label>
                <input class="p-2" id="billingSuburb" name="billingSuburb" v-model="billingAddress.suburb"
                  placeholder="Suburb" required />
              </div>
              <div class="">
                <label class="block ml-1" for="billingState">State</label>
                <select class="p-2" id="billingState" name="billingState" v-model="billingAddress.state"
                  placeholder="State" required>
                  <option value="ACT">ACT</option>
                  <option value="NSW">NSW</option>
                  <option value="NT">NT</option>
                  <option value="QLD">QLD</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="VIC">VIC</option>
                  <option value="WA">WA</option>
                </select>
              </div>
              <div class="">
                <label class="block ml-1" for="billingPostcode">Postcode</label>
                <input class="p-2 w-[100px]" id="billingPostcode" name="billingPostcode"
                  v-model="billingAddress.postcode" placeholder="postcode" required />
              </div>
            </div>
            <div class="relative my-5">
              <label class="ml-6" for="shippingSame">Billing and shipping addresses are the same</label>
              <input class="absolute top-2 left-0" v-model="billingAddress.shippingSame" type="checkbox"
                name="shippingSame" id="shippingSame" />
            </div>
          </div>
          <div id="shipping" v-if="!billingAddress.shippingSame">
            <div class="mt-5 -ml-3">
              <label class="block ml-4" for="billingAddress">Shipping Address</label>
              <input class="p-2 w-[102%] sm:w-[98%] ml-3" type="text" id="shippingAddress" name="shippingAddress"
                v-model="shippingAddress.address" placeholder="address" required />
            </div>
            <div class="flex flex-row gap-3 mt-3">
              <div>
                <label class="block ml-1" for="shippingSuburb">Suburb</label>
                <input class="p-2" id="shippingSuburb" name="shippingSuburb" v-model="shippingAddress.suburb"
                  placeholder="Suburb" required />
              </div>
              <div class="">
                <label class="block ml-1" for="shippingState">State</label>
                <select class="p-2" id="shippingState" name="shippingState" v-model="shippingAddress.state"
                  placeholder="State" required>
                  <option value="ACT">ACT</option>
                  <option value="NSW">NSW</option>
                  <option value="NT">NT</option>
                  <option value="QLD">QLD</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="VIC">VIC</option>
                  <option value="WA">WA</option>
                </select>
              </div>
              <div class="">
                <label class="block ml-1" for="shippingPostcode">Postcode</label>
                <input class="p-2 w-[100px]" id="shippingPostcode" name="shippingPostcode"
                  v-model="shippingAddress.postcode" placeholder="postcode" required />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col max-w-full ">
          <h2 class="mt-7 mb-5 font-semibold font-serif"><span
              class="w-4 h-4 text-xs px-3 py-2 rounded-full text-white bg-indigo-500 mr-3">2</span>Payment Details</h2>
        </div>
        <div id="paymentDetails" class="flex flex-row gap-2">
          <div class="mt-3 -ml-3 flex-grow relative">
            <label class="block ml-4" for="ccNum">Credit Card Number</label>
            <input class="p-2 w-[102%] sm:w-[98%] ml-3 pl-9" type="text" inputmode="numeric" id="ccNum"
              name="cardNumber" v-model="paymentDetails.cardNumber" placeholder="card number" required /><span
              class="absolute top-9 left-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </span>
          </div>
          <div class="mt-3 w-[100px]">
            <label class="block ml-4" for="expiry">Expiry Date</label>
            <input class="p-2 w-[102%] sm:w-[98%] ml-3" type="text" id="expiry" name="expiry"
              v-model="paymentDetails.expiry" placeholder="MM/YY" required />
          </div>
          <div class="mt-3 w-[70px]">
            <label class="block ml-4" for="CVC">CVC</label>
            <input class="p-2 w-[102%] sm:w-[98%] ml-3" type="text" inputmode="numeric" id="CVC" name="CVC"
              v-model="paymentDetails.cvc" placeholder="CVC" required />
          </div>
        </div>
        <div v-if="messages.length">
          <ul v-for="message in messages" :key="message">
            <li class="disc text-red-600">{{message}}</li>
          </ul>
        </div>
        <div id="address">

        </div>
        <div id="cartTotal" class="w-[90%] mx-auto bg-indigo-100 rounded p-5 mt-10">
          <h3 class="text-indigo-500 font-semibold text-md font-serif">Items you are purchasing</h3>
          <div class="flex flex-col mb-3">
            <div class="flex flex-row justify-between " v-for="item in cartStore.items" :key="item.uuid">
              <p class="align-left">{{item.amount}} x {{item.name}}</p>
              <p>${{item.price}}</p>
            </div>
            <div class="flex flex-row justify-between mb-3">
              <p>Shipping to {{billingAddress.shippingSame? billingAddress.suburb : shippingAddress.suburb}}</p>
              <p>${{cartStore.shipping}}</p>
            </div>
            <div class="flex flex-row justify-between font-bold border-t border-gray-300 pt-2">
              <p>Total</p>
              <p>${{cartStore.total}}</p>
            </div>
          </div>

        </div>

        <input type="submit"
          class="mt-10 w-full py-5 px-3 bg-indigo-500 hover:bg-indigo-600 cursor-pointer rounded-sm text-white"
          :value="`Pay $${cartStore.total}`" />
      </form>

    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>
<script setup>
import { useCartStore } from '~~/store/cart';
import { useSidebarStore } from '~~/store/sidebar';
const sidebarStore = useSidebarStore();
const cartStore = useCartStore();
const steps = ['personal', 'payment']
let step = ref(steps[0])

const messages = []

const personal = ref({
  firstName: '',
  lastName: '',
  email: '',
})
const billingAddress = ref({
  address: '',
  suburb: '',
  state: 'QLD',
  postcode: '',
  shippingSame: true
})
const shippingAddress = ref({
  address: '',
  suburb: '',
  state: 'QLD',
  postcode: ''
})
const paymentDetails = ref({
  cardHolder: '',
  cardNumber: '',
  expiry: '',
  cvc: ''

})
const handleSubmit = () => {
  console.log('submitted. Clearing cart.')
  cartStore.$reset()
  sidebarStore.setPage('thanks')

}
</script>
<style scoped>
input,
select {
  border: #cecece 2px solid;
  border-radius: 10px;

}

input:focus,
select:focus {
  outline: solid 2px #6366f1;
  box-shadow: 2px 2px #c7d2fe;
}

label {
  color: #424242;
  display: block;
}
</style>