# Aws Emr

```text
aws-20200430/Item/Analytics/AwsEmr
```

```text
include('aws-20200430/Item/Analytics/AwsEmr')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEmr.png)|![](AwsEmr.card.png)|![](AwsEmr.element.png)|![](AwsEmr.group.png)|



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
' loads the AwsEmr element
include('aws-20200430/Item/Analytics/AwsEmr')
AwsEmrCard('aws_emr', 'Aws Emr', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEmr element
include('aws-20200430/Item/Analytics/AwsEmr')
AwsEmrCard('aws_emr', 'Aws Emr', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEmr element
include('aws-20200430/Item/Analytics/AwsEmr')
AwsEmr('aws_emr', 'Aws Emr', 'an optional tech field')
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
' loads the AwsEmr element
include('aws-20200430/Item/Analytics/AwsEmr')
AwsEmr('aws_emr', 'Aws Emr', 'an optional tech field')
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
' loads the AwsEmr element
include('aws-20200430/Item/Analytics/AwsEmr')
AwsEmrGroup('aws_emr', 'Aws Emr', 'an optional tech field'){
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
' loads the AwsEmr element
include('aws-20200430/Item/Analytics/AwsEmr')
AwsEmrGroup('aws_emr', 'Aws Emr', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

