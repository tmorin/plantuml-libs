# Aws Athena

```text
aws-20200430/Item/Analytics/AwsAthena
```

```text
include('aws-20200430/Item/Analytics/AwsAthena')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsAthena.png)|![](AwsAthena.card.png)|![](AwsAthena.element.png)|![](AwsAthena.group.png)|



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
' loads the AwsAthena element
include('aws-20200430/Item/Analytics/AwsAthena')
AwsAthenaCard('aws_athena', 'Aws Athena', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAthena element
include('aws-20200430/Item/Analytics/AwsAthena')
AwsAthenaCard('aws_athena', 'Aws Athena', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsAthena element
include('aws-20200430/Item/Analytics/AwsAthena')
AwsAthena('aws_athena', 'Aws Athena', 'an optional tech field')
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
' loads the AwsAthena element
include('aws-20200430/Item/Analytics/AwsAthena')
AwsAthena('aws_athena', 'Aws Athena', 'an optional tech field')
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
' loads the AwsAthena element
include('aws-20200430/Item/Analytics/AwsAthena')
AwsAthenaGroup('aws_athena', 'Aws Athena', 'an optional tech field'){
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
' loads the AwsAthena element
include('aws-20200430/Item/Analytics/AwsAthena')
AwsAthenaGroup('aws_athena', 'Aws Athena', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

