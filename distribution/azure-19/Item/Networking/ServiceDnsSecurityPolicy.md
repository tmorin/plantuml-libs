# ServiceDnsSecurityPolicy


```text
azure-19/Item/Networking/ServiceDnsSecurityPolicy
```

```text
include('azure-19/Item/Networking/ServiceDnsSecurityPolicy')
```



| Illustration | ServiceDnsSecurityPolicy | ServiceDnsSecurityPolicyCard | ServiceDnsSecurityPolicyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Networking/ServiceDnsSecurityPolicy.png) | ![illustration for ServiceDnsSecurityPolicy](../../../azure-19/Item/Networking/ServiceDnsSecurityPolicy.Local.png) | ![illustration for ServiceDnsSecurityPolicyCard](../../../azure-19/Item/Networking/ServiceDnsSecurityPolicyCard.Local.png) | ![illustration for ServiceDnsSecurityPolicyGroup](../../../azure-19/Item/Networking/ServiceDnsSecurityPolicyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDnsSecurityPolicyXs>`
- `<$ServiceDnsSecurityPolicySm>`
- `<$ServiceDnsSecurityPolicyMd>`
- `<$ServiceDnsSecurityPolicyLg>`





## ServiceDnsSecurityPolicy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDnsSecurityPolicy
include('azure-19/Item/Networking/ServiceDnsSecurityPolicy')

' renders the element
ServiceDnsSecurityPolicy('ServiceDnsSecurityPolicy', 'Service Dns Security Policy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceDnsSecurityPolicy
include('azure-19/Item/Networking/ServiceDnsSecurityPolicy')

' renders the element
ServiceDnsSecurityPolicy('ServiceDnsSecurityPolicy', 'Service Dns Security Policy', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDnsSecurityPolicyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDnsSecurityPolicyCard
include('azure-19/Item/Networking/ServiceDnsSecurityPolicy')

' renders the element
ServiceDnsSecurityPolicyCard('ServiceDnsSecurityPolicyCard', 'Service Dns Security Policy Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDnsSecurityPolicyCard
include('azure-19/Item/Networking/ServiceDnsSecurityPolicy')

' renders the element
ServiceDnsSecurityPolicyCard('ServiceDnsSecurityPolicyCard', 'Service Dns Security Policy Card', 'an optional description')
@enduml
```

## ServiceDnsSecurityPolicyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDnsSecurityPolicyGroup
include('azure-19/Item/Networking/ServiceDnsSecurityPolicy')

' renders the element
ServiceDnsSecurityPolicyGroup('ServiceDnsSecurityPolicyGroup', 'Service Dns Security Policy Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDnsSecurityPolicyGroup
include('azure-19/Item/Networking/ServiceDnsSecurityPolicy')

' renders the element
ServiceDnsSecurityPolicyGroup('ServiceDnsSecurityPolicyGroup', 'Service Dns Security Policy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

