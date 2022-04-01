# PlaneLock


```text
fontawesome-6/Solid/PlaneLock
```

```text
include('fontawesome-6/Solid/PlaneLock')
```



| Illustration | PlaneLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlaneLock.png) | ![illustration for PlaneLock](../../fontawesome-6/Solid/PlaneLock.Local.png) |




## PlaneLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlaneLock
include('fontawesome-6/Solid/PlaneLock')

' renders the element
PlaneLock('PlaneLock', 'Plane Lock', 'an optional tech label')
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

' loads the Item which embeds the element PlaneLock
include('fontawesome-6/Solid/PlaneLock')

' renders the element
PlaneLock('PlaneLock', 'Plane Lock', 'an optional tech label')
@enduml
```

