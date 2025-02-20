# ServiceAzureInformationProtection


```text
azure-20/Item/Identity/ServiceAzureInformationProtection
```

```text
include('azure-20/Item/Identity/ServiceAzureInformationProtection')
```



| Illustration | ServiceAzureInformationProtection | ServiceAzureInformationProtectionCard | ServiceAzureInformationProtectionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Identity/ServiceAzureInformationProtection.png) | ![illustration for ServiceAzureInformationProtection](../../../azure-20/Item/Identity/ServiceAzureInformationProtection.Local.png) | ![illustration for ServiceAzureInformationProtectionCard](../../../azure-20/Item/Identity/ServiceAzureInformationProtectionCard.Local.png) | ![illustration for ServiceAzureInformationProtectionGroup](../../../azure-20/Item/Identity/ServiceAzureInformationProtectionGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureInformationProtectionXs>`
- `<$ServiceAzureInformationProtectionSm>`
- `<$ServiceAzureInformationProtectionMd>`
- `<$ServiceAzureInformationProtectionLg>`





## ServiceAzureInformationProtection

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtection
include('azure-20/Item/Identity/ServiceAzureInformationProtection')

' renders the element
ServiceAzureInformationProtection('ServiceAzureInformationProtection', 'Service Azure Information Protection', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureInformationProtection
include('azure-20/Item/Identity/ServiceAzureInformationProtection')

' renders the element
ServiceAzureInformationProtection('ServiceAzureInformationProtection', 'Service Azure Information Protection', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureInformationProtectionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtectionCard
include('azure-20/Item/Identity/ServiceAzureInformationProtection')

' renders the element
ServiceAzureInformationProtectionCard('ServiceAzureInformationProtectionCard', 'Service Azure Information Protection Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureInformationProtectionCard
include('azure-20/Item/Identity/ServiceAzureInformationProtection')

' renders the element
ServiceAzureInformationProtectionCard('ServiceAzureInformationProtectionCard', 'Service Azure Information Protection Card', 'an optional description')
@enduml
```

## ServiceAzureInformationProtectionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtectionGroup
include('azure-20/Item/Identity/ServiceAzureInformationProtection')

' renders the element
ServiceAzureInformationProtectionGroup('ServiceAzureInformationProtectionGroup', 'Service Azure Information Protection Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureInformationProtectionGroup
include('azure-20/Item/Identity/ServiceAzureInformationProtection')

' renders the element
ServiceAzureInformationProtectionGroup('ServiceAzureInformationProtectionGroup', 'Service Azure Information Protection Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

