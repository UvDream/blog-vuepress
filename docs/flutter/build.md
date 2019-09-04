# 打包
## 一.修改app名称和图标
项目根目录`/android/app/src/main/AndroidManifest.xml`
```java
android:label="flutter_app"   //配置APP的名称，支持中文
android:icon="@mipmap/ic_launcher" //APP图标的文件名称
```


## 二.生成 keystore
```
keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```

这句话肯定运行不起来的,报错寻找不到路径,解决办法如下:
```
flutter doctor -v
```


复制图片中标注的`java binary`位置

```
/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home/bin/keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```




接下来就是key找不到,需要把key地址填在`~/key.jks`之前
```
/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home/bin/keytool -genkey -v -keystore /key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
```


## 三.配置key
1.进入项目目录的/android/app/build.gradle文件，在android{这一行前面,加入如下代码：
```
def keystorePropertiesFile = rootProject.file("key.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
```

把如下代码替换
```java
buildTypes {
    release {
        signingConfig signingConfigs.debug
    }
}
```

替换成:
```java
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile file(keystoreProperties['storeFile'])
        storePassword keystoreProperties['storePassword']
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
```


四.创建文件
项目目录下的`android`文件夹下，创建一个名为`key.properties`的文件，并打开粘贴下面的代码。
```
storePassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥库 密码
keyPassword=<password from previous step>    //输入上一步创建KEY时输入的 密钥 密码
keyAlias=key
storeFile=<E:/key.jks>    //key.jks的存放路径
```
eg:
```
storePassword=123123
keyPassword=123123
keyAlias=key
storeFile=D:/key.jks
```

五.打包
```
flutter build apk
```

 <Vssue title="flutter-build" />
