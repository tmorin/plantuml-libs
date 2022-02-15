# Vlcmediaplayer


```text
simpleicons-6/V/Vlcmediaplayer
```

```text
include('simpleicons-6/V/Vlcmediaplayer')
```



| Illustration | Vlcmediaplayer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vlcmediaplayer.png) | ![illustration for Vlcmediaplayer](../../simpleicons-6/V/Vlcmediaplayer.Local.png) |




## Vlcmediaplayer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vlcmediaplayer
include('simpleicons-6/V/Vlcmediaplayer')

' renders the element
Vlcmediaplayer('Vlcmediaplayer', 'Vlcmediaplayer', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vlcmediaplayer
include('simpleicons-6/V/Vlcmediaplayer')

' renders the element
Vlcmediaplayer('Vlcmediaplayer', 'Vlcmediaplayer', 'an optional tech label')
@enduml
```

