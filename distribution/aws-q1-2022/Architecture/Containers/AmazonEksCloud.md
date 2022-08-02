# AmazonEksCloud


```text
aws-q1-2022/Architecture/Containers/AmazonEksCloud
```

```text
include('aws-q1-2022/Architecture/Containers/AmazonEksCloud')
```



| Illustration | AmazonEksCloud | AmazonEksCloudCard | AmazonEksCloudGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/Containers/AmazonEksCloud.png) | ![illustration for AmazonEksCloud](../../../aws-q1-2022/Architecture/Containers/AmazonEksCloud.Local.png) | ![illustration for AmazonEksCloudCard](../../../aws-q1-2022/Architecture/Containers/AmazonEksCloudCard.Local.png) | ![illustration for AmazonEksCloudGroup](../../../aws-q1-2022/Architecture/Containers/AmazonEksCloudGroup.Local.png) |




## AmazonEksCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEksCloud
include('aws-q1-2022/Architecture/Containers/AmazonEksCloud')

' renders the element
AmazonEksCloud('AmazonEksCloud', 'Amazon Eks Cloud', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEksCloud
include('aws-q1-2022/Architecture/Containers/AmazonEksCloud')

' renders the element
AmazonEksCloud('AmazonEksCloud', 'Amazon Eks Cloud', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEksCloudCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEksCloudCard
include('aws-q1-2022/Architecture/Containers/AmazonEksCloud')

' renders the element
AmazonEksCloudCard('AmazonEksCloudCard', 'Amazon Eks Cloud Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEksCloudCard
include('aws-q1-2022/Architecture/Containers/AmazonEksCloud')

' renders the element
AmazonEksCloudCard('AmazonEksCloudCard', 'Amazon Eks Cloud Card', 'an optional description')
@enduml
```

## AmazonEksCloudGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEksCloudGroup
include('aws-q1-2022/Architecture/Containers/AmazonEksCloud')

' renders the element
AmazonEksCloudGroup('AmazonEksCloudGroup', 'Amazon Eks Cloud Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEksCloudGroup
include('aws-q1-2022/Architecture/Containers/AmazonEksCloud')

' renders the element
AmazonEksCloudGroup('AmazonEksCloudGroup', 'Amazon Eks Cloud Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

