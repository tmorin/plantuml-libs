# ServiceCentralServiceInstanceForSap


```text
azure-20/Item/Other/ServiceCentralServiceInstanceForSap
```

```text
include('azure-20/Item/Other/ServiceCentralServiceInstanceForSap')
```



| Illustration | ServiceCentralServiceInstanceForSap | ServiceCentralServiceInstanceForSapCard | ServiceCentralServiceInstanceForSapGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Other/ServiceCentralServiceInstanceForSap.png) | ![illustration for ServiceCentralServiceInstanceForSap](../../../azure-20/Item/Other/ServiceCentralServiceInstanceForSap.Local.png) | ![illustration for ServiceCentralServiceInstanceForSapCard](../../../azure-20/Item/Other/ServiceCentralServiceInstanceForSapCard.Local.png) | ![illustration for ServiceCentralServiceInstanceForSapGroup](../../../azure-20/Item/Other/ServiceCentralServiceInstanceForSapGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceCentralServiceInstanceForSapXs>`
- `<$ServiceCentralServiceInstanceForSapSm>`
- `<$ServiceCentralServiceInstanceForSapMd>`
- `<$ServiceCentralServiceInstanceForSapLg>`





## ServiceCentralServiceInstanceForSap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCentralServiceInstanceForSap
include('azure-20/Item/Other/ServiceCentralServiceInstanceForSap')

' renders the element
ServiceCentralServiceInstanceForSap('ServiceCentralServiceInstanceForSap', 'Service Central Service Instance For Sap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceCentralServiceInstanceForSap
include('azure-20/Item/Other/ServiceCentralServiceInstanceForSap')

' renders the element
ServiceCentralServiceInstanceForSap('ServiceCentralServiceInstanceForSap', 'Service Central Service Instance For Sap', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceCentralServiceInstanceForSapCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCentralServiceInstanceForSapCard
include('azure-20/Item/Other/ServiceCentralServiceInstanceForSap')

' renders the element
ServiceCentralServiceInstanceForSapCard('ServiceCentralServiceInstanceForSapCard', 'Service Central Service Instance For Sap Card', 'an optional description')
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

' loads the Item which embeds the element ServiceCentralServiceInstanceForSapCard
include('azure-20/Item/Other/ServiceCentralServiceInstanceForSap')

' renders the element
ServiceCentralServiceInstanceForSapCard('ServiceCentralServiceInstanceForSapCard', 'Service Central Service Instance For Sap Card', 'an optional description')
@enduml
```

## ServiceCentralServiceInstanceForSapGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCentralServiceInstanceForSapGroup
include('azure-20/Item/Other/ServiceCentralServiceInstanceForSap')

' renders the element
ServiceCentralServiceInstanceForSapGroup('ServiceCentralServiceInstanceForSapGroup', 'Service Central Service Instance For Sap Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceCentralServiceInstanceForSapGroup
include('azure-20/Item/Other/ServiceCentralServiceInstanceForSap')

' renders the element
ServiceCentralServiceInstanceForSapGroup('ServiceCentralServiceInstanceForSapGroup', 'Service Central Service Instance For Sap Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

