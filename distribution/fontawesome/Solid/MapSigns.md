# MapSigns


```text
fontawesome/Solid/MapSigns
```

```text
include('fontawesome/Solid/MapSigns')
```



| Illustration | MapSigns |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MapSigns.png) | ![illustration for MapSigns](../../fontawesome/Solid/MapSigns.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapSignsXs>`
- `<$MapSignsSm>`
- `<$MapSignsMd>`
- `<$MapSignsLg>`





## MapSigns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapSigns
include('fontawesome/Solid/MapSigns')

' renders the element
MapSigns('MapSigns', 'Map Signs', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapSigns
include('fontawesome/Solid/MapSigns')

' renders the element
MapSigns('MapSigns', 'Map Signs', 'an optional tech label', 'an optional description')
@enduml
```

