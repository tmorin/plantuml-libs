# ServiceAzureInformationProtection


```text
azure-6/Item/Identity/ServiceAzureInformationProtection
```

```text
include('azure-6/Item/Identity/ServiceAzureInformationProtection')
```



| Illustration | ServiceAzureInformationProtection | ServiceAzureInformationProtectionCard | ServiceAzureInformationProtectionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Identity/ServiceAzureInformationProtection.png) | ![illustration for ServiceAzureInformationProtection](../../../azure-6/Item/Identity/ServiceAzureInformationProtection.Local.png) | ![illustration for ServiceAzureInformationProtectionCard](../../../azure-6/Item/Identity/ServiceAzureInformationProtectionCard.Local.png) | ![illustration for ServiceAzureInformationProtectionGroup](../../../azure-6/Item/Identity/ServiceAzureInformationProtectionGroup.Local.png) |




## ServiceAzureInformationProtection

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtection
include('azure-6/Item/Identity/ServiceAzureInformationProtection')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtection
include('azure-6/Item/Identity/ServiceAzureInformationProtection')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtectionCard
include('azure-6/Item/Identity/ServiceAzureInformationProtection')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtectionCard
include('azure-6/Item/Identity/ServiceAzureInformationProtection')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtectionGroup
include('azure-6/Item/Identity/ServiceAzureInformationProtection')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureInformationProtectionGroup
include('azure-6/Item/Identity/ServiceAzureInformationProtection')

' renders the element
ServiceAzureInformationProtectionGroup('ServiceAzureInformationProtectionGroup', 'Service Azure Information Protection Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

