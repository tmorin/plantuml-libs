# Amazon Eks Cloud

```text
aws-20210131/Architecture/Containers/AmazonEksCloud
```

```text
include('aws-20210131/Architecture/Containers/AmazonEksCloud')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEksCloud.png)|![](AmazonEksCloud.card.png)|![](AmazonEksCloud.element.png)|![](AmazonEksCloud.group.png)|



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
' loads the AmazonEksCloud element
include('aws-20210131/Architecture/Containers/AmazonEksCloud')
AmazonEksCloudCard('amazon_eks_cloud', 'Amazon Eks Cloud', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEksCloud element
include('aws-20210131/Architecture/Containers/AmazonEksCloud')
AmazonEksCloudCard('amazon_eks_cloud', 'Amazon Eks Cloud', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEksCloud element
include('aws-20210131/Architecture/Containers/AmazonEksCloud')
AmazonEksCloud('amazon_eks_cloud', 'Amazon Eks Cloud', 'an optional tech field')
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
' loads the AmazonEksCloud element
include('aws-20210131/Architecture/Containers/AmazonEksCloud')
AmazonEksCloud('amazon_eks_cloud', 'Amazon Eks Cloud', 'an optional tech field')
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
' loads the AmazonEksCloud element
include('aws-20210131/Architecture/Containers/AmazonEksCloud')
AmazonEksCloudGroup('amazon_eks_cloud', 'Amazon Eks Cloud', 'an optional tech field'){
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
' loads the AmazonEksCloud element
include('aws-20210131/Architecture/Containers/AmazonEksCloud')
AmazonEksCloudGroup('amazon_eks_cloud', 'Amazon Eks Cloud', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

