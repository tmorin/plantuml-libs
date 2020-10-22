# Aws Lambda

```text
aws-20200911/Service/Compute/AwsLambda
```

```text
include('aws-20200911/Service/Compute/AwsLambda')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsLambda.png)|![](AwsLambda.card.png)|![](AwsLambda.element.png)|![](AwsLambda.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsLambda element
include('aws-20200911/Service/Compute/AwsLambda')
AwsLambdaCard('aws_lambda', 'Aws Lambda', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsLambda element
include('aws-20200911/Service/Compute/AwsLambda')
AwsLambdaCard('aws_lambda', 'Aws Lambda', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsLambda element
include('aws-20200911/Service/Compute/AwsLambda')
AwsLambda('aws_lambda', 'Aws Lambda', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsLambda element
include('aws-20200911/Service/Compute/AwsLambda')
AwsLambda('aws_lambda', 'Aws Lambda', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsLambda element
include('aws-20200911/Service/Compute/AwsLambda')
AwsLambdaGroup('aws_lambda', 'Aws Lambda', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AwsLambda element
include('aws-20200911/Service/Compute/AwsLambda')
AwsLambdaGroup('aws_lambda', 'Aws Lambda', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

