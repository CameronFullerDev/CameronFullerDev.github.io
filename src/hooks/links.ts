export function useLinks() {
  function openUrl(url: string): void {
    window.open(url);
  }

  function openUrlInNewTab(url: string): void {
    window.open(url, "_blank");
  }

  function openMailUrl(email: string): void {
    window.open(`mailto:${email}`);
  }

  return { openUrl, openUrlInNewTab, openMailUrl };
}
