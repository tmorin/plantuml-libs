# Aws Directory Service

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDirectoryService.png)|![](AwsDirectoryService.card.png)|![](AwsDirectoryService.element.png)|![](AwsDirectoryService.group.png)|



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
' loads the AwsDirectoryService element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryServiceCard('aws_directory_service', 'Aws Directory Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDirectoryService element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryServiceCard('aws_directory_service', 'Aws Directory Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDirectoryService element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryService('aws_directory_service', 'Aws Directory Service', 'an optional tech field')
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
' loads the AwsDirectoryService element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryService('aws_directory_service', 'Aws Directory Service', 'an optional tech field')
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
' loads the AwsDirectoryService element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryServiceGroup('aws_directory_service', 'Aws Directory Service', 'an optional tech field'){
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
' loads the AwsDirectoryService element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
AwsDirectoryServiceGroup('aws_directory_service', 'Aws Directory Service', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

