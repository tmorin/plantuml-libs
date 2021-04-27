# Command Message

```text
eip/MessageConstruction/CommandMessage
```

```text
include('eip/MessageConstruction/CommandMessage')
```

|icon|element|
|---|---|
|![](CommandMessage.png)|![](CommandMessage.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the CommandMessage element
include('eip/MessageConstruction/CommandMessage')
CommandMessage('command_message', 'Command Message', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the CommandMessage element
include('eip/MessageConstruction/CommandMessage')
CommandMessage('command_message', 'Command Message', 'an optional tech field')
@enduml
```

