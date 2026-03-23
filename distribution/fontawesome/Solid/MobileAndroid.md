# MobileAndroid


```text
fontawesome/Solid/MobileAndroid
```

```text
include('fontawesome/Solid/MobileAndroid')
```



| Illustration | MobileAndroid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MobileAndroid.png) | ![illustration for MobileAndroid](../../fontawesome/Solid/MobileAndroid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileAndroidXs>`
- `<$MobileAndroidSm>`
- `<$MobileAndroidMd>`
- `<$MobileAndroidLg>`





## MobileAndroid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobileAndroid
include('fontawesome/Solid/MobileAndroid')

' renders the element
MobileAndroid('MobileAndroid', 'Mobile Android', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobileAndroid
include('fontawesome/Solid/MobileAndroid')

' renders the element
MobileAndroid('MobileAndroid', 'Mobile Android', 'an optional tech label', 'an optional description')
@enduml
```

