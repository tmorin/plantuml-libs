# MapPin


```text
fontawesome-5/Solid/MapPin
```

```text
include('fontawesome-5/Solid/MapPin')
```



| Illustration | MapPin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MapPin.png) | ![illustration for MapPin](../../fontawesome-5/Solid/MapPin.Local.png) |




## MapPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapPin
include('fontawesome-5/Solid/MapPin')

' renders the element
MapPin('MapPin', 'Map Pin', 'an optional tech label')
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

' loads the Item which embeds the element MapPin
include('fontawesome-5/Solid/MapPin')

' renders the element
MapPin('MapPin', 'Map Pin', 'an optional tech label')
@enduml
```

