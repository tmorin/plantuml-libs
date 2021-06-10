# Terminal


```text
fontawesome-5/Solid/Terminal
```

```text
include('fontawesome-5/Solid/Terminal')
```



| Illustration | Terminal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Terminal.png) | ![illustration for Terminal](../../fontawesome-5/Solid/Terminal.Local.png) |




## Terminal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Terminal
include('fontawesome-5/Solid/Terminal')

' renders the element
Terminal('Terminal', 'Terminal', 'an optional tech label')
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

' loads the Item which embeds the element Terminal
include('fontawesome-5/Solid/Terminal')

' renders the element
Terminal('Terminal', 'Terminal', 'an optional tech label')
@enduml
```

