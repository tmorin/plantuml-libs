# Transfer Appliance

```text
gcp/Item/DataTransfer/TransferAppliance
```

```text
include('gcp/Item/DataTransfer/TransferAppliance')
```

|icon|card|element|group|
|---|---|---|---|
|![](TransferAppliance.png)|![](TransferAppliance.card.png)|![](TransferAppliance.element.png)|![](TransferAppliance.group.png)|



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
' loads the TransferAppliance element
include('gcp/Item/DataTransfer/TransferAppliance')
TransferApplianceCard('transfer_appliance', 'Transfer Appliance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TransferAppliance element
include('gcp/Item/DataTransfer/TransferAppliance')
TransferApplianceCard('transfer_appliance', 'Transfer Appliance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TransferAppliance element
include('gcp/Item/DataTransfer/TransferAppliance')
TransferAppliance('transfer_appliance', 'Transfer Appliance', 'an optional tech field')
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
' loads the TransferAppliance element
include('gcp/Item/DataTransfer/TransferAppliance')
TransferAppliance('transfer_appliance', 'Transfer Appliance', 'an optional tech field')
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
' loads the TransferAppliance element
include('gcp/Item/DataTransfer/TransferAppliance')
TransferApplianceGroup('transfer_appliance', 'Transfer Appliance', 'an optional tech field'){
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
' loads the TransferAppliance element
include('gcp/Item/DataTransfer/TransferAppliance')
TransferApplianceGroup('transfer_appliance', 'Transfer Appliance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

