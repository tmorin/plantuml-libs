# NiceEnginFrame


```text
aws-q2-2024/Architecture/Compute/NiceEnginFrame
```

```text
include('aws-q2-2024/Architecture/Compute/NiceEnginFrame')
```



| Illustration | NiceEnginFrame | NiceEnginFrameCard | NiceEnginFrameGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/Compute/NiceEnginFrame.png) | ![illustration for NiceEnginFrame](../../../aws-q2-2024/Architecture/Compute/NiceEnginFrame.Local.png) | ![illustration for NiceEnginFrameCard](../../../aws-q2-2024/Architecture/Compute/NiceEnginFrameCard.Local.png) | ![illustration for NiceEnginFrameGroup](../../../aws-q2-2024/Architecture/Compute/NiceEnginFrameGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NiceEnginFrameXs>`
- `<$NiceEnginFrameSm>`
- `<$NiceEnginFrameMd>`
- `<$NiceEnginFrameLg>`





## NiceEnginFrame

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element NiceEnginFrame
include('aws-q2-2024/Architecture/Compute/NiceEnginFrame')

' renders the element
NiceEnginFrame('NiceEnginFrame', 'Nice Engin Frame', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NiceEnginFrame
include('aws-q2-2024/Architecture/Compute/NiceEnginFrame')

' renders the element
NiceEnginFrame('NiceEnginFrame', 'Nice Engin Frame', 'an optional tech label', 'an optional description')
@enduml
```

## NiceEnginFrameCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element NiceEnginFrameCard
include('aws-q2-2024/Architecture/Compute/NiceEnginFrame')

' renders the element
NiceEnginFrameCard('NiceEnginFrameCard', 'Nice Engin Frame Card', 'an optional description')
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

' loads the Item which embeds the element NiceEnginFrameCard
include('aws-q2-2024/Architecture/Compute/NiceEnginFrame')

' renders the element
NiceEnginFrameCard('NiceEnginFrameCard', 'Nice Engin Frame Card', 'an optional description')
@enduml
```

## NiceEnginFrameGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element NiceEnginFrameGroup
include('aws-q2-2024/Architecture/Compute/NiceEnginFrame')

' renders the element
NiceEnginFrameGroup('NiceEnginFrameGroup', 'Nice Engin Frame Group', 'an optional tech label') {
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

' loads the Item which embeds the element NiceEnginFrameGroup
include('aws-q2-2024/Architecture/Compute/NiceEnginFrame')

' renders the element
NiceEnginFrameGroup('NiceEnginFrameGroup', 'Nice Engin Frame Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

