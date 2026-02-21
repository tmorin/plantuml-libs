# Android


```text
material/Action/Android
```

```text
include('material/Action/Android')
```



| Illustration | Android |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Android.png) | ![illustration for Android](../../material/Action/Android.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AndroidXs>`
- `<$AndroidSm>`
- `<$AndroidMd>`
- `<$AndroidLg>`





## Android

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Android
include('material/Action/Android')

' renders the element
Android('Android', 'Android', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Android
include('material/Action/Android')

' renders the element
Android('Android', 'Android', 'an optional tech label', 'an optional description')
@enduml
```

