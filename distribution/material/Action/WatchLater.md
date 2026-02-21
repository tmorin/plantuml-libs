# WatchLater


```text
material/Action/WatchLater
```

```text
include('material/Action/WatchLater')
```



| Illustration | WatchLater |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/WatchLater.png) | ![illustration for WatchLater](../../material/Action/WatchLater.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WatchLaterXs>`
- `<$WatchLaterSm>`
- `<$WatchLaterMd>`
- `<$WatchLaterLg>`





## WatchLater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WatchLater
include('material/Action/WatchLater')

' renders the element
WatchLater('WatchLater', 'Watch Later', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WatchLater
include('material/Action/WatchLater')

' renders the element
WatchLater('WatchLater', 'Watch Later', 'an optional tech label', 'an optional description')
@enduml
```

