const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.chibukasiaexpo.activirecom.dev';
  }

  if (IS_PREVIEW) {
    return 'com.chibukasiaexpo.activirecom.preview';
  }

  return 'com.chibukasiaexpo.activirecom';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'activirecom (Dev)';
  }

  if (IS_PREVIEW) {
    return 'activirecom (Preview)';
  }

  return 'activirecom: Emoji Stickers';
};

export default{
  expo: {
    name: getAppName(),
    slug: "activirecom",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/recom-icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier()
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/recom-icon.png",
        backgroundColor: "#ffffff"
      },
      package: getUniqueIdentifier()
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "3da14ac3-0a59-46ee-8d77-ad9cee2c1c2b"
      }
    },
    owner: "chibukasiaexpo"
  }
}
