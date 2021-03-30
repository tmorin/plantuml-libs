# Aws Transfer Family

```text
aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily
```

```text
include('aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsTransferFamily.png)|![](AwsTransferFamily.card.png)|![](AwsTransferFamily.element.png)|![](AwsTransferFamily.group.png)|



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
' loads the AwsTransferFamily element
include('aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily')
AwsTransferFamilyCard('aws_transfer_family', 'Aws Transfer Family', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsTransferFamily element
include('aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily')
AwsTransferFamilyCard('aws_transfer_family', 'Aws Transfer Family', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsTransferFamily element
include('aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily')
AwsTransferFamily('aws_transfer_family', 'Aws Transfer Family', 'an optional tech field')
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
' loads the AwsTransferFamily element
include('aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily')
AwsTransferFamily('aws_transfer_family', 'Aws Transfer Family', 'an optional tech field')
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
' loads the AwsTransferFamily element
include('aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily')
AwsTransferFamilyGroup('aws_transfer_family', 'Aws Transfer Family', 'an optional tech field'){
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
' loads the AwsTransferFamily element
include('aws-20210131/Architecture/MigrationTransfer/AwsTransferFamily')
AwsTransferFamilyGroup('aws_transfer_family', 'Aws Transfer Family', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

