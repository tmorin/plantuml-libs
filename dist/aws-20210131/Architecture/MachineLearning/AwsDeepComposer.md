# Aws Deep Composer

```text
aws-20210131/Architecture/MachineLearning/AwsDeepComposer
```

```text
include('aws-20210131/Architecture/MachineLearning/AwsDeepComposer')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDeepComposer.png)|![](AwsDeepComposer.card.png)|![](AwsDeepComposer.element.png)|![](AwsDeepComposer.group.png)|



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
' loads the AwsDeepComposer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepComposer')
AwsDeepComposerCard('aws_deep_composer', 'Aws Deep Composer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDeepComposer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepComposer')
AwsDeepComposerCard('aws_deep_composer', 'Aws Deep Composer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDeepComposer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepComposer')
AwsDeepComposer('aws_deep_composer', 'Aws Deep Composer', 'an optional tech field')
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
' loads the AwsDeepComposer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepComposer')
AwsDeepComposer('aws_deep_composer', 'Aws Deep Composer', 'an optional tech field')
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
' loads the AwsDeepComposer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepComposer')
AwsDeepComposerGroup('aws_deep_composer', 'Aws Deep Composer', 'an optional tech field'){
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
' loads the AwsDeepComposer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepComposer')
AwsDeepComposerGroup('aws_deep_composer', 'Aws Deep Composer', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

