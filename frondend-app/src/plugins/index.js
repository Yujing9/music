import { Button } from "vant";
import { Swipe, SwipeItem } from "vant";
// 嵌入数组中
let plugins = [Button, Swipe, SwipeItem];

export function getVantPlugins(app) {
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}
