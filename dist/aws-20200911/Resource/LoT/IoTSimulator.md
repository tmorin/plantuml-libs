# Io T Simulator

```text
aws-20200911/Resource/LoT/IoTSimulator
```

```text
include('aws-20200911/Resource/LoT/IoTSimulator')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTSimulator.png)|![](IoTSimulator.card.png)|![](IoTSimulator.element.png)|![](IoTSimulator.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTSimulator element
include('aws-20200911/Resource/LoT/IoTSimulator')
IoTSimulatorCard('io_t_simulator', 'Io T Simulator', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTSimulator element
include('aws-20200911/Resource/LoT/IoTSimulator')
IoTSimulatorCard('io_t_simulator', 'Io T Simulator', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTSimulator element
include('aws-20200911/Resource/LoT/IoTSimulator')
IoTSimulator('io_t_simulator', 'Io T Simulator', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTSimulator element
include('aws-20200911/Resource/LoT/IoTSimulator')
IoTSimulator('io_t_simulator', 'Io T Simulator', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTSimulator element
include('aws-20200911/Resource/LoT/IoTSimulator')
IoTSimulatorGroup('io_t_simulator', 'Io T Simulator', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTSimulator element
include('aws-20200911/Resource/LoT/IoTSimulator')
IoTSimulatorGroup('io_t_simulator', 'Io T Simulator', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

