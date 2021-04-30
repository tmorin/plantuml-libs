# Io T Device Gateway

```text
aws-20210131/Resource/LoT/IoTDeviceGateway
```

```text
include('aws-20210131/Resource/LoT/IoTDeviceGateway')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTDeviceGateway.png)|![](IoTDeviceGateway.card.png)|![](IoTDeviceGateway.element.png)|![](IoTDeviceGateway.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTDeviceGateway element
include('aws-20210131/Resource/LoT/IoTDeviceGateway')
IoTDeviceGatewayCard('io_t_device_gateway', 'Io T Device Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTDeviceGateway element
include('aws-20210131/Resource/LoT/IoTDeviceGateway')
IoTDeviceGatewayCard('io_t_device_gateway', 'Io T Device Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTDeviceGateway element
include('aws-20210131/Resource/LoT/IoTDeviceGateway')
IoTDeviceGateway('io_t_device_gateway', 'Io T Device Gateway', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTDeviceGateway element
include('aws-20210131/Resource/LoT/IoTDeviceGateway')
IoTDeviceGateway('io_t_device_gateway', 'Io T Device Gateway', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTDeviceGateway element
include('aws-20210131/Resource/LoT/IoTDeviceGateway')
IoTDeviceGatewayGroup('io_t_device_gateway', 'Io T Device Gateway', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTDeviceGateway element
include('aws-20210131/Resource/LoT/IoTDeviceGateway')
IoTDeviceGatewayGroup('io_t_device_gateway', 'Io T Device Gateway', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

