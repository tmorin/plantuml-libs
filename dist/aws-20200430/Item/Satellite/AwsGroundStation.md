# Aws Ground Station

```text
aws-20200430/Item/Satellite/AwsGroundStation
```

```text
include('aws-20200430/Item/Satellite/AwsGroundStation')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsGroundStation.png)|![](AwsGroundStation.card.png)|![](AwsGroundStation.element.png)|![](AwsGroundStation.group.png)|



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
' loads the AwsGroundStation element
include('aws-20200430/Item/Satellite/AwsGroundStation')
AwsGroundStationCard('aws_ground_station', 'Aws Ground Station', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGroundStation element
include('aws-20200430/Item/Satellite/AwsGroundStation')
AwsGroundStationCard('aws_ground_station', 'Aws Ground Station', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGroundStation element
include('aws-20200430/Item/Satellite/AwsGroundStation')
AwsGroundStation('aws_ground_station', 'Aws Ground Station', 'an optional tech field')
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
' loads the AwsGroundStation element
include('aws-20200430/Item/Satellite/AwsGroundStation')
AwsGroundStation('aws_ground_station', 'Aws Ground Station', 'an optional tech field')
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
' loads the AwsGroundStation element
include('aws-20200430/Item/Satellite/AwsGroundStation')
AwsGroundStationGroup('aws_ground_station', 'Aws Ground Station', 'an optional tech field'){
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
' loads the AwsGroundStation element
include('aws-20200430/Item/Satellite/AwsGroundStation')
AwsGroundStationGroup('aws_ground_station', 'Aws Ground Station', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

