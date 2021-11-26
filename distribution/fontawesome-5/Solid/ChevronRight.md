# ChevronRight


```text
fontawesome-5/Solid/ChevronRight
```

```text
include('fontawesome-5/Solid/ChevronRight')
```



| Illustration | ChevronRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChevronRight.png) | ![illustration for ChevronRight](../../fontawesome-5/Solid/ChevronRight.Local.png) |




## ChevronRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChevronRight
include('fontawesome-5/Solid/ChevronRight')

' renders the element
ChevronRight('ChevronRight', 'Chevron Right', 'an optional tech label')
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

' loads the Item which embeds the element ChevronRight
include('fontawesome-5/Solid/ChevronRight')

' renders the element
ChevronRight('ChevronRight', 'Chevron Right', 'an optional tech label')
@enduml
```

