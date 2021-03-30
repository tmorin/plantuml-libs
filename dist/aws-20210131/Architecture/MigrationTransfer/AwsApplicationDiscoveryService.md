# Aws Application Discovery Service

```text
aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService
```

```text
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsApplicationDiscoveryService.png)|![](AwsApplicationDiscoveryService.card.png)|![](AwsApplicationDiscoveryService.element.png)|![](AwsApplicationDiscoveryService.group.png)|



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
' loads the AwsApplicationDiscoveryService element
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
AwsApplicationDiscoveryServiceCard('aws_application_discovery_service', 'Aws Application Discovery Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsApplicationDiscoveryService element
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
AwsApplicationDiscoveryServiceCard('aws_application_discovery_service', 'Aws Application Discovery Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsApplicationDiscoveryService element
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
AwsApplicationDiscoveryService('aws_application_discovery_service', 'Aws Application Discovery Service', 'an optional tech field')
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
' loads the AwsApplicationDiscoveryService element
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
AwsApplicationDiscoveryService('aws_application_discovery_service', 'Aws Application Discovery Service', 'an optional tech field')
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
' loads the AwsApplicationDiscoveryService element
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
AwsApplicationDiscoveryServiceGroup('aws_application_discovery_service', 'Aws Application Discovery Service', 'an optional tech field'){
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
' loads the AwsApplicationDiscoveryService element
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
AwsApplicationDiscoveryServiceGroup('aws_application_discovery_service', 'Aws Application Discovery Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

