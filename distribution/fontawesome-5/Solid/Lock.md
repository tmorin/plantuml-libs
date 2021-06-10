# Lock


```text
fontawesome-5/Solid/Lock
```

```text
include('fontawesome-5/Solid/Lock')
```



| Illustration | Lock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Lock.png) | ![illustration for Lock](../../fontawesome-5/Solid/Lock.Local.png) |




## Lock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Lock
include('fontawesome-5/Solid/Lock')

' renders the element
Lock('Lock', 'Lock', 'an optional tech label')
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

' loads the Item which embeds the element Lock
include('fontawesome-5/Solid/Lock')

' renders the element
Lock('Lock', 'Lock', 'an optional tech label')
@enduml
```

