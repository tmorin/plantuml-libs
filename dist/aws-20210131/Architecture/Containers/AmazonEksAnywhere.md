# Amazon Eks Anywhere

```text
aws-20210131/Architecture/Containers/AmazonEksAnywhere
```

```text
include('aws-20210131/Architecture/Containers/AmazonEksAnywhere')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEksAnywhere.png)|![](AmazonEksAnywhere.card.png)|![](AmazonEksAnywhere.element.png)|![](AmazonEksAnywhere.group.png)|



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
' loads the AmazonEksAnywhere element
include('aws-20210131/Architecture/Containers/AmazonEksAnywhere')
AmazonEksAnywhereCard('amazon_eks_anywhere', 'Amazon Eks Anywhere', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEksAnywhere element
include('aws-20210131/Architecture/Containers/AmazonEksAnywhere')
AmazonEksAnywhereCard('amazon_eks_anywhere', 'Amazon Eks Anywhere', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEksAnywhere element
include('aws-20210131/Architecture/Containers/AmazonEksAnywhere')
AmazonEksAnywhere('amazon_eks_anywhere', 'Amazon Eks Anywhere', 'an optional tech field')
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
' loads the AmazonEksAnywhere element
include('aws-20210131/Architecture/Containers/AmazonEksAnywhere')
AmazonEksAnywhere('amazon_eks_anywhere', 'Amazon Eks Anywhere', 'an optional tech field')
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
' loads the AmazonEksAnywhere element
include('aws-20210131/Architecture/Containers/AmazonEksAnywhere')
AmazonEksAnywhereGroup('amazon_eks_anywhere', 'Amazon Eks Anywhere', 'an optional tech field'){
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
' loads the AmazonEksAnywhere element
include('aws-20210131/Architecture/Containers/AmazonEksAnywhere')
AmazonEksAnywhereGroup('amazon_eks_anywhere', 'Amazon Eks Anywhere', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

