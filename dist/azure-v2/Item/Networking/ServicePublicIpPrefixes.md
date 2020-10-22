# Service Public Ip Prefixes

```text
azure-v2/Item/Networking/ServicePublicIpPrefixes
```

```text
include('azure-v2/Item/Networking/ServicePublicIpPrefixes')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePublicIpPrefixes.png)|![](ServicePublicIpPrefixes.card.png)|![](ServicePublicIpPrefixes.element.png)|![](ServicePublicIpPrefixes.group.png)|



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
' loads the ServicePublicIpPrefixes element
include('azure-v2/Item/Networking/ServicePublicIpPrefixes')
ServicePublicIpPrefixesCard('service_public_ip_prefixes', 'Service Public Ip Prefixes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePublicIpPrefixes element
include('azure-v2/Item/Networking/ServicePublicIpPrefixes')
ServicePublicIpPrefixesCard('service_public_ip_prefixes', 'Service Public Ip Prefixes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePublicIpPrefixes element
include('azure-v2/Item/Networking/ServicePublicIpPrefixes')
ServicePublicIpPrefixes('service_public_ip_prefixes', 'Service Public Ip Prefixes', 'an optional tech field')
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
' loads the ServicePublicIpPrefixes element
include('azure-v2/Item/Networking/ServicePublicIpPrefixes')
ServicePublicIpPrefixes('service_public_ip_prefixes', 'Service Public Ip Prefixes', 'an optional tech field')
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
' loads the ServicePublicIpPrefixes element
include('azure-v2/Item/Networking/ServicePublicIpPrefixes')
ServicePublicIpPrefixesGroup('service_public_ip_prefixes', 'Service Public Ip Prefixes', 'an optional tech field'){
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
' loads the ServicePublicIpPrefixes element
include('azure-v2/Item/Networking/ServicePublicIpPrefixes')
ServicePublicIpPrefixesGroup('service_public_ip_prefixes', 'Service Public Ip Prefixes', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

