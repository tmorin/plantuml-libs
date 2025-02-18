# Vlcmediaplayer


```text
simpleicons-14/V/Vlcmediaplayer
```

```text
include('simpleicons-14/V/Vlcmediaplayer')
```



| Illustration | Vlcmediaplayer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vlcmediaplayer.png) | ![illustration for Vlcmediaplayer](../../simpleicons-14/V/Vlcmediaplayer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VlcmediaplayerXs>`
- `<$VlcmediaplayerSm>`
- `<$VlcmediaplayerMd>`
- `<$VlcmediaplayerLg>`





## Vlcmediaplayer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vlcmediaplayer
include('simpleicons-14/V/Vlcmediaplayer')

' renders the element
Vlcmediaplayer('Vlcmediaplayer', 'Vlcmediaplayer', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vlcmediaplayer
include('simpleicons-14/V/Vlcmediaplayer')

' renders the element
Vlcmediaplayer('Vlcmediaplayer', 'Vlcmediaplayer', 'an optional tech label', 'an optional description')
@enduml
```

