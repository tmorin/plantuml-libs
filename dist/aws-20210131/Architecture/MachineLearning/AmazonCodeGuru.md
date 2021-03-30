# Amazon Code Guru

```text
aws-20210131/Architecture/MachineLearning/AmazonCodeGuru
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonCodeGuru.png)|![](AmazonCodeGuru.card.png)|![](AmazonCodeGuru.element.png)|![](AmazonCodeGuru.group.png)|



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
' loads the AmazonCodeGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
AmazonCodeGuruCard('amazon_code_guru', 'Amazon Code Guru', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonCodeGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
AmazonCodeGuruCard('amazon_code_guru', 'Amazon Code Guru', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonCodeGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
AmazonCodeGuru('amazon_code_guru', 'Amazon Code Guru', 'an optional tech field')
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
' loads the AmazonCodeGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
AmazonCodeGuru('amazon_code_guru', 'Amazon Code Guru', 'an optional tech field')
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
' loads the AmazonCodeGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
AmazonCodeGuruGroup('amazon_code_guru', 'Amazon Code Guru', 'an optional tech field'){
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
' loads the AmazonCodeGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
AmazonCodeGuruGroup('amazon_code_guru', 'Amazon Code Guru', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

