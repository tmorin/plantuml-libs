# TensorFlowOnAws


```text
aws/Architecture/ArtificialIntelligence/TensorFlowOnAws
```

```text
include('aws/Architecture/ArtificialIntelligence/TensorFlowOnAws')
```



| Illustration | TensorFlowOnAws | TensorFlowOnAwsCard | TensorFlowOnAwsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ArtificialIntelligence/TensorFlowOnAws.png) | ![illustration for TensorFlowOnAws](../../../aws/Architecture/ArtificialIntelligence/TensorFlowOnAws.Local.png) | ![illustration for TensorFlowOnAwsCard](../../../aws/Architecture/ArtificialIntelligence/TensorFlowOnAwsCard.Local.png) | ![illustration for TensorFlowOnAwsGroup](../../../aws/Architecture/ArtificialIntelligence/TensorFlowOnAwsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TensorFlowOnAwsXs>`
- `<$TensorFlowOnAwsSm>`
- `<$TensorFlowOnAwsMd>`
- `<$TensorFlowOnAwsLg>`





## TensorFlowOnAws

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element TensorFlowOnAws
include('aws/Architecture/ArtificialIntelligence/TensorFlowOnAws')

' renders the element
TensorFlowOnAws('TensorFlowOnAws', 'Tensor Flow On Aws', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element TensorFlowOnAws
include('aws/Architecture/ArtificialIntelligence/TensorFlowOnAws')

' renders the element
TensorFlowOnAws('TensorFlowOnAws', 'Tensor Flow On Aws', 'an optional tech label', 'an optional description')
@enduml
```

## TensorFlowOnAwsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element TensorFlowOnAwsCard
include('aws/Architecture/ArtificialIntelligence/TensorFlowOnAws')

' renders the element
TensorFlowOnAwsCard('TensorFlowOnAwsCard', 'Tensor Flow On Aws Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element TensorFlowOnAwsCard
include('aws/Architecture/ArtificialIntelligence/TensorFlowOnAws')

' renders the element
TensorFlowOnAwsCard('TensorFlowOnAwsCard', 'Tensor Flow On Aws Card', 'an optional description')
@enduml
```

## TensorFlowOnAwsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element TensorFlowOnAwsGroup
include('aws/Architecture/ArtificialIntelligence/TensorFlowOnAws')

' renders the element
TensorFlowOnAwsGroup('TensorFlowOnAwsGroup', 'Tensor Flow On Aws Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element TensorFlowOnAwsGroup
include('aws/Architecture/ArtificialIntelligence/TensorFlowOnAws')

' renders the element
TensorFlowOnAwsGroup('TensorFlowOnAwsGroup', 'Tensor Flow On Aws Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

