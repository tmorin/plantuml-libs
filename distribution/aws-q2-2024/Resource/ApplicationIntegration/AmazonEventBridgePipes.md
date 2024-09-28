# AmazonEventBridgePipes


```text
aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes
```

```text
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes')
```



| Illustration | AmazonEventBridgePipes | AmazonEventBridgePipesCard | AmazonEventBridgePipesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes.png) | ![illustration for AmazonEventBridgePipes](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes.Local.png) | ![illustration for AmazonEventBridgePipesCard](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipesCard.Local.png) | ![illustration for AmazonEventBridgePipesGroup](../../../aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEventBridgePipesXs>`
- `<$AmazonEventBridgePipesSm>`
- `<$AmazonEventBridgePipesMd>`
- `<$AmazonEventBridgePipesLg>`





## AmazonEventBridgePipes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonEventBridgePipes
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes')

' renders the element
AmazonEventBridgePipes('AmazonEventBridgePipes', 'Amazon Event Bridge Pipes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEventBridgePipes
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes')

' renders the element
AmazonEventBridgePipes('AmazonEventBridgePipes', 'Amazon Event Bridge Pipes', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEventBridgePipesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonEventBridgePipesCard
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes')

' renders the element
AmazonEventBridgePipesCard('AmazonEventBridgePipesCard', 'Amazon Event Bridge Pipes Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEventBridgePipesCard
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes')

' renders the element
AmazonEventBridgePipesCard('AmazonEventBridgePipesCard', 'Amazon Event Bridge Pipes Card', 'an optional description')
@enduml
```

## AmazonEventBridgePipesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonEventBridgePipesGroup
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes')

' renders the element
AmazonEventBridgePipesGroup('AmazonEventBridgePipesGroup', 'Amazon Event Bridge Pipes Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEventBridgePipesGroup
include('aws-q2-2024/Resource/ApplicationIntegration/AmazonEventBridgePipes')

' renders the element
AmazonEventBridgePipesGroup('AmazonEventBridgePipesGroup', 'Amazon Event Bridge Pipes Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

