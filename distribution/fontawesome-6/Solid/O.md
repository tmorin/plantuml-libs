# O


```text
fontawesome-6/Solid/O
```

```text
include('fontawesome-6/Solid/O')
```



| Illustration | O |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/O.png) | ![illustration for O](../../fontawesome-6/Solid/O.Local.png) |




## O

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element O
include('fontawesome-6/Solid/O')

' renders the element
O('O', 'O', 'an optional tech label')
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

' loads the Item which embeds the element O
include('fontawesome-6/Solid/O')

' renders the element
O('O', 'O', 'an optional tech label')
@enduml
```

