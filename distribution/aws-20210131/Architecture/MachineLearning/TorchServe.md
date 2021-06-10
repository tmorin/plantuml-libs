# TorchServe


```text
aws-20210131/Architecture/MachineLearning/TorchServe
```

```text
include('aws-20210131/Architecture/MachineLearning/TorchServe')
```



| Illustration | TorchServe | TorchServeCard | TorchServeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MachineLearning/TorchServe.png) | ![illustration for TorchServe](../../../aws-20210131/Architecture/MachineLearning/TorchServe.Local.png) | ![illustration for TorchServeCard](../../../aws-20210131/Architecture/MachineLearning/TorchServeCard.Local.png) | ![illustration for TorchServeGroup](../../../aws-20210131/Architecture/MachineLearning/TorchServeGroup.Local.png) |




## TorchServe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element TorchServe
include('aws-20210131/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServe('TorchServe', 'Torch Serve', 'an optional tech label')
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

' loads the Item which embeds the element TorchServe
include('aws-20210131/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServe('TorchServe', 'Torch Serve', 'an optional tech label')
@enduml
```

## TorchServeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element TorchServeCard
include('aws-20210131/Architecture/MachineLearning/TorchServe')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element TorchServeCard
include('aws-20210131/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServeCard('TorchServeCard', 'Torch Serve Card', 'an optional description')
@enduml
```

## TorchServeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element TorchServeGroup
include('aws-20210131/Architecture/MachineLearning/TorchServe')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element TorchServeGroup
include('aws-20210131/Architecture/MachineLearning/TorchServe')

' renders the element
TorchServeGroup('TorchServeGroup', 'Torch Serve Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

