# ServiceAzureAdAuthenticationMethods


```text
azure-17/Item/Security/ServiceAzureAdAuthenticationMethods
```

```text
include('azure-17/Item/Security/ServiceAzureAdAuthenticationMethods')
```



| Illustration | ServiceAzureAdAuthenticationMethods | ServiceAzureAdAuthenticationMethodsCard | ServiceAzureAdAuthenticationMethodsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Security/ServiceAzureAdAuthenticationMethods.png) | ![illustration for ServiceAzureAdAuthenticationMethods](../../../azure-17/Item/Security/ServiceAzureAdAuthenticationMethods.Local.png) | ![illustration for ServiceAzureAdAuthenticationMethodsCard](../../../azure-17/Item/Security/ServiceAzureAdAuthenticationMethodsCard.Local.png) | ![illustration for ServiceAzureAdAuthenticationMethodsGroup](../../../azure-17/Item/Security/ServiceAzureAdAuthenticationMethodsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureAdAuthenticationMethodsXs>`
- `<$ServiceAzureAdAuthenticationMethodsSm>`
- `<$ServiceAzureAdAuthenticationMethodsMd>`
- `<$ServiceAzureAdAuthenticationMethodsLg>`





## ServiceAzureAdAuthenticationMethods

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureAdAuthenticationMethods
include('azure-17/Item/Security/ServiceAzureAdAuthenticationMethods')

' renders the element
ServiceAzureAdAuthenticationMethods('ServiceAzureAdAuthenticationMethods', 'Service Azure Ad Authentication Methods', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureAdAuthenticationMethods
include('azure-17/Item/Security/ServiceAzureAdAuthenticationMethods')

' renders the element
ServiceAzureAdAuthenticationMethods('ServiceAzureAdAuthenticationMethods', 'Service Azure Ad Authentication Methods', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureAdAuthenticationMethodsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureAdAuthenticationMethodsCard
include('azure-17/Item/Security/ServiceAzureAdAuthenticationMethods')

' renders the element
ServiceAzureAdAuthenticationMethodsCard('ServiceAzureAdAuthenticationMethodsCard', 'Service Azure Ad Authentication Methods Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureAdAuthenticationMethodsCard
include('azure-17/Item/Security/ServiceAzureAdAuthenticationMethods')

' renders the element
ServiceAzureAdAuthenticationMethodsCard('ServiceAzureAdAuthenticationMethodsCard', 'Service Azure Ad Authentication Methods Card', 'an optional description')
@enduml
```

## ServiceAzureAdAuthenticationMethodsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureAdAuthenticationMethodsGroup
include('azure-17/Item/Security/ServiceAzureAdAuthenticationMethods')

' renders the element
ServiceAzureAdAuthenticationMethodsGroup('ServiceAzureAdAuthenticationMethodsGroup', 'Service Azure Ad Authentication Methods Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureAdAuthenticationMethodsGroup
include('azure-17/Item/Security/ServiceAzureAdAuthenticationMethods')

' renders the element
ServiceAzureAdAuthenticationMethodsGroup('ServiceAzureAdAuthenticationMethodsGroup', 'Service Azure Ad Authentication Methods Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

