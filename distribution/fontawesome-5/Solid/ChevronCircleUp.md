# ChevronCircleUp


```text
fontawesome-5/Solid/ChevronCircleUp
```

```text
include('fontawesome-5/Solid/ChevronCircleUp')
```



| Illustration | ChevronCircleUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChevronCircleUp.png) | ![illustration for ChevronCircleUp](../../fontawesome-5/Solid/ChevronCircleUp.Local.png) |




## ChevronCircleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChevronCircleUp
include('fontawesome-5/Solid/ChevronCircleUp')

' renders the element
ChevronCircleUp('ChevronCircleUp', 'Chevron Circle Up', 'an optional tech label')
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

' loads the Item which embeds the element ChevronCircleUp
include('fontawesome-5/Solid/ChevronCircleUp')

' renders the element
ChevronCircleUp('ChevronCircleUp', 'Chevron Circle Up', 'an optional tech label')
@enduml
```

