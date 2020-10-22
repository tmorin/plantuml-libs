# Io T Medical Emergency

```text
aws-20200430/Item/InternetOfThings/IoTMedicalEmergency
```

```text
include('aws-20200430/Item/InternetOfThings/IoTMedicalEmergency')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTMedicalEmergency.png)|![](IoTMedicalEmergency.card.png)|![](IoTMedicalEmergency.element.png)|![](IoTMedicalEmergency.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTMedicalEmergency element
include('aws-20200430/Item/InternetOfThings/IoTMedicalEmergency')
IoTMedicalEmergencyCard('io_t_medical_emergency', 'Io T Medical Emergency', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTMedicalEmergency element
include('aws-20200430/Item/InternetOfThings/IoTMedicalEmergency')
IoTMedicalEmergencyCard('io_t_medical_emergency', 'Io T Medical Emergency', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTMedicalEmergency element
include('aws-20200430/Item/InternetOfThings/IoTMedicalEmergency')
IoTMedicalEmergency('io_t_medical_emergency', 'Io T Medical Emergency', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTMedicalEmergency element
include('aws-20200430/Item/InternetOfThings/IoTMedicalEmergency')
IoTMedicalEmergency('io_t_medical_emergency', 'Io T Medical Emergency', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTMedicalEmergency element
include('aws-20200430/Item/InternetOfThings/IoTMedicalEmergency')
IoTMedicalEmergencyGroup('io_t_medical_emergency', 'Io T Medical Emergency', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTMedicalEmergency element
include('aws-20200430/Item/InternetOfThings/IoTMedicalEmergency')
IoTMedicalEmergencyGroup('io_t_medical_emergency', 'Io T Medical Emergency', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

