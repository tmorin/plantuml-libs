# AwsSnowballEdge


```text
aws-q2-2024/Architecture/Storage/AwsSnowballEdge
```

```text
include('aws-q2-2024/Architecture/Storage/AwsSnowballEdge')
```



| Illustration | AwsSnowballEdge | AwsSnowballEdgeCard | AwsSnowballEdgeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/Storage/AwsSnowballEdge.png) | ![illustration for AwsSnowballEdge](../../../aws-q2-2024/Architecture/Storage/AwsSnowballEdge.Local.png) | ![illustration for AwsSnowballEdgeCard](../../../aws-q2-2024/Architecture/Storage/AwsSnowballEdgeCard.Local.png) | ![illustration for AwsSnowballEdgeGroup](../../../aws-q2-2024/Architecture/Storage/AwsSnowballEdgeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsSnowballEdgeXs>`
- `<$AwsSnowballEdgeSm>`
- `<$AwsSnowballEdgeMd>`
- `<$AwsSnowballEdgeLg>`





## AwsSnowballEdge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsSnowballEdge
include('aws-q2-2024/Architecture/Storage/AwsSnowballEdge')

' renders the element
AwsSnowballEdge('AwsSnowballEdge', 'Aws Snowball Edge', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsSnowballEdge
include('aws-q2-2024/Architecture/Storage/AwsSnowballEdge')

' renders the element
AwsSnowballEdge('AwsSnowballEdge', 'Aws Snowball Edge', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSnowballEdgeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsSnowballEdgeCard
include('aws-q2-2024/Architecture/Storage/AwsSnowballEdge')

' renders the element
AwsSnowballEdgeCard('AwsSnowballEdgeCard', 'Aws Snowball Edge Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsSnowballEdgeCard
include('aws-q2-2024/Architecture/Storage/AwsSnowballEdge')

' renders the element
AwsSnowballEdgeCard('AwsSnowballEdgeCard', 'Aws Snowball Edge Card', 'an optional description')
@enduml
```

## AwsSnowballEdgeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsSnowballEdgeGroup
include('aws-q2-2024/Architecture/Storage/AwsSnowballEdge')

' renders the element
AwsSnowballEdgeGroup('AwsSnowballEdgeGroup', 'Aws Snowball Edge Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsSnowballEdgeGroup
include('aws-q2-2024/Architecture/Storage/AwsSnowballEdge')

' renders the element
AwsSnowballEdgeGroup('AwsSnowballEdgeGroup', 'Aws Snowball Edge Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

