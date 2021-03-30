# Amazon Dev Ops Guru

```text
aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonDevOpsGuru.png)|![](AmazonDevOpsGuru.card.png)|![](AmazonDevOpsGuru.element.png)|![](AmazonDevOpsGuru.group.png)|



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
' loads the AmazonDevOpsGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru')
AmazonDevOpsGuruCard('amazon_dev_ops_guru', 'Amazon Dev Ops Guru', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDevOpsGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru')
AmazonDevOpsGuruCard('amazon_dev_ops_guru', 'Amazon Dev Ops Guru', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDevOpsGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru')
AmazonDevOpsGuru('amazon_dev_ops_guru', 'Amazon Dev Ops Guru', 'an optional tech field')
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
' loads the AmazonDevOpsGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru')
AmazonDevOpsGuru('amazon_dev_ops_guru', 'Amazon Dev Ops Guru', 'an optional tech field')
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
' loads the AmazonDevOpsGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru')
AmazonDevOpsGuruGroup('amazon_dev_ops_guru', 'Amazon Dev Ops Guru', 'an optional tech field'){
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
' loads the AmazonDevOpsGuru element
include('aws-20210131/Architecture/MachineLearning/AmazonDevOpsGuru')
AmazonDevOpsGuruGroup('amazon_dev_ops_guru', 'Amazon Dev Ops Guru', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

