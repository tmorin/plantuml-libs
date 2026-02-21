# DirectionsTransit


```text
material/Maps/DirectionsTransit
```

```text
include('material/Maps/DirectionsTransit')
```



| Illustration | DirectionsTransit |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/DirectionsTransit.png) | ![illustration for DirectionsTransit](../../material/Maps/DirectionsTransit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirectionsTransitXs>`
- `<$DirectionsTransitSm>`
- `<$DirectionsTransitMd>`
- `<$DirectionsTransitLg>`





## DirectionsTransit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DirectionsTransit
include('material/Maps/DirectionsTransit')

' renders the element
DirectionsTransit('DirectionsTransit', 'Directions Transit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DirectionsTransit
include('material/Maps/DirectionsTransit')

' renders the element
DirectionsTransit('DirectionsTransit', 'Directions Transit', 'an optional tech label', 'an optional description')
@enduml
```

