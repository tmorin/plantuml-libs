# Aws Rds Piops

```text
aws-20200430/Item/Database/AwsRdsPiops
```

```text
include('aws-20200430/Item/Database/AwsRdsPiops')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsRdsPiops.png)|![](AwsRdsPiops.card.png)|![](AwsRdsPiops.element.png)|![](AwsRdsPiops.group.png)|



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
' loads the AwsRdsPiops element
include('aws-20200430/Item/Database/AwsRdsPiops')
AwsRdsPiopsCard('aws_rds_piops', 'Aws Rds Piops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRdsPiops element
include('aws-20200430/Item/Database/AwsRdsPiops')
AwsRdsPiopsCard('aws_rds_piops', 'Aws Rds Piops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRdsPiops element
include('aws-20200430/Item/Database/AwsRdsPiops')
AwsRdsPiops('aws_rds_piops', 'Aws Rds Piops', 'an optional tech field')
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
' loads the AwsRdsPiops element
include('aws-20200430/Item/Database/AwsRdsPiops')
AwsRdsPiops('aws_rds_piops', 'Aws Rds Piops', 'an optional tech field')
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
' loads the AwsRdsPiops element
include('aws-20200430/Item/Database/AwsRdsPiops')
AwsRdsPiopsGroup('aws_rds_piops', 'Aws Rds Piops', 'an optional tech field'){
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
' loads the AwsRdsPiops element
include('aws-20200430/Item/Database/AwsRdsPiops')
AwsRdsPiopsGroup('aws_rds_piops', 'Aws Rds Piops', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

