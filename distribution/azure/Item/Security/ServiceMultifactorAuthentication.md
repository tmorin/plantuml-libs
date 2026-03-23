# ServiceMultifactorAuthentication


```text
azure/Item/Security/ServiceMultifactorAuthentication
```

```text
include('azure/Item/Security/ServiceMultifactorAuthentication')
```



| Illustration | ServiceMultifactorAuthentication | ServiceMultifactorAuthenticationCard | ServiceMultifactorAuthenticationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Security/ServiceMultifactorAuthentication.png) | ![illustration for ServiceMultifactorAuthentication](../../../azure/Item/Security/ServiceMultifactorAuthentication.Local.png) | ![illustration for ServiceMultifactorAuthenticationCard](../../../azure/Item/Security/ServiceMultifactorAuthenticationCard.Local.png) | ![illustration for ServiceMultifactorAuthenticationGroup](../../../azure/Item/Security/ServiceMultifactorAuthenticationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMultifactorAuthenticationXs>`
- `<$ServiceMultifactorAuthenticationSm>`
- `<$ServiceMultifactorAuthenticationMd>`
- `<$ServiceMultifactorAuthenticationLg>`





## ServiceMultifactorAuthentication

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultifactorAuthentication
include('azure/Item/Security/ServiceMultifactorAuthentication')

' renders the element
ServiceMultifactorAuthentication('ServiceMultifactorAuthentication', 'Service Multifactor Authentication', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMultifactorAuthentication
include('azure/Item/Security/ServiceMultifactorAuthentication')

' renders the element
ServiceMultifactorAuthentication('ServiceMultifactorAuthentication', 'Service Multifactor Authentication', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMultifactorAuthenticationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultifactorAuthenticationCard
include('azure/Item/Security/ServiceMultifactorAuthentication')

' renders the element
ServiceMultifactorAuthenticationCard('ServiceMultifactorAuthenticationCard', 'Service Multifactor Authentication Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMultifactorAuthenticationCard
include('azure/Item/Security/ServiceMultifactorAuthentication')

' renders the element
ServiceMultifactorAuthenticationCard('ServiceMultifactorAuthenticationCard', 'Service Multifactor Authentication Card', 'an optional description')
@enduml
```

## ServiceMultifactorAuthenticationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMultifactorAuthenticationGroup
include('azure/Item/Security/ServiceMultifactorAuthentication')

' renders the element
ServiceMultifactorAuthenticationGroup('ServiceMultifactorAuthenticationGroup', 'Service Multifactor Authentication Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMultifactorAuthenticationGroup
include('azure/Item/Security/ServiceMultifactorAuthentication')

' renders the element
ServiceMultifactorAuthenticationGroup('ServiceMultifactorAuthenticationGroup', 'Service Multifactor Authentication Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

