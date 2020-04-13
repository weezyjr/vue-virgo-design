<template>
  <button
    @click="$emit('click', $event)"
    class="btn"
    :class="{
      'btn-primary': theme === 'primary',
      'btn-secondry': theme === 'secondry',
      'btn-tertiary': theme === 'tertiary',
      'btn-light': theme === 'light', 
      'btn-dark': theme === 'dark',
      'btn-disabled': disabled,
      'btn-shadow': shadow
    }"
    ref="btn"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VButton extends Vue {
  @Prop() private type = "text";
  @Prop() private disabled = false;
  @Prop() private shadow = false;
  @Prop() private theme:
    | "primary"
    | "secondry"
    | "tertiary"
    | "light"
    | "dark" = "primary";
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  height: 48px;
  font-weight: 400;
  text-align: center;
  user-select: none;
  border: none;
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
  border-radius: 3px;
  -webkit-appearance: button;
  margin: 0;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &-primary {
    background-color: rgb(230, 92, 83);
  }
  &-primary:hover {
    background-color: rgb(236, 134, 128);
  }
  &-primary:active {
    background-color: rgb(224, 50, 38);
  }
  &-secondry {
    background-color: rgb(2, 155, 229);
  }
  &-secondry:hover {
    background-color: rgb(29, 180, 253);
  }
  &-secondry:active {
    background-color: rgb(2, 121, 178);
  }
  &-tertiary {
    background-color: rgb(127, 171, 103);
  }
  &-tertiary:hover {
    background-color: rgb(155, 189, 136);
  }
  &-tertiary:active {
    background-color: rgb(102, 144, 79);
  }
  &-dark {
    background-color: rgb(38, 50, 56);
  }
  &-dark:hover {
    background-color: rgb(59, 77, 86);
  }
  &-dark:active {
    background-color: rgb(17, 23, 26);
  }
  &-light {
    color: rgb(0, 0, 0);
    background-color: rgb(245, 245, 245);
  }
  &-light:hover {
    background-color: rgb(242, 242, 242);
  }
  &-light:active {
    background-color: rgb(230, 230, 230);
  }
  &-disabled {
    background: repeating-linear-gradient(
      -55deg,
      #f5f5f5,
      #f5f5f5 8px,
      #e3e3e3 8px,
      #e3e3e3 16px
    );
    color: rgb(0, 0, 0);
  }
  &-shadow {
    box-shadow: 0px 2px 2px rgba(50, 50, 50, 0.3);
  }
  &-shadow:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
}
</style>