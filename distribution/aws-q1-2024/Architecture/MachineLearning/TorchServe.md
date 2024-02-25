# TorchServe


```text
aws-q1-2024/Architecture/MachineLearning/TorchServe
```

```text
include('aws-q1-2024/Architecture/MachineLearning/TorchServe')
```



| Illustration | TorchServe | TorchServeCard | TorchServeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/MachineLearning/TorchServe.png) | ![illustration for TorchServe](../../../aws-q1-2024/Architecture/MachineLearning/TorchServe.Local.png) | ![illustration for TorchServeCard](../../../aws-q1-2024/Architecture/MachineLearning/TorchServeCard.Local.png) | ![illustration for TorchServeGroup](../../../aws-q1-2024/Architecture/MachineLearning/TorchServeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TorchServeXs>`
- `<$TorchServeSm>`
- `<$TorchServeMd>`
- `<$TorchServeLg>`





## TorchServe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element TorchServe
include('aws-q1-2024/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServe('TorchServe', 'Torch Serve', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element TorchServe
include('aws-q1-2024/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServe('TorchServe', 'Torch Serve', 'an optional tech label', 'an optional description')
@enduml
```

## TorchServeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element TorchServeCard
include('aws-q1-2024/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServeCard('TorchServeCard', 'Torch Serve Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element TorchServeCard
include('aws-q1-2024/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServeCard('TorchServeCard', 'Torch Serve Card', 'an optional description')
@enduml
```

## TorchServeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element TorchServeGroup
include('aws-q1-2024/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServeGroup('TorchServeGroup', 'Torch Serve Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element TorchServeGroup
include('aws-q1-2024/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServeGroup('TorchServeGroup', 'Torch Serve Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

