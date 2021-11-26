# Process


```text
eventstorming/Element/Process
```

```text
include('eventstorming/Element/Process')
```



| Process |
| :---: |
| ![illustration for Process](../../eventstorming/Element/Process.Local.png) |




## Process

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Process
include('eventstorming/Element/Process')

Process('Process') [
Process
--
A process is a short-lived business transaction.
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

' loads the Item which embeds the element Process
include('eventstorming/Element/Process')

Process('Process') [
Process
--
A process is a short-lived business transaction.
]
@enduml
```

