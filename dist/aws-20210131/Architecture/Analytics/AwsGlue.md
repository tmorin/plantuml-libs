# Aws Glue

```text
aws-20210131/Architecture/Analytics/AwsGlue
```

```text
include('aws-20210131/Architecture/Analytics/AwsGlue')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsGlue.png)|![](AwsGlue.card.png)|![](AwsGlue.element.png)|![](AwsGlue.group.png)|



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
' loads the AwsGlue element
include('aws-20210131/Architecture/Analytics/AwsGlue')
AwsGlueCard('aws_glue', 'Aws Glue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGlue element
include('aws-20210131/Architecture/Analytics/AwsGlue')
AwsGlueCard('aws_glue', 'Aws Glue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGlue element
include('aws-20210131/Architecture/Analytics/AwsGlue')
AwsGlue('aws_glue', 'Aws Glue', 'an optional tech field')
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
' loads the AwsGlue element
include('aws-20210131/Architecture/Analytics/AwsGlue')
AwsGlue('aws_glue', 'Aws Glue', 'an optional tech field')
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
' loads the AwsGlue element
include('aws-20210131/Architecture/Analytics/AwsGlue')
AwsGlueGroup('aws_glue', 'Aws Glue', 'an optional tech field'){
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
' loads the AwsGlue element
include('aws-20210131/Architecture/Analytics/AwsGlue')
AwsGlueGroup('aws_glue', 'Aws Glue', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

