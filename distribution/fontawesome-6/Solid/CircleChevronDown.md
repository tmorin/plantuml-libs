# CircleChevronDown


```text
fontawesome-6/Solid/CircleChevronDown
```

```text
include('fontawesome-6/Solid/CircleChevronDown')
```



| Illustration | CircleChevronDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleChevronDown.png) | ![illustration for CircleChevronDown](../../fontawesome-6/Solid/CircleChevronDown.Local.png) |




## CircleChevronDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleChevronDown
include('fontawesome-6/Solid/CircleChevronDown')

' renders the element
CircleChevronDown('CircleChevronDown', 'Circle Chevron Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleChevronDown
include('fontawesome-6/Solid/CircleChevronDown')

' renders the element
CircleChevronDown('CircleChevronDown', 'Circle Chevron Down', 'an optional tech label', 'an optional description')
@enduml
```

