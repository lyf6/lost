import BaseNodePresenter from '../../BaseNodePresenter'

import VisualOutputStartModel from './VisualOutputStartModel'
import VisualOutputStartView from './VisualOutputStartView'


export default class VisualOutputStartPresenter extends BaseNodePresenter {
    constructor(graph, data, mode){
		const model = new VisualOutputStartModel(data, mode)
		const view = new VisualOutputStartView(model) 
        super({ graph, model, view })
    }
    /**
     * @override
     */
    initViewBinding(){}
    /**
     * @override
     */
    initModelBinding(){}
}