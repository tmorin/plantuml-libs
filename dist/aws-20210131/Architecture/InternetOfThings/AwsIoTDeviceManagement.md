# Aws Io T Device Management

```text
aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement
```

```text
include('aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsIoTDeviceManagement.png)|![](AwsIoTDeviceManagement.card.png)|![](AwsIoTDeviceManagement.element.png)|![](AwsIoTDeviceManagement.group.png)|



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
' loads the AwsIoTDeviceManagement element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement')
AwsIoTDeviceManagementCard('aws_io_t_device_management', 'Aws Io T Device Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTDeviceManagement element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement')
AwsIoTDeviceManagementCard('aws_io_t_device_management', 'Aws Io T Device Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTDeviceManagement element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement')
AwsIoTDeviceManagement('aws_io_t_device_management', 'Aws Io T Device Management', 'an optional tech field')
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
' loads the AwsIoTDeviceManagement element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement')
AwsIoTDeviceManagement('aws_io_t_device_management', 'Aws Io T Device Management', 'an optional tech field')
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
' loads the AwsIoTDeviceManagement element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement')
AwsIoTDeviceManagementGroup('aws_io_t_device_management', 'Aws Io T Device Management', 'an optional tech field'){
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
' loads the AwsIoTDeviceManagement element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTDeviceManagement')
AwsIoTDeviceManagementGroup('aws_io_t_device_management', 'Aws Io T Device Management', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

