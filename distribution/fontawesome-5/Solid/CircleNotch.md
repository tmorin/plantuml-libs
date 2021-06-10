# CircleNotch


```text
fontawesome-5/Solid/CircleNotch
```

```text
include('fontawesome-5/Solid/CircleNotch')
```



| Illustration | CircleNotch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CircleNotch.png) | ![illustration for CircleNotch](../../fontawesome-5/Solid/CircleNotch.Local.png) |




## CircleNotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CircleNotch
include('fontawesome-5/Solid/CircleNotch')

' renders the element
CircleNotch('CircleNotch', 'Circle Notch', 'an optional tech label')
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

' loads the Item which embeds the element CircleNotch
include('fontawesome-5/Solid/CircleNotch')

' renders the element
CircleNotch('CircleNotch', 'Circle Notch', 'an optional tech label')
@enduml
```

