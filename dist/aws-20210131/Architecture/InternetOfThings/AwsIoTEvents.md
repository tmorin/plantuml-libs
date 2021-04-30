# Aws Io T Events

```text
aws-20210131/Architecture/InternetOfThings/AwsIoTEvents
```

```text
include('aws-20210131/Architecture/InternetOfThings/AwsIoTEvents')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsIoTEvents.png)|![](AwsIoTEvents.card.png)|![](AwsIoTEvents.element.png)|![](AwsIoTEvents.group.png)|



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
' loads the AwsIoTEvents element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTEvents')
AwsIoTEventsCard('aws_io_t_events', 'Aws Io T Events', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTEvents element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTEvents')
AwsIoTEventsCard('aws_io_t_events', 'Aws Io T Events', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTEvents element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTEvents')
AwsIoTEvents('aws_io_t_events', 'Aws Io T Events', 'an optional tech field')
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
' loads the AwsIoTEvents element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTEvents')
AwsIoTEvents('aws_io_t_events', 'Aws Io T Events', 'an optional tech field')
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
' loads the AwsIoTEvents element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTEvents')
AwsIoTEventsGroup('aws_io_t_events', 'Aws Io T Events', 'an optional tech field'){
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
' loads the AwsIoTEvents element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTEvents')
AwsIoTEventsGroup('aws_io_t_events', 'Aws Io T Events', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

