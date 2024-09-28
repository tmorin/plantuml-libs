# ServiceBotServices


```text
azure-19/Item/AiMachineLearning/ServiceBotServices
```

```text
include('azure-19/Item/AiMachineLearning/ServiceBotServices')
```



| Illustration | ServiceBotServices | ServiceBotServicesCard | ServiceBotServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/AiMachineLearning/ServiceBotServices.png) | ![illustration for ServiceBotServices](../../../azure-19/Item/AiMachineLearning/ServiceBotServices.Local.png) | ![illustration for ServiceBotServicesCard](../../../azure-19/Item/AiMachineLearning/ServiceBotServicesCard.Local.png) | ![illustration for ServiceBotServicesGroup](../../../azure-19/Item/AiMachineLearning/ServiceBotServicesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceBotServicesXs>`
- `<$ServiceBotServicesSm>`
- `<$ServiceBotServicesMd>`
- `<$ServiceBotServicesLg>`





## ServiceBotServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceBotServices
include('azure-19/Item/AiMachineLearning/ServiceBotServices')

' renders the element
ServiceBotServices('ServiceBotServices', 'Service Bot Services', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceBotServices
include('azure-19/Item/AiMachineLearning/ServiceBotServices')

' renders the element
ServiceBotServices('ServiceBotServices', 'Service Bot Services', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceBotServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceBotServicesCard
include('azure-19/Item/AiMachineLearning/ServiceBotServices')

' renders the element
ServiceBotServicesCard('ServiceBotServicesCard', 'Service Bot Services Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceBotServicesCard
include('azure-19/Item/AiMachineLearning/ServiceBotServices')

' renders the element
ServiceBotServicesCard('ServiceBotServicesCard', 'Service Bot Services Card', 'an optional description')
@enduml
```

## ServiceBotServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceBotServicesGroup
include('azure-19/Item/AiMachineLearning/ServiceBotServices')

' renders the element
ServiceBotServicesGroup('ServiceBotServicesGroup', 'Service Bot Services Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceBotServicesGroup
include('azure-19/Item/AiMachineLearning/ServiceBotServices')

' renders the element
ServiceBotServicesGroup('ServiceBotServicesGroup', 'Service Bot Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

