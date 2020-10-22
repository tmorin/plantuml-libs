# Service Elixir Purple

```text
azure-v2/Item/Cxp/ServiceElixirPurple
```

```text
include('azure-v2/Item/Cxp/ServiceElixirPurple')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceElixirPurple.png)|![](ServiceElixirPurple.card.png)|![](ServiceElixirPurple.element.png)|![](ServiceElixirPurple.group.png)|



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
' loads the ServiceElixirPurple element
include('azure-v2/Item/Cxp/ServiceElixirPurple')
ServiceElixirPurpleCard('service_elixir_purple', 'Service Elixir Purple', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceElixirPurple element
include('azure-v2/Item/Cxp/ServiceElixirPurple')
ServiceElixirPurpleCard('service_elixir_purple', 'Service Elixir Purple', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceElixirPurple element
include('azure-v2/Item/Cxp/ServiceElixirPurple')
ServiceElixirPurple('service_elixir_purple', 'Service Elixir Purple', 'an optional tech field')
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
' loads the ServiceElixirPurple element
include('azure-v2/Item/Cxp/ServiceElixirPurple')
ServiceElixirPurple('service_elixir_purple', 'Service Elixir Purple', 'an optional tech field')
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
' loads the ServiceElixirPurple element
include('azure-v2/Item/Cxp/ServiceElixirPurple')
ServiceElixirPurpleGroup('service_elixir_purple', 'Service Elixir Purple', 'an optional tech field'){
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
' loads the ServiceElixirPurple element
include('azure-v2/Item/Cxp/ServiceElixirPurple')
ServiceElixirPurpleGroup('service_elixir_purple', 'Service Elixir Purple', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

