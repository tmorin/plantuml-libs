# ServiceImmersiveReaders


```text
azure/Item/AiMachineLearning/ServiceImmersiveReaders
```

```text
include('azure/Item/AiMachineLearning/ServiceImmersiveReaders')
```



| Illustration | ServiceImmersiveReaders | ServiceImmersiveReadersCard | ServiceImmersiveReadersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/AiMachineLearning/ServiceImmersiveReaders.png) | ![illustration for ServiceImmersiveReaders](../../../azure/Item/AiMachineLearning/ServiceImmersiveReaders.Local.png) | ![illustration for ServiceImmersiveReadersCard](../../../azure/Item/AiMachineLearning/ServiceImmersiveReadersCard.Local.png) | ![illustration for ServiceImmersiveReadersGroup](../../../azure/Item/AiMachineLearning/ServiceImmersiveReadersGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceImmersiveReadersXs>`
- `<$ServiceImmersiveReadersSm>`
- `<$ServiceImmersiveReadersMd>`
- `<$ServiceImmersiveReadersLg>`





## ServiceImmersiveReaders

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceImmersiveReaders
include('azure/Item/AiMachineLearning/ServiceImmersiveReaders')

' renders the element
ServiceImmersiveReaders('ServiceImmersiveReaders', 'Service Immersive Readers', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceImmersiveReaders
include('azure/Item/AiMachineLearning/ServiceImmersiveReaders')

' renders the element
ServiceImmersiveReaders('ServiceImmersiveReaders', 'Service Immersive Readers', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceImmersiveReadersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceImmersiveReadersCard
include('azure/Item/AiMachineLearning/ServiceImmersiveReaders')

' renders the element
ServiceImmersiveReadersCard('ServiceImmersiveReadersCard', 'Service Immersive Readers Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceImmersiveReadersCard
include('azure/Item/AiMachineLearning/ServiceImmersiveReaders')

' renders the element
ServiceImmersiveReadersCard('ServiceImmersiveReadersCard', 'Service Immersive Readers Card', 'an optional description')
@enduml
```

## ServiceImmersiveReadersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceImmersiveReadersGroup
include('azure/Item/AiMachineLearning/ServiceImmersiveReaders')

' renders the element
ServiceImmersiveReadersGroup('ServiceImmersiveReadersGroup', 'Service Immersive Readers Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceImmersiveReadersGroup
include('azure/Item/AiMachineLearning/ServiceImmersiveReaders')

' renders the element
ServiceImmersiveReadersGroup('ServiceImmersiveReadersGroup', 'Service Immersive Readers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

