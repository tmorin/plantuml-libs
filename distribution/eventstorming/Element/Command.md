# Command


```text
eventstorming/Element/Command
```

```text
include('eventstorming/Element/Command')
```



| Command |
| :---: |
| ![illustration for Command](../../eventstorming/Element/Command.Local.png) |




## Command

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Command
include('eventstorming/Element/Command')

Command('Command') [
Command
--
A command is an intent to mutate the state of the system.
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

' loads the Item which embeds the element Command
include('eventstorming/Element/Command')

Command('Command') [
Command
--
A command is an intent to mutate the state of the system.
]
@enduml
```

