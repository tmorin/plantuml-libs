# Aws Bottlerocket

```text
aws-20200911/Service/Compute/AwsBottlerocket
```

```text
include('aws-20200911/Service/Compute/AwsBottlerocket')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsBottlerocket.png)|![](AwsBottlerocket.card.png)|![](AwsBottlerocket.element.png)|![](AwsBottlerocket.group.png)|



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
' loads the AwsBottlerocket element
include('aws-20200911/Service/Compute/AwsBottlerocket')
AwsBottlerocketCard('aws_bottlerocket', 'Aws Bottlerocket', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsBottlerocket element
include('aws-20200911/Service/Compute/AwsBottlerocket')
AwsBottlerocketCard('aws_bottlerocket', 'Aws Bottlerocket', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsBottlerocket element
include('aws-20200911/Service/Compute/AwsBottlerocket')
AwsBottlerocket('aws_bottlerocket', 'Aws Bottlerocket', 'an optional tech field')
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
' loads the AwsBottlerocket element
include('aws-20200911/Service/Compute/AwsBottlerocket')
AwsBottlerocket('aws_bottlerocket', 'Aws Bottlerocket', 'an optional tech field')
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
' loads the AwsBottlerocket element
include('aws-20200911/Service/Compute/AwsBottlerocket')
AwsBottlerocketGroup('aws_bottlerocket', 'Aws Bottlerocket', 'an optional tech field'){
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
' loads the AwsBottlerocket element
include('aws-20200911/Service/Compute/AwsBottlerocket')
AwsBottlerocketGroup('aws_bottlerocket', 'Aws Bottlerocket', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

