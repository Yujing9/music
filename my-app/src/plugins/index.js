import { Swipe,Button, SwipeItem } from 'vant';

let plugins = [Swipe,Button, SwipeItem]

export default function getVants(app){
    plugins.forEach(item=>{
        return app.use(item)
    }
    )
}