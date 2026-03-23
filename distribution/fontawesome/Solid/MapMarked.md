# MapMarked


```text
fontawesome/Solid/MapMarked
```

```text
include('fontawesome/Solid/MapMarked')
```



| Illustration | MapMarked |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MapMarked.png) | ![illustration for MapMarked](../../fontawesome/Solid/MapMarked.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapMarkedXs>`
- `<$MapMarkedSm>`
- `<$MapMarkedMd>`
- `<$MapMarkedLg>`





## MapMarked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapMarked
include('fontawesome/Solid/MapMarked')

' renders the element
MapMarked('MapMarked', 'Map Marked', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MapMarked
include('fontawesome/Solid/MapMarked')

' renders the element
MapMarked('MapMarked', 'Map Marked', 'an optional tech label', 'an optional description')
@enduml
```

