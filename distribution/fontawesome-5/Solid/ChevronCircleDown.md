# ChevronCircleDown


```text
fontawesome-5/Solid/ChevronCircleDown
```

```text
include('fontawesome-5/Solid/ChevronCircleDown')
```



| Illustration | ChevronCircleDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChevronCircleDown.png) | ![illustration for ChevronCircleDown](../../fontawesome-5/Solid/ChevronCircleDown.Local.png) |




## ChevronCircleDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChevronCircleDown
include('fontawesome-5/Solid/ChevronCircleDown')

' renders the element
ChevronCircleDown('ChevronCircleDown', 'Chevron Circle Down', 'an optional tech label')
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

' loads the Item which embeds the element ChevronCircleDown
include('fontawesome-5/Solid/ChevronCircleDown')

' renders the element
ChevronCircleDown('ChevronCircleDown', 'Chevron Circle Down', 'an optional tech label')
@enduml
```

