# ServiceExchangeAccess


```text
azure-6/Item/Intune/ServiceExchangeAccess
```

```text
include('azure-6/Item/Intune/ServiceExchangeAccess')
```



| Illustration | ServiceExchangeAccess | ServiceExchangeAccessCard | ServiceExchangeAccessGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Intune/ServiceExchangeAccess.png) | ![illustration for ServiceExchangeAccess](../../../azure-6/Item/Intune/ServiceExchangeAccess.Local.png) | ![illustration for ServiceExchangeAccessCard](../../../azure-6/Item/Intune/ServiceExchangeAccessCard.Local.png) | ![illustration for ServiceExchangeAccessGroup](../../../azure-6/Item/Intune/ServiceExchangeAccessGroup.Local.png) |




## ServiceExchangeAccess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceExchangeAccess
include('azure-6/Item/Intune/ServiceExchangeAccess')

' renders the element
ServiceExchangeAccess('ServiceExchangeAccess', 'Service Exchange Access', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceExchangeAccess
include('azure-6/Item/Intune/ServiceExchangeAccess')

' renders the element
ServiceExchangeAccess('ServiceExchangeAccess', 'Service Exchange Access', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceExchangeAccessCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceExchangeAccessCard
include('azure-6/Item/Intune/ServiceExchangeAccess')

' renders the element
ServiceExchangeAccessCard('ServiceExchangeAccessCard', 'Service Exchange Access Card', 'an optional description')
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

' loads the Item which embeds the element ServiceExchangeAccessCard
include('azure-6/Item/Intune/ServiceExchangeAccess')

' renders the element
ServiceExchangeAccessCard('ServiceExchangeAccessCard', 'Service Exchange Access Card', 'an optional description')
@enduml
```

## ServiceExchangeAccessGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceExchangeAccessGroup
include('azure-6/Item/Intune/ServiceExchangeAccess')

' renders the element
ServiceExchangeAccessGroup('ServiceExchangeAccessGroup', 'Service Exchange Access Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceExchangeAccessGroup
include('azure-6/Item/Intune/ServiceExchangeAccess')

' renders the element
ServiceExchangeAccessGroup('ServiceExchangeAccessGroup', 'Service Exchange Access Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

