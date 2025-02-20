# ServiceCloudServicesClassic


```text
azure-20/Item/Compute/ServiceCloudServicesClassic
```

```text
include('azure-20/Item/Compute/ServiceCloudServicesClassic')
```



| Illustration | ServiceCloudServicesClassic | ServiceCloudServicesClassicCard | ServiceCloudServicesClassicGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Compute/ServiceCloudServicesClassic.png) | ![illustration for ServiceCloudServicesClassic](../../../azure-20/Item/Compute/ServiceCloudServicesClassic.Local.png) | ![illustration for ServiceCloudServicesClassicCard](../../../azure-20/Item/Compute/ServiceCloudServicesClassicCard.Local.png) | ![illustration for ServiceCloudServicesClassicGroup](../../../azure-20/Item/Compute/ServiceCloudServicesClassicGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceCloudServicesClassicXs>`
- `<$ServiceCloudServicesClassicSm>`
- `<$ServiceCloudServicesClassicMd>`
- `<$ServiceCloudServicesClassicLg>`





## ServiceCloudServicesClassic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCloudServicesClassic
include('azure-20/Item/Compute/ServiceCloudServicesClassic')

' renders the element
ServiceCloudServicesClassic('ServiceCloudServicesClassic', 'Service Cloud Services Classic', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCloudServicesClassic
include('azure-20/Item/Compute/ServiceCloudServicesClassic')

' renders the element
ServiceCloudServicesClassic('ServiceCloudServicesClassic', 'Service Cloud Services Classic', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceCloudServicesClassicCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCloudServicesClassicCard
include('azure-20/Item/Compute/ServiceCloudServicesClassic')

' renders the element
ServiceCloudServicesClassicCard('ServiceCloudServicesClassicCard', 'Service Cloud Services Classic Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCloudServicesClassicCard
include('azure-20/Item/Compute/ServiceCloudServicesClassic')

' renders the element
ServiceCloudServicesClassicCard('ServiceCloudServicesClassicCard', 'Service Cloud Services Classic Card', 'an optional description')
@enduml
```

## ServiceCloudServicesClassicGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCloudServicesClassicGroup
include('azure-20/Item/Compute/ServiceCloudServicesClassic')

' renders the element
ServiceCloudServicesClassicGroup('ServiceCloudServicesClassicGroup', 'Service Cloud Services Classic Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCloudServicesClassicGroup
include('azure-20/Item/Compute/ServiceCloudServicesClassic')

' renders the element
ServiceCloudServicesClassicGroup('ServiceCloudServicesClassicGroup', 'Service Cloud Services Classic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

