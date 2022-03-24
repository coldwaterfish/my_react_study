export function deBounce(func: (...args: any[]) => void, wait: number) {
  let timeOut: any = null;
  return function (...args: any[]) {
    clearTimeout(timeOut); //一定要清除定时器
    timeOut = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
