# Aws Code Pipeline

```text
aws-20200430/Item/DeveloperTools/AwsCodePipeline
```

```text
include('aws-20200430/Item/DeveloperTools/AwsCodePipeline')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCodePipeline.png)|![](AwsCodePipeline.card.png)|![](AwsCodePipeline.element.png)|![](AwsCodePipeline.group.png)|



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
' loads the AwsCodePipeline element
include('aws-20200430/Item/DeveloperTools/AwsCodePipeline')
AwsCodePipelineCard('aws_code_pipeline', 'Aws Code Pipeline', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodePipeline element
include('aws-20200430/Item/DeveloperTools/AwsCodePipeline')
AwsCodePipelineCard('aws_code_pipeline', 'Aws Code Pipeline', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodePipeline element
include('aws-20200430/Item/DeveloperTools/AwsCodePipeline')
AwsCodePipeline('aws_code_pipeline', 'Aws Code Pipeline', 'an optional tech field')
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
' loads the AwsCodePipeline element
include('aws-20200430/Item/DeveloperTools/AwsCodePipeline')
AwsCodePipeline('aws_code_pipeline', 'Aws Code Pipeline', 'an optional tech field')
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
' loads the AwsCodePipeline element
include('aws-20200430/Item/DeveloperTools/AwsCodePipeline')
AwsCodePipelineGroup('aws_code_pipeline', 'Aws Code Pipeline', 'an optional tech field'){
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
' loads the AwsCodePipeline element
include('aws-20200430/Item/DeveloperTools/AwsCodePipeline')
AwsCodePipelineGroup('aws_code_pipeline', 'Aws Code Pipeline', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

