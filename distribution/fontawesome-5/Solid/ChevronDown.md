# ChevronDown


```text
fontawesome-5/Solid/ChevronDown
```

```text
include('fontawesome-5/Solid/ChevronDown')
```



| Illustration | ChevronDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChevronDown.png) | ![illustration for ChevronDown](../../fontawesome-5/Solid/ChevronDown.Local.png) |




## ChevronDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChevronDown
include('fontawesome-5/Solid/ChevronDown')

' renders the element
ChevronDown('ChevronDown', 'Chevron Down', 'an optional tech label')
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

' loads the Item which embeds the element ChevronDown
include('fontawesome-5/Solid/ChevronDown')

' renders the element
ChevronDown('ChevronDown', 'Chevron Down', 'an optional tech label')
@enduml
```

