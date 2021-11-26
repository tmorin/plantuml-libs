# FacadeCommand


```text
eventstorming/Element/FacadeCommand
```

```text
include('eventstorming/Element/FacadeCommand')
```



| FacadeCommand |
| :---: |
| ![illustration for FacadeCommand](../../eventstorming/Element/FacadeCommand.Local.png) |




## FacadeCommand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element FacadeCommand
include('eventstorming/Element/FacadeCommand')

FacadeCommand('FacadeCommand') [
Facade Command
--
A facade command is a public command masking the underlying complexity.
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

' loads the Item which embeds the element FacadeCommand
include('eventstorming/Element/FacadeCommand')

FacadeCommand('FacadeCommand') [
Facade Command
--
A facade command is a public command masking the underlying complexity.
]
@enduml
```

