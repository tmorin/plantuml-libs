# Partner Interconnect

```text
gcp/Item/Networking/PartnerInterconnect
```

```text
include('gcp/Item/Networking/PartnerInterconnect')
```

|icon|card|element|group|
|---|---|---|---|
|![](PartnerInterconnect.png)|![](PartnerInterconnect.card.png)|![](PartnerInterconnect.element.png)|![](PartnerInterconnect.group.png)|



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
' loads the PartnerInterconnect element
include('gcp/Item/Networking/PartnerInterconnect')
PartnerInterconnectCard('partner_interconnect', 'Partner Interconnect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the PartnerInterconnect element
include('gcp/Item/Networking/PartnerInterconnect')
PartnerInterconnectCard('partner_interconnect', 'Partner Interconnect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the PartnerInterconnect element
include('gcp/Item/Networking/PartnerInterconnect')
PartnerInterconnect('partner_interconnect', 'Partner Interconnect', 'an optional tech field')
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
' loads the PartnerInterconnect element
include('gcp/Item/Networking/PartnerInterconnect')
PartnerInterconnect('partner_interconnect', 'Partner Interconnect', 'an optional tech field')
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
' loads the PartnerInterconnect element
include('gcp/Item/Networking/PartnerInterconnect')
PartnerInterconnectGroup('partner_interconnect', 'Partner Interconnect', 'an optional tech field'){
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
' loads the PartnerInterconnect element
include('gcp/Item/Networking/PartnerInterconnect')
PartnerInterconnectGroup('partner_interconnect', 'Partner Interconnect', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

