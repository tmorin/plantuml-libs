# AmazonEcsAnywhere


```text
aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere
```

```text
include('aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere')
```



| Illustration | AmazonEcsAnywhere | AmazonEcsAnywhereCard | AmazonEcsAnywhereGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere.png) | ![illustration for AmazonEcsAnywhere](../../../aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere.Local.png) | ![illustration for AmazonEcsAnywhereCard](../../../aws-q2-2022/Architecture/Containers/AmazonEcsAnywhereCard.Local.png) | ![illustration for AmazonEcsAnywhereGroup](../../../aws-q2-2022/Architecture/Containers/AmazonEcsAnywhereGroup.Local.png) |




## AmazonEcsAnywhere

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEcsAnywhere
include('aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere')

' renders the element
AmazonEcsAnywhere('AmazonEcsAnywhere', 'Amazon Ecs Anywhere', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEcsAnywhere
include('aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere')

' renders the element
AmazonEcsAnywhere('AmazonEcsAnywhere', 'Amazon Ecs Anywhere', 'an optional tech label')
@enduml
```

## AmazonEcsAnywhereCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEcsAnywhereCard
include('aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere')

' renders the element
AmazonEcsAnywhereCard('AmazonEcsAnywhereCard', 'Amazon Ecs Anywhere Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEcsAnywhereCard
include('aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere')

' renders the element
AmazonEcsAnywhereCard('AmazonEcsAnywhereCard', 'Amazon Ecs Anywhere Card', 'an optional description')
@enduml
```

## AmazonEcsAnywhereGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEcsAnywhereGroup
include('aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere')

' renders the element
AmazonEcsAnywhereGroup('AmazonEcsAnywhereGroup', 'Amazon Ecs Anywhere Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEcsAnywhereGroup
include('aws-q2-2022/Architecture/Containers/AmazonEcsAnywhere')

' renders the element
AmazonEcsAnywhereGroup('AmazonEcsAnywhereGroup', 'Amazon Ecs Anywhere Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

