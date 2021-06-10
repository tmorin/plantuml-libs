# ServiceDeviceSecurityApple


```text
azure-4/Item/Intune/ServiceDeviceSecurityApple
```

```text
include('azure-4/Item/Intune/ServiceDeviceSecurityApple')
```



| Illustration | ServiceDeviceSecurityApple | ServiceDeviceSecurityAppleCard | ServiceDeviceSecurityAppleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Intune/ServiceDeviceSecurityApple.png) | ![illustration for ServiceDeviceSecurityApple](../../../azure-4/Item/Intune/ServiceDeviceSecurityApple.Local.png) | ![illustration for ServiceDeviceSecurityAppleCard](../../../azure-4/Item/Intune/ServiceDeviceSecurityAppleCard.Local.png) | ![illustration for ServiceDeviceSecurityAppleGroup](../../../azure-4/Item/Intune/ServiceDeviceSecurityAppleGroup.Local.png) |




## ServiceDeviceSecurityApple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDeviceSecurityApple
include('azure-4/Item/Intune/ServiceDeviceSecurityApple')

' renders the element
ServiceDeviceSecurityApple('ServiceDeviceSecurityApple', 'Service Device Security Apple', 'an optional tech label')
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

' loads the Item which embeds the element ServiceDeviceSecurityApple
include('azure-4/Item/Intune/ServiceDeviceSecurityApple')

' renders the element
ServiceDeviceSecurityApple('ServiceDeviceSecurityApple', 'Service Device Security Apple', 'an optional tech label')
@enduml
```

## ServiceDeviceSecurityAppleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDeviceSecurityAppleCard
include('azure-4/Item/Intune/ServiceDeviceSecurityApple')

' renders the element
ServiceDeviceSecurityAppleCard('ServiceDeviceSecurityAppleCard', 'Service Device Security Apple Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDeviceSecurityAppleCard
include('azure-4/Item/Intune/ServiceDeviceSecurityApple')

' renders the element
ServiceDeviceSecurityAppleCard('ServiceDeviceSecurityAppleCard', 'Service Device Security Apple Card', 'an optional description')
@enduml
```

## ServiceDeviceSecurityAppleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDeviceSecurityAppleGroup
include('azure-4/Item/Intune/ServiceDeviceSecurityApple')

' renders the element
ServiceDeviceSecurityAppleGroup('ServiceDeviceSecurityAppleGroup', 'Service Device Security Apple Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDeviceSecurityAppleGroup
include('azure-4/Item/Intune/ServiceDeviceSecurityApple')

' renders the element
ServiceDeviceSecurityAppleGroup('ServiceDeviceSecurityAppleGroup', 'Service Device Security Apple Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

