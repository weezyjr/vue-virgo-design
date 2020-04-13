import VButton from '../src/components/VButton.vue';


export default {
  title: 'Button',
  component: VButton,
};

export const Button = () => ({
  components: { VButton },
  template:
    `<div style="max-width: 320px">
      <v-button> Primary </v-button>
    </div>`,

});