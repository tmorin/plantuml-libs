# Io T Camera

```text
aws-20200430/Item/InternetOfThings/IoTCamera
```

```text
include('aws-20200430/Item/InternetOfThings/IoTCamera')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTCamera.png)|![](IoTCamera.card.png)|![](IoTCamera.element.png)|![](IoTCamera.group.png)|



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
' loads the IoTCamera element
include('aws-20200430/Item/InternetOfThings/IoTCamera')
IoTCameraCard('io_t_camera', 'Io T Camera', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTCamera element
include('aws-20200430/Item/InternetOfThings/IoTCamera')
IoTCameraCard('io_t_camera', 'Io T Camera', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTCamera element
include('aws-20200430/Item/InternetOfThings/IoTCamera')
IoTCamera('io_t_camera', 'Io T Camera', 'an optional tech field')
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
' loads the IoTCamera element
include('aws-20200430/Item/InternetOfThings/IoTCamera')
IoTCamera('io_t_camera', 'Io T Camera', 'an optional tech field')
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
' loads the IoTCamera element
include('aws-20200430/Item/InternetOfThings/IoTCamera')
IoTCameraGroup('io_t_camera', 'Io T Camera', 'an optional tech field'){
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
' loads the IoTCamera element
include('aws-20200430/Item/InternetOfThings/IoTCamera')
IoTCameraGroup('io_t_camera', 'Io T Camera', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

