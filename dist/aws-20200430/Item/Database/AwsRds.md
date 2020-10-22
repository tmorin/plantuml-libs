# Aws Rds

```text
aws-20200430/Item/Database/AwsRds
```

```text
include('aws-20200430/Item/Database/AwsRds')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsRds.png)|![](AwsRds.card.png)|![](AwsRds.element.png)|![](AwsRds.group.png)|



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
' loads the AwsRds element
include('aws-20200430/Item/Database/AwsRds')
AwsRdsCard('aws_rds', 'Aws Rds', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRds element
include('aws-20200430/Item/Database/AwsRds')
AwsRdsCard('aws_rds', 'Aws Rds', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRds element
include('aws-20200430/Item/Database/AwsRds')
AwsRds('aws_rds', 'Aws Rds', 'an optional tech field')
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
' loads the AwsRds element
include('aws-20200430/Item/Database/AwsRds')
AwsRds('aws_rds', 'Aws Rds', 'an optional tech field')
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
' loads the AwsRds element
include('aws-20200430/Item/Database/AwsRds')
AwsRdsGroup('aws_rds', 'Aws Rds', 'an optional tech field'){
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
' loads the AwsRds element
include('aws-20200430/Item/Database/AwsRds')
AwsRdsGroup('aws_rds', 'Aws Rds', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

