# Aws Deep Lens

```text
aws-20200430/Item/MachineLearning/AwsDeepLens
```

```text
include('aws-20200430/Item/MachineLearning/AwsDeepLens')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDeepLens.png)|![](AwsDeepLens.card.png)|![](AwsDeepLens.element.png)|![](AwsDeepLens.group.png)|



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
' loads the AwsDeepLens element
include('aws-20200430/Item/MachineLearning/AwsDeepLens')
AwsDeepLensCard('aws_deep_lens', 'Aws Deep Lens', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDeepLens element
include('aws-20200430/Item/MachineLearning/AwsDeepLens')
AwsDeepLensCard('aws_deep_lens', 'Aws Deep Lens', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDeepLens element
include('aws-20200430/Item/MachineLearning/AwsDeepLens')
AwsDeepLens('aws_deep_lens', 'Aws Deep Lens', 'an optional tech field')
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
' loads the AwsDeepLens element
include('aws-20200430/Item/MachineLearning/AwsDeepLens')
AwsDeepLens('aws_deep_lens', 'Aws Deep Lens', 'an optional tech field')
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
' loads the AwsDeepLens element
include('aws-20200430/Item/MachineLearning/AwsDeepLens')
AwsDeepLensGroup('aws_deep_lens', 'Aws Deep Lens', 'an optional tech field'){
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
' loads the AwsDeepLens element
include('aws-20200430/Item/MachineLearning/AwsDeepLens')
AwsDeepLensGroup('aws_deep_lens', 'Aws Deep Lens', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

