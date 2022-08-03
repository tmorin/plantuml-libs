# ServiceAzureAdIdentityProtection


```text
azure-4/Item/Identity/ServiceAzureAdIdentityProtection
```

```text
include('azure-4/Item/Identity/ServiceAzureAdIdentityProtection')
```



| Illustration | ServiceAzureAdIdentityProtection | ServiceAzureAdIdentityProtectionCard | ServiceAzureAdIdentityProtectionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Identity/ServiceAzureAdIdentityProtection.png) | ![illustration for ServiceAzureAdIdentityProtection](../../../azure-4/Item/Identity/ServiceAzureAdIdentityProtection.Local.png) | ![illustration for ServiceAzureAdIdentityProtectionCard](../../../azure-4/Item/Identity/ServiceAzureAdIdentityProtectionCard.Local.png) | ![illustration for ServiceAzureAdIdentityProtectionGroup](../../../azure-4/Item/Identity/ServiceAzureAdIdentityProtectionGroup.Local.png) |




## ServiceAzureAdIdentityProtection

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureAdIdentityProtection
include('azure-4/Item/Identity/ServiceAzureAdIdentityProtection')

' renders the element
ServiceAzureAdIdentityProtection('ServiceAzureAdIdentityProtection', 'Service Azure Ad Identity Protection', 'an optional tech label', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureAdIdentityProtection
include('azure-4/Item/Identity/ServiceAzureAdIdentityProtection')

' renders the element
ServiceAzureAdIdentityProtection('ServiceAzureAdIdentityProtection', 'Service Azure Ad Identity Protection', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureAdIdentityProtectionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureAdIdentityProtectionCard
include('azure-4/Item/Identity/ServiceAzureAdIdentityProtection')

' renders the element
ServiceAzureAdIdentityProtectionCard('ServiceAzureAdIdentityProtectionCard', 'Service Azure Ad Identity Protection Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureAdIdentityProtectionCard
include('azure-4/Item/Identity/ServiceAzureAdIdentityProtection')

' renders the element
ServiceAzureAdIdentityProtectionCard('ServiceAzureAdIdentityProtectionCard', 'Service Azure Ad Identity Protection Card', 'an optional description')
@enduml
```

## ServiceAzureAdIdentityProtectionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureAdIdentityProtectionGroup
include('azure-4/Item/Identity/ServiceAzureAdIdentityProtection')

' renders the element
ServiceAzureAdIdentityProtectionGroup('ServiceAzureAdIdentityProtectionGroup', 'Service Azure Ad Identity Protection Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureAdIdentityProtectionGroup
include('azure-4/Item/Identity/ServiceAzureAdIdentityProtection')

' renders the element
ServiceAzureAdIdentityProtectionGroup('ServiceAzureAdIdentityProtectionGroup', 'Service Azure Ad Identity Protection Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

