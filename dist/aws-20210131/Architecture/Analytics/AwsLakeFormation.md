# Aws Lake Formation

```text
aws-20210131/Architecture/Analytics/AwsLakeFormation
```

```text
include('aws-20210131/Architecture/Analytics/AwsLakeFormation')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsLakeFormation.png)|![](AwsLakeFormation.card.png)|![](AwsLakeFormation.element.png)|![](AwsLakeFormation.group.png)|



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
' loads the AwsLakeFormation element
include('aws-20210131/Architecture/Analytics/AwsLakeFormation')
AwsLakeFormationCard('aws_lake_formation', 'Aws Lake Formation', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsLakeFormation element
include('aws-20210131/Architecture/Analytics/AwsLakeFormation')
AwsLakeFormationCard('aws_lake_formation', 'Aws Lake Formation', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsLakeFormation element
include('aws-20210131/Architecture/Analytics/AwsLakeFormation')
AwsLakeFormation('aws_lake_formation', 'Aws Lake Formation', 'an optional tech field')
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
' loads the AwsLakeFormation element
include('aws-20210131/Architecture/Analytics/AwsLakeFormation')
AwsLakeFormation('aws_lake_formation', 'Aws Lake Formation', 'an optional tech field')
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
' loads the AwsLakeFormation element
include('aws-20210131/Architecture/Analytics/AwsLakeFormation')
AwsLakeFormationGroup('aws_lake_formation', 'Aws Lake Formation', 'an optional tech field'){
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
' loads the AwsLakeFormation element
include('aws-20210131/Architecture/Analytics/AwsLakeFormation')
AwsLakeFormationGroup('aws_lake_formation', 'Aws Lake Formation', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

