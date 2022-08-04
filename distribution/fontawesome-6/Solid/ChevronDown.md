# ChevronDown


```text
fontawesome-6/Solid/ChevronDown
```

```text
include('fontawesome-6/Solid/ChevronDown')
```



| Illustration | ChevronDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ChevronDown.png) | ![illustration for ChevronDown](../../fontawesome-6/Solid/ChevronDown.Local.png) |




## ChevronDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChevronDown
include('fontawesome-6/Solid/ChevronDown')

' renders the element
ChevronDown('ChevronDown', 'Chevron Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChevronDown
include('fontawesome-6/Solid/ChevronDown')

' renders the element
ChevronDown('ChevronDown', 'Chevron Down', 'an optional tech label', 'an optional description')
@enduml
```

