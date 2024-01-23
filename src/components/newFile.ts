import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';

export default (await import('vue')).defineComponent({
props: {
categoria: { type: Object as PropType<ICategoria>, required: true }
},
components: { TagVue, IngredienteSelecionavelVue }
});
