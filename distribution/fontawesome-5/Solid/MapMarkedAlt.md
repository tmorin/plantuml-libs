# MapMarkedAlt


```text
fontawesome-5/Solid/MapMarkedAlt
```

```text
include('fontawesome-5/Solid/MapMarkedAlt')
```



| Illustration | MapMarkedAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MapMarkedAlt.png) | ![illustration for MapMarkedAlt](../../fontawesome-5/Solid/MapMarkedAlt.Local.png) |




## MapMarkedAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapMarkedAlt
include('fontawesome-5/Solid/MapMarkedAlt')

' renders the element
MapMarkedAlt('MapMarkedAlt', 'Map Marked Alt', 'an optional tech label')
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

' loads the Item which embeds the element MapMarkedAlt
include('fontawesome-5/Solid/MapMarkedAlt')

' renders the element
MapMarkedAlt('MapMarkedAlt', 'Map Marked Alt', 'an optional tech label')
@enduml
```

