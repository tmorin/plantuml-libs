# SuitcaseRolling


```text
fontawesome-5/Solid/SuitcaseRolling
```

```text
include('fontawesome-5/Solid/SuitcaseRolling')
```



| Illustration | SuitcaseRolling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SuitcaseRolling.png) | ![illustration for SuitcaseRolling](../../fontawesome-5/Solid/SuitcaseRolling.Local.png) |




## SuitcaseRolling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SuitcaseRolling
include('fontawesome-5/Solid/SuitcaseRolling')

' renders the element
SuitcaseRolling('SuitcaseRolling', 'Suitcase Rolling', 'an optional tech label')
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

' loads the Item which embeds the element SuitcaseRolling
include('fontawesome-5/Solid/SuitcaseRolling')

' renders the element
SuitcaseRolling('SuitcaseRolling', 'Suitcase Rolling', 'an optional tech label')
@enduml
```

