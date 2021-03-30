# Aws Local Zones

```text
aws-20210131/Architecture/Compute/AwsLocalZones
```

```text
include('aws-20210131/Architecture/Compute/AwsLocalZones')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsLocalZones.png)|![](AwsLocalZones.card.png)|![](AwsLocalZones.element.png)|![](AwsLocalZones.group.png)|



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
' loads the AwsLocalZones element
include('aws-20210131/Architecture/Compute/AwsLocalZones')
AwsLocalZonesCard('aws_local_zones', 'Aws Local Zones', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsLocalZones element
include('aws-20210131/Architecture/Compute/AwsLocalZones')
AwsLocalZonesCard('aws_local_zones', 'Aws Local Zones', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsLocalZones element
include('aws-20210131/Architecture/Compute/AwsLocalZones')
AwsLocalZones('aws_local_zones', 'Aws Local Zones', 'an optional tech field')
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
' loads the AwsLocalZones element
include('aws-20210131/Architecture/Compute/AwsLocalZones')
AwsLocalZones('aws_local_zones', 'Aws Local Zones', 'an optional tech field')
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
' loads the AwsLocalZones element
include('aws-20210131/Architecture/Compute/AwsLocalZones')
AwsLocalZonesGroup('aws_local_zones', 'Aws Local Zones', 'an optional tech field'){
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
' loads the AwsLocalZones element
include('aws-20210131/Architecture/Compute/AwsLocalZones')
AwsLocalZonesGroup('aws_local_zones', 'Aws Local Zones', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

