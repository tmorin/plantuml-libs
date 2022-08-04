# CloudArrowDown


```text
fontawesome-6/Solid/CloudArrowDown
```

```text
include('fontawesome-6/Solid/CloudArrowDown')
```



| Illustration | CloudArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudArrowDown.png) | ![illustration for CloudArrowDown](../../fontawesome-6/Solid/CloudArrowDown.Local.png) |




## CloudArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudArrowDown
include('fontawesome-6/Solid/CloudArrowDown')

' renders the element
CloudArrowDown('CloudArrowDown', 'Cloud Arrow Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudArrowDown
include('fontawesome-6/Solid/CloudArrowDown')

' renders the element
CloudArrowDown('CloudArrowDown', 'Cloud Arrow Down', 'an optional tech label', 'an optional description')
@enduml
```

