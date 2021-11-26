# MapMarked


```text
fontawesome-5/Solid/MapMarked
```

```text
include('fontawesome-5/Solid/MapMarked')
```



| Illustration | MapMarked |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MapMarked.png) | ![illustration for MapMarked](../../fontawesome-5/Solid/MapMarked.Local.png) |




## MapMarked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapMarked
include('fontawesome-5/Solid/MapMarked')

' renders the element
MapMarked('MapMarked', 'Map Marked', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapMarked
include('fontawesome-5/Solid/MapMarked')

' renders the element
MapMarked('MapMarked', 'Map Marked', 'an optional tech label')
@enduml
```

