# Service Key Vaults

```text
azure-v2/Item/Security/ServiceKeyVaults
```

```text
include('azure-v2/Item/Security/ServiceKeyVaults')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceKeyVaults.png)|![](ServiceKeyVaults.card.png)|![](ServiceKeyVaults.element.png)|![](ServiceKeyVaults.group.png)|



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
' loads the ServiceKeyVaults element
include('azure-v2/Item/Security/ServiceKeyVaults')
ServiceKeyVaultsCard('service_key_vaults', 'Service Key Vaults', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceKeyVaults element
include('azure-v2/Item/Security/ServiceKeyVaults')
ServiceKeyVaultsCard('service_key_vaults', 'Service Key Vaults', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceKeyVaults element
include('azure-v2/Item/Security/ServiceKeyVaults')
ServiceKeyVaults('service_key_vaults', 'Service Key Vaults', 'an optional tech field')
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
' loads the ServiceKeyVaults element
include('azure-v2/Item/Security/ServiceKeyVaults')
ServiceKeyVaults('service_key_vaults', 'Service Key Vaults', 'an optional tech field')
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
' loads the ServiceKeyVaults element
include('azure-v2/Item/Security/ServiceKeyVaults')
ServiceKeyVaultsGroup('service_key_vaults', 'Service Key Vaults', 'an optional tech field'){
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
' loads the ServiceKeyVaults element
include('azure-v2/Item/Security/ServiceKeyVaults')
ServiceKeyVaultsGroup('service_key_vaults', 'Service Key Vaults', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

