# DirectionsRun


```text
material/Maps/DirectionsRun
```

```text
include('material/Maps/DirectionsRun')
```



| Illustration | DirectionsRun |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/DirectionsRun.png) | ![illustration for DirectionsRun](../../material/Maps/DirectionsRun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirectionsRunXs>`
- `<$DirectionsRunSm>`
- `<$DirectionsRunMd>`
- `<$DirectionsRunLg>`





## DirectionsRun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DirectionsRun
include('material/Maps/DirectionsRun')

' renders the element
DirectionsRun('DirectionsRun', 'Directions Run', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DirectionsRun
include('material/Maps/DirectionsRun')

' renders the element
DirectionsRun('DirectionsRun', 'Directions Run', 'an optional tech label', 'an optional description')
@enduml
```

