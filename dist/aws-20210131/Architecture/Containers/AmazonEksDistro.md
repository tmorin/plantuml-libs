# Amazon Eks Distro

```text
aws-20210131/Architecture/Containers/AmazonEksDistro
```

```text
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEksDistro.png)|![](AmazonEksDistro.card.png)|![](AmazonEksDistro.element.png)|![](AmazonEksDistro.group.png)|



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
' loads the AmazonEksDistro element
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
AmazonEksDistroCard('amazon_eks_distro', 'Amazon Eks Distro', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEksDistro element
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
AmazonEksDistroCard('amazon_eks_distro', 'Amazon Eks Distro', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEksDistro element
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
AmazonEksDistro('amazon_eks_distro', 'Amazon Eks Distro', 'an optional tech field')
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
' loads the AmazonEksDistro element
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
AmazonEksDistro('amazon_eks_distro', 'Amazon Eks Distro', 'an optional tech field')
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
' loads the AmazonEksDistro element
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
AmazonEksDistroGroup('amazon_eks_distro', 'Amazon Eks Distro', 'an optional tech field'){
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
' loads the AmazonEksDistro element
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
AmazonEksDistroGroup('amazon_eks_distro', 'Amazon Eks Distro', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

