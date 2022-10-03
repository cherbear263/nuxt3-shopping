<template>
  <div>
    <div v-if="!cartStore.isEmpty">

      <Form>
        <div id="steps" class="flex flex-row gap-5 justify-between">
          <h3 class="mb-4  font-bold text-xl font-serif"><span
              class="w-2 h-2 px-2 rounded-full bg-indigo-500 text-md text-white mr-2">1</span>Personal
            Info
          </h3>

        </div>
        <div v-if="step=='personal'">

          <div class="flex flex-row gap-5">
            <FormKit id="first_name" label="First Name" name="first_name" placeholder="First Name"
              v-model="personal.firstName" validation="required" />
            <FormKit id="last_name" label="Last Name" name="last_name" placeholder="Last Name"
              v-model="personal.lastName" validation="required" />
          </div>
          <input id="email" label="email" name="email" placeholder="you@email.com" v-model="personal.email" type="text"
            validation="required|email" />
          <h4 class=" text-indigo-500 font-semibold ml-1 mt-5 mb-2">Billing Address</h4>
          <div id="billing" class="">
            <FormKit id="address" label="address" name="address" v-model="billingAddress.address"
              placeholder="your address" type="text" validation="required" />
            <FormKit id="suburb" label="suburb" name="suburb" v-model="billingAddress.suburb" placeholder="suburb"
              type="text" validation="required" />
            <div class="flex flex-row gap-5">
              <FormKit id="state" label="state" name="state" type="select" v-model="billingAddress.state"
                :options="['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']" />
              <FormKit id="postcode2" label="postcode" name="postcode" placeholder="postcode" type="text"
                v-model="billingAddress.postcode" validation="required|matches:/^[0-9]{4}$/" />
            </div>
          </div>
          <div class="relative mt-3" id="shippingOption">
            <FormKit v-model="shippingSame" label="shipping addess is the same as billing" type="checkbox"
              name="shippingSame" />
          </div>
          <div id="shippingAddress" v-if="!shippingSame">
            <h4 class=" text-indigo-500 font-semibold ml-1 mt-5 mb-2">Shipping Address</h4>
            <FormKit id="address2" label="address" name="address" placeholder="your address" type="text"
              validation="required" v-model="shippingAddress.address" />
            <FormKit id="suburb2" label="suburb" name="suburb" placeholder="suburb" type="text" validation="required"
              v-model="shippingAddress.suburb" />
            <div class="flex flex-row gap-5">
              <FormKit id="state2" label="state" name="state" type="select" v-model="shippingAddress.state"
                :options="['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']" />
              <FormKit id="postcode2" label="postcode" name="postcode" placeholder="postcode" type="text"
                v-model="shippingAddress.postcode" inputmode="numeric" validation="required|matches:/^[0-9]{4}$/" />
            </div>
          </div>
          <div id="paymentDetails" v-if="billingAddress.postcode != ''">
            <h3 class="mt-10 mb-3 text-xl font-serif font-bold"><span
                class="w-2 h-2 px-2 rounded-full bg-indigo-500 text-md text-white mr-2">2</span>Payment Details
            </h3>
            <input id="cardHolder" label="Name of cardholder" name="cardHolder" placeholder="name on card" type="text"
              v-model="paymentDetails.cardHolder" validation="required" />
            <input id="cardNumber" type="text" label="card number" name="cardNumber" inputmode="numeric"
              data-mask="##/##" placeholder="4242 4242 4242 4242" v-model="paymentDetails.cardNumber"
              validation="required" />
            <div class=" flex flex-row gap-5">
              <input id="expiry" label="expiry" name="expiry" type="text" v-model="paymentDetails.expiry"
                validation="required|matches:/^[0-9]{2}/[0-9]{2}$/" data-mask="##/##" />
              <input id="cvc" label="cvc" name="cvc" placeholder="CVC" type="text" v-model="paymentDetails.cvc"
                inputmode="numeric" validation="required|matches: /^[0-9]{3}$/" />
            </div>
          </div>
        </div>
      </form>
      {{shippingSame}}
      {{step}}
      {{personal.firstName}}
      <pre>{{personal}}</pre>
      <pre>{{billingAddress}}</pre>
      <pre>{{paymentDetails}}</pre>


    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>
<script setup>
import { useCartStore } from '~~/store/cart';
const cartStore = useCartStore();

const shippingSame = ref(true)
const step = ref('personal')
const personal = ref({
  firstName: '',
  lastName: '',
  email: '',
})
const billingAddress = ref({
  address: '',
  suburb: '',
  state: 'QLD',
  postcode: ''
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
const submitHandler = async () => {
  console.log('submitted');
}
</script>
<style>
.formkit-input {
  border: solid 2px #ededed;
  border-radius: 5px;
  padding: 5px;
  width: 100%;

}

.formkit-input[type="checkbox"] {
  width: 15px;
  border-radius: 2px;
}

.formkit-input:focus {
  outline: solid 2px #6366f1;
  box-shadow: 2px 2px #c7d2fe;
}

.formkit-message {
  color: #6366f1;
}

.formkit-wrapper label {
  margin-left: 3px;
  font-size: 0.95em;
  font-weight: 500;
}

#shippingOption input {
  position: absolute;
  top: 5px;
}

#shippingOption .formkit-label {
  margin-left: 25px;
}
</style>