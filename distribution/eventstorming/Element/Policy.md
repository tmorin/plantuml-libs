# Policy


```text
eventstorming/Element/Policy
```

```text
include('eventstorming/Element/Policy')
```



| Policy |
| :---: |
| ![illustration for Policy](../../eventstorming/Element/Policy.Local.png) |




## Policy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Policy
include('eventstorming/Element/Policy')

Policy('Policy') [
Policy
--
A policy captures the reactive logic of a process.
]
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
include('eventstorming/bootstrap')

' loads the Item which embeds the element Policy
include('eventstorming/Element/Policy')

Policy('Policy') [
Policy
--
A policy captures the reactive logic of a process.
]
@enduml
```

