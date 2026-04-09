<script setup lang="ts">
import PersonalDataForm from "~/components/onboarding/PersonalDataForm.vue";
import Card from "~/components/ui/card/Card.vue";
import CardContent from "~/components/ui/card/CardContent.vue";
import CardHeader from "~/components/ui/card/CardHeader.vue";
import CardTitle from "~/components/ui/card/CardTitle.vue";

definePageMeta({
  layout: "onboarding",
});
</script>

<template>
  <Card class="px-16 py-10">
    <CardHeader class="justify-center mb-8">
      <CardTitle class="font-bold text-2xl text-[#192232]"
        >Completa tus datos</CardTitle
      >
    </CardHeader>
    <CardContent>
      <PersonalDataForm />
    </CardContent>
  </Card>
</template>
