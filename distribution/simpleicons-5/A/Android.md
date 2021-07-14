# Android


```text
simpleicons-5/A/Android
```

```text
include('simpleicons-5/A/Android')
```



| Illustration | Android |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Android.png) | ![illustration for Android](../../simpleicons-5/A/Android.Local.png) |




## Android

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Android
include('simpleicons-5/A/Android')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Android
include('simpleicons-5/A/Android')

' renders the element
Android('Android', 'Android', 'an optional tech label')
@enduml
```

