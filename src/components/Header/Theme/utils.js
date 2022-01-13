import dark from '/public/css/dark.less';
import light from '/public/css/light.less';

export function changeTheme(isDark){
    localStorage.setItem('isDark', JSON.stringify(isDark));

    const removeNode  = document.getElementById("theme");
    removeNode?.remove();

    // 
    const styleNode = document.createElement("style");
    styleNode.setAttribute('id','theme');
    styleNode.innerHTML = isDark ? dark:light;

    document.head.appendChild(styleNode);
}