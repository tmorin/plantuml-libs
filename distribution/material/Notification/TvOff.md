# TvOff


```text
material/Notification/TvOff
```

```text
include('material/Notification/TvOff')
```



| Illustration | TvOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/TvOff.png) | ![illustration for TvOff](../../material/Notification/TvOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TvOffXs>`
- `<$TvOffSm>`
- `<$TvOffMd>`
- `<$TvOffLg>`





## TvOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TvOff
include('material/Notification/TvOff')

' renders the element
TvOff('TvOff', 'Tv Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TvOff
include('material/Notification/TvOff')

' renders the element
TvOff('TvOff', 'Tv Off', 'an optional tech label', 'an optional description')
@enduml
```

