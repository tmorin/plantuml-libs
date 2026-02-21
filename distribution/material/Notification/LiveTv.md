# LiveTv


```text
material/Notification/LiveTv
```

```text
include('material/Notification/LiveTv')
```



| Illustration | LiveTv |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/LiveTv.png) | ![illustration for LiveTv](../../material/Notification/LiveTv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiveTvXs>`
- `<$LiveTvSm>`
- `<$LiveTvMd>`
- `<$LiveTvLg>`





## LiveTv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LiveTv
include('material/Notification/LiveTv')

' renders the element
LiveTv('LiveTv', 'Live Tv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LiveTv
include('material/Notification/LiveTv')

' renders the element
LiveTv('LiveTv', 'Live Tv', 'an optional tech label', 'an optional description')
@enduml
```

