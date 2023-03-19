# Timelapse


```text
material-4/Image/Timelapse
```

```text
include('material-4/Image/Timelapse')
```



| Illustration | Timelapse |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Timelapse.png) | ![illustration for Timelapse](../../material-4/Image/Timelapse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TimelapseXs>`
- `<$TimelapseSm>`
- `<$TimelapseMd>`
- `<$TimelapseLg>`





## Timelapse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Timelapse
include('material-4/Image/Timelapse')

' renders the element
Timelapse('Timelapse', 'Timelapse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Timelapse
include('material-4/Image/Timelapse')

' renders the element
Timelapse('Timelapse', 'Timelapse', 'an optional tech label', 'an optional description')
@enduml
```

