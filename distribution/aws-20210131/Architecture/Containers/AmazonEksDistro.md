# AmazonEksDistro


```text
aws-20210131/Architecture/Containers/AmazonEksDistro
```

```text
include('aws-20210131/Architecture/Containers/AmazonEksDistro')
```



| Illustration | AmazonEksDistro | AmazonEksDistroCard | AmazonEksDistroGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Containers/AmazonEksDistro.png) | ![illustration for AmazonEksDistro](../../../aws-20210131/Architecture/Containers/AmazonEksDistro.Local.png) | ![illustration for AmazonEksDistroCard](../../../aws-20210131/Architecture/Containers/AmazonEksDistroCard.Local.png) | ![illustration for AmazonEksDistroGroup](../../../aws-20210131/Architecture/Containers/AmazonEksDistroGroup.Local.png) |




## AmazonEksDistro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEksDistro
include('aws-20210131/Architecture/Containers/AmazonEksDistro')

' renders the element
AmazonEksDistro('AmazonEksDistro', 'Amazon Eks Distro', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEksDistro
include('aws-20210131/Architecture/Containers/AmazonEksDistro')

' renders the element
AmazonEksDistro('AmazonEksDistro', 'Amazon Eks Distro', 'an optional tech label')
@enduml
```

## AmazonEksDistroCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEksDistroCard
include('aws-20210131/Architecture/Containers/AmazonEksDistro')

' renders the element
AmazonEksDistroCard('AmazonEksDistroCard', 'Amazon Eks Distro Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEksDistroCard
include('aws-20210131/Architecture/Containers/AmazonEksDistro')

' renders the element
AmazonEksDistroCard('AmazonEksDistroCard', 'Amazon Eks Distro Card', 'an optional description')
@enduml
```

## AmazonEksDistroGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEksDistroGroup
include('aws-20210131/Architecture/Containers/AmazonEksDistro')

' renders the element
AmazonEksDistroGroup('AmazonEksDistroGroup', 'Amazon Eks Distro Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEksDistroGroup
include('aws-20210131/Architecture/Containers/AmazonEksDistro')

' renders the element
AmazonEksDistroGroup('AmazonEksDistroGroup', 'Amazon Eks Distro Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

