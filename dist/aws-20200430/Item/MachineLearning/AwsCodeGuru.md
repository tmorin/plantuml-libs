# Aws Code Guru

```text
aws-20200430/Item/MachineLearning/AwsCodeGuru
```

```text
include('aws-20200430/Item/MachineLearning/AwsCodeGuru')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCodeGuru.png)|![](AwsCodeGuru.card.png)|![](AwsCodeGuru.element.png)|![](AwsCodeGuru.group.png)|



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
' loads the AwsCodeGuru element
include('aws-20200430/Item/MachineLearning/AwsCodeGuru')
AwsCodeGuruCard('aws_code_guru', 'Aws Code Guru', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodeGuru element
include('aws-20200430/Item/MachineLearning/AwsCodeGuru')
AwsCodeGuruCard('aws_code_guru', 'Aws Code Guru', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCodeGuru element
include('aws-20200430/Item/MachineLearning/AwsCodeGuru')
AwsCodeGuru('aws_code_guru', 'Aws Code Guru', 'an optional tech field')
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
' loads the AwsCodeGuru element
include('aws-20200430/Item/MachineLearning/AwsCodeGuru')
AwsCodeGuru('aws_code_guru', 'Aws Code Guru', 'an optional tech field')
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
' loads the AwsCodeGuru element
include('aws-20200430/Item/MachineLearning/AwsCodeGuru')
AwsCodeGuruGroup('aws_code_guru', 'Aws Code Guru', 'an optional tech field'){
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
' loads the AwsCodeGuru element
include('aws-20200430/Item/MachineLearning/AwsCodeGuru')
AwsCodeGuruGroup('aws_code_guru', 'Aws Code Guru', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

