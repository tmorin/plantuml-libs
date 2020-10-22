# Aws Kendra

```text
aws-20200430/Item/MachineLearning/AwsKendra
```

```text
include('aws-20200430/Item/MachineLearning/AwsKendra')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsKendra.png)|![](AwsKendra.card.png)|![](AwsKendra.element.png)|![](AwsKendra.group.png)|



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
' loads the AwsKendra element
include('aws-20200430/Item/MachineLearning/AwsKendra')
AwsKendraCard('aws_kendra', 'Aws Kendra', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsKendra element
include('aws-20200430/Item/MachineLearning/AwsKendra')
AwsKendraCard('aws_kendra', 'Aws Kendra', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsKendra element
include('aws-20200430/Item/MachineLearning/AwsKendra')
AwsKendra('aws_kendra', 'Aws Kendra', 'an optional tech field')
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
' loads the AwsKendra element
include('aws-20200430/Item/MachineLearning/AwsKendra')
AwsKendra('aws_kendra', 'Aws Kendra', 'an optional tech field')
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
' loads the AwsKendra element
include('aws-20200430/Item/MachineLearning/AwsKendra')
AwsKendraGroup('aws_kendra', 'Aws Kendra', 'an optional tech field'){
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
' loads the AwsKendra element
include('aws-20200430/Item/MachineLearning/AwsKendra')
AwsKendraGroup('aws_kendra', 'Aws Kendra', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

