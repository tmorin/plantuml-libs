# ChevronUp


```text
fontawesome-6/Solid/ChevronUp
```

```text
include('fontawesome-6/Solid/ChevronUp')
```



| Illustration | ChevronUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChevronUp.png) | ![illustration for ChevronUp](../../fontawesome-6/Solid/ChevronUp.Local.png) |




## ChevronUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChevronUp
include('fontawesome-6/Solid/ChevronUp')

' renders the element
ChevronUp('ChevronUp', 'Chevron Up', 'an optional tech label')
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

' loads the Item which embeds the element ChevronUp
include('fontawesome-6/Solid/ChevronUp')

' renders the element
ChevronUp('ChevronUp', 'Chevron Up', 'an optional tech label')
@enduml
```

