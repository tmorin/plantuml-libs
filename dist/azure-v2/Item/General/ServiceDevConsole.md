# Service Dev Console

```text
azure-v2/Item/General/ServiceDevConsole
```

```text
include('azure-v2/Item/General/ServiceDevConsole')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDevConsole.png)|![](ServiceDevConsole.card.png)|![](ServiceDevConsole.element.png)|![](ServiceDevConsole.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceDevConsole element
include('azure-v2/Item/General/ServiceDevConsole')
ServiceDevConsoleCard('service_dev_console', 'Service Dev Console', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceDevConsole element
include('azure-v2/Item/General/ServiceDevConsole')
ServiceDevConsoleCard('service_dev_console', 'Service Dev Console', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceDevConsole element
include('azure-v2/Item/General/ServiceDevConsole')
ServiceDevConsole('service_dev_console', 'Service Dev Console', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceDevConsole element
include('azure-v2/Item/General/ServiceDevConsole')
ServiceDevConsole('service_dev_console', 'Service Dev Console', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceDevConsole element
include('azure-v2/Item/General/ServiceDevConsole')
ServiceDevConsoleGroup('service_dev_console', 'Service Dev Console', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceDevConsole element
include('azure-v2/Item/General/ServiceDevConsole')
ServiceDevConsoleGroup('service_dev_console', 'Service Dev Console', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

