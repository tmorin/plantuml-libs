# ServiceAzureStack


```text
azure-19/Item/Iot/ServiceAzureStack
```

```text
include('azure-19/Item/Iot/ServiceAzureStack')
```



| Illustration | ServiceAzureStack | ServiceAzureStackCard | ServiceAzureStackGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Iot/ServiceAzureStack.png) | ![illustration for ServiceAzureStack](../../../azure-19/Item/Iot/ServiceAzureStack.Local.png) | ![illustration for ServiceAzureStackCard](../../../azure-19/Item/Iot/ServiceAzureStackCard.Local.png) | ![illustration for ServiceAzureStackGroup](../../../azure-19/Item/Iot/ServiceAzureStackGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureStackXs>`
- `<$ServiceAzureStackSm>`
- `<$ServiceAzureStackMd>`
- `<$ServiceAzureStackLg>`





## ServiceAzureStack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureStack
include('azure-19/Item/Iot/ServiceAzureStack')

' renders the element
ServiceAzureStack('ServiceAzureStack', 'Service Azure Stack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureStack
include('azure-19/Item/Iot/ServiceAzureStack')

' renders the element
ServiceAzureStack('ServiceAzureStack', 'Service Azure Stack', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureStackCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureStackCard
include('azure-19/Item/Iot/ServiceAzureStack')

' renders the element
ServiceAzureStackCard('ServiceAzureStackCard', 'Service Azure Stack Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureStackCard
include('azure-19/Item/Iot/ServiceAzureStack')

' renders the element
ServiceAzureStackCard('ServiceAzureStackCard', 'Service Azure Stack Card', 'an optional description')
@enduml
```

## ServiceAzureStackGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureStackGroup
include('azure-19/Item/Iot/ServiceAzureStack')

' renders the element
ServiceAzureStackGroup('ServiceAzureStackGroup', 'Service Azure Stack Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureStackGroup
include('azure-19/Item/Iot/ServiceAzureStack')

' renders the element
ServiceAzureStackGroup('ServiceAzureStackGroup', 'Service Azure Stack Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

