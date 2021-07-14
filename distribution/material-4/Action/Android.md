# Android


```text
material-4/Action/Android
```

```text
include('material-4/Action/Android')
```



| Illustration | Android |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Android.png) | ![illustration for Android](../../material-4/Action/Android.Local.png) |




## Android

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Android
include('material-4/Action/Android')

' renders the element
Android('Android', 'Android', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Android
include('material-4/Action/Android')

' renders the element
Android('Android', 'Android', 'an optional tech label')
@enduml
```

