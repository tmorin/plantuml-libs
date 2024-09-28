# ServicePowershell


```text
azure-19/Item/General/ServicePowershell
```

```text
include('azure-19/Item/General/ServicePowershell')
```



| Illustration | ServicePowershell | ServicePowershellCard | ServicePowershellGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/General/ServicePowershell.png) | ![illustration for ServicePowershell](../../../azure-19/Item/General/ServicePowershell.Local.png) | ![illustration for ServicePowershellCard](../../../azure-19/Item/General/ServicePowershellCard.Local.png) | ![illustration for ServicePowershellGroup](../../../azure-19/Item/General/ServicePowershellGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServicePowershellXs>`
- `<$ServicePowershellSm>`
- `<$ServicePowershellMd>`
- `<$ServicePowershellLg>`





## ServicePowershell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePowershell
include('azure-19/Item/General/ServicePowershell')

' renders the element
ServicePowershell('ServicePowershell', 'Service Powershell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServicePowershell
include('azure-19/Item/General/ServicePowershell')

' renders the element
ServicePowershell('ServicePowershell', 'Service Powershell', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePowershellCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePowershellCard
include('azure-19/Item/General/ServicePowershell')

' renders the element
ServicePowershellCard('ServicePowershellCard', 'Service Powershell Card', 'an optional description')
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

' loads the Item which embeds the element ServicePowershellCard
include('azure-19/Item/General/ServicePowershell')

' renders the element
ServicePowershellCard('ServicePowershellCard', 'Service Powershell Card', 'an optional description')
@enduml
```

## ServicePowershellGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServicePowershellGroup
include('azure-19/Item/General/ServicePowershell')

' renders the element
ServicePowershellGroup('ServicePowershellGroup', 'Service Powershell Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServicePowershellGroup
include('azure-19/Item/General/ServicePowershell')

' renders the element
ServicePowershellGroup('ServicePowershellGroup', 'Service Powershell Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

