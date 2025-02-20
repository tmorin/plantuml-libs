# ServicePower


```text
azure-20/Item/General/ServicePower
```

```text
include('azure-20/Item/General/ServicePower')
```



| Illustration | ServicePower | ServicePowerCard | ServicePowerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/General/ServicePower.png) | ![illustration for ServicePower](../../../azure-20/Item/General/ServicePower.Local.png) | ![illustration for ServicePowerCard](../../../azure-20/Item/General/ServicePowerCard.Local.png) | ![illustration for ServicePowerGroup](../../../azure-20/Item/General/ServicePowerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServicePowerXs>`
- `<$ServicePowerSm>`
- `<$ServicePowerMd>`
- `<$ServicePowerLg>`





## ServicePower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePower
include('azure-20/Item/General/ServicePower')

' renders the element
ServicePower('ServicePower', 'Service Power', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServicePower
include('azure-20/Item/General/ServicePower')

' renders the element
ServicePower('ServicePower', 'Service Power', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePowerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePowerCard
include('azure-20/Item/General/ServicePower')

' renders the element
ServicePowerCard('ServicePowerCard', 'Service Power Card', 'an optional description')
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

' loads the Item which embeds the element ServicePowerCard
include('azure-20/Item/General/ServicePower')

' renders the element
ServicePowerCard('ServicePowerCard', 'Service Power Card', 'an optional description')
@enduml
```

## ServicePowerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServicePowerGroup
include('azure-20/Item/General/ServicePower')

' renders the element
ServicePowerGroup('ServicePowerGroup', 'Service Power Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServicePowerGroup
include('azure-20/Item/General/ServicePower')

' renders the element
ServicePowerGroup('ServicePowerGroup', 'Service Power Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

