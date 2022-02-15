# BusSimple


```text
fontawesome-6/Solid/BusSimple
```

```text
include('fontawesome-6/Solid/BusSimple')
```



| Illustration | BusSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BusSimple.png) | ![illustration for BusSimple](../../fontawesome-6/Solid/BusSimple.Local.png) |




## BusSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BusSimple
include('fontawesome-6/Solid/BusSimple')

' renders the element
BusSimple('BusSimple', 'Bus Simple', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BusSimple
include('fontawesome-6/Solid/BusSimple')

' renders the element
BusSimple('BusSimple', 'Bus Simple', 'an optional tech label')
@enduml
```

