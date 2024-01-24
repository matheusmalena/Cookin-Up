import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';
import IngredienteSelecionavel from './IngredienteSelecionavel.vue'
import Tag from './Tag.vue';

export default (await import('vue')).defineComponent({
    props: {
        categoria: { type: Object as PropType<ICategoria>, required: true }
    },
    components: { Tag, IngredienteSelecionavel }
});
