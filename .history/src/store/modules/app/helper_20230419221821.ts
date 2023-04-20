export type Theme = "light" | "dark";
export type Language = "zh-CN" | "zh-TW" | "en-US";
export interface AppState {
  siderCollapsed: boolean;
  theme: Theme;
  language: Language;
}
export function defaultSetting(): AppState {
  return { siderCollapsed: false, theme: "light", language: "zh-CN" };
}
export function getLocalSetting(): AppState {
  const localSetting: AppState | undefined = ss.get(LOCAL_NAME);
  return { ...defaultSetting(), ...localSetting };
}
