# ServiceDeviceSecurityGoogle


```text
azure/Item/Intune/ServiceDeviceSecurityGoogle
```

```text
include('azure/Item/Intune/ServiceDeviceSecurityGoogle')
```



| Illustration | ServiceDeviceSecurityGoogle | ServiceDeviceSecurityGoogleCard | ServiceDeviceSecurityGoogleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Intune/ServiceDeviceSecurityGoogle.png) | ![illustration for ServiceDeviceSecurityGoogle](../../../azure/Item/Intune/ServiceDeviceSecurityGoogle.Local.png) | ![illustration for ServiceDeviceSecurityGoogleCard](../../../azure/Item/Intune/ServiceDeviceSecurityGoogleCard.Local.png) | ![illustration for ServiceDeviceSecurityGoogleGroup](../../../azure/Item/Intune/ServiceDeviceSecurityGoogleGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDeviceSecurityGoogleXs>`
- `<$ServiceDeviceSecurityGoogleSm>`
- `<$ServiceDeviceSecurityGoogleMd>`
- `<$ServiceDeviceSecurityGoogleLg>`





## ServiceDeviceSecurityGoogle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDeviceSecurityGoogle
include('azure/Item/Intune/ServiceDeviceSecurityGoogle')

' renders the element
ServiceDeviceSecurityGoogle('ServiceDeviceSecurityGoogle', 'Service Device Security Google', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceDeviceSecurityGoogle
include('azure/Item/Intune/ServiceDeviceSecurityGoogle')

' renders the element
ServiceDeviceSecurityGoogle('ServiceDeviceSecurityGoogle', 'Service Device Security Google', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDeviceSecurityGoogleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDeviceSecurityGoogleCard
include('azure/Item/Intune/ServiceDeviceSecurityGoogle')

' renders the element
ServiceDeviceSecurityGoogleCard('ServiceDeviceSecurityGoogleCard', 'Service Device Security Google Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDeviceSecurityGoogleCard
include('azure/Item/Intune/ServiceDeviceSecurityGoogle')

' renders the element
ServiceDeviceSecurityGoogleCard('ServiceDeviceSecurityGoogleCard', 'Service Device Security Google Card', 'an optional description')
@enduml
```

## ServiceDeviceSecurityGoogleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDeviceSecurityGoogleGroup
include('azure/Item/Intune/ServiceDeviceSecurityGoogle')

' renders the element
ServiceDeviceSecurityGoogleGroup('ServiceDeviceSecurityGoogleGroup', 'Service Device Security Google Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDeviceSecurityGoogleGroup
include('azure/Item/Intune/ServiceDeviceSecurityGoogle')

' renders the element
ServiceDeviceSecurityGoogleGroup('ServiceDeviceSecurityGoogleGroup', 'Service Device Security Google Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

