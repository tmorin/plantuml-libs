# MapMarkedAlt


```text
fontawesome/Solid/MapMarkedAlt
```

```text
include('fontawesome/Solid/MapMarkedAlt')
```



| Illustration | MapMarkedAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MapMarkedAlt.png) | ![illustration for MapMarkedAlt](../../fontawesome/Solid/MapMarkedAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapMarkedAltXs>`
- `<$MapMarkedAltSm>`
- `<$MapMarkedAltMd>`
- `<$MapMarkedAltLg>`





## MapMarkedAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapMarkedAlt
include('fontawesome/Solid/MapMarkedAlt')

' renders the element
MapMarkedAlt('MapMarkedAlt', 'Map Marked Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MapMarkedAlt
include('fontawesome/Solid/MapMarkedAlt')

' renders the element
MapMarkedAlt('MapMarkedAlt', 'Map Marked Alt', 'an optional tech label', 'an optional description')
@enduml
```

