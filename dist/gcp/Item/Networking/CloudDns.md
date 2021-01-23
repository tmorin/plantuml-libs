# Cloud Dns

```text
gcp/Item/Networking/CloudDns
```

```text
include('gcp/Item/Networking/CloudDns')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudDns.png)|![](CloudDns.card.png)|![](CloudDns.element.png)|![](CloudDns.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudDns element
include('gcp/Item/Networking/CloudDns')
CloudDnsCard('cloud_dns', 'Cloud Dns', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudDns element
include('gcp/Item/Networking/CloudDns')
CloudDnsCard('cloud_dns', 'Cloud Dns', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudDns element
include('gcp/Item/Networking/CloudDns')
CloudDns('cloud_dns', 'Cloud Dns', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudDns element
include('gcp/Item/Networking/CloudDns')
CloudDns('cloud_dns', 'Cloud Dns', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudDns element
include('gcp/Item/Networking/CloudDns')
CloudDnsGroup('cloud_dns', 'Cloud Dns', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudDns element
include('gcp/Item/Networking/CloudDns')
CloudDnsGroup('cloud_dns', 'Cloud Dns', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

