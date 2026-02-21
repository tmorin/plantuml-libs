# TapAndPlay


```text
material/Notification/TapAndPlay
```

```text
include('material/Notification/TapAndPlay')
```



| Illustration | TapAndPlay |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/TapAndPlay.png) | ![illustration for TapAndPlay](../../material/Notification/TapAndPlay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TapAndPlayXs>`
- `<$TapAndPlaySm>`
- `<$TapAndPlayMd>`
- `<$TapAndPlayLg>`





## TapAndPlay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TapAndPlay
include('material/Notification/TapAndPlay')

' renders the element
TapAndPlay('TapAndPlay', 'Tap And Play', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TapAndPlay
include('material/Notification/TapAndPlay')

' renders the element
TapAndPlay('TapAndPlay', 'Tap And Play', 'an optional tech label', 'an optional description')
@enduml
```

