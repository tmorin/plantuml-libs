# ServiceIcMTroubleshooting


```text
azure-20/Item/Other/ServiceIcMTroubleshooting
```

```text
include('azure-20/Item/Other/ServiceIcMTroubleshooting')
```



| Illustration | ServiceIcMTroubleshooting | ServiceIcMTroubleshootingCard | ServiceIcMTroubleshootingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Other/ServiceIcMTroubleshooting.png) | ![illustration for ServiceIcMTroubleshooting](../../../azure-20/Item/Other/ServiceIcMTroubleshooting.Local.png) | ![illustration for ServiceIcMTroubleshootingCard](../../../azure-20/Item/Other/ServiceIcMTroubleshootingCard.Local.png) | ![illustration for ServiceIcMTroubleshootingGroup](../../../azure-20/Item/Other/ServiceIcMTroubleshootingGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceIcMTroubleshootingXs>`
- `<$ServiceIcMTroubleshootingSm>`
- `<$ServiceIcMTroubleshootingMd>`
- `<$ServiceIcMTroubleshootingLg>`





## ServiceIcMTroubleshooting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIcMTroubleshooting
include('azure-20/Item/Other/ServiceIcMTroubleshooting')

' renders the element
ServiceIcMTroubleshooting('ServiceIcMTroubleshooting', 'Service Ic M Troubleshooting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceIcMTroubleshooting
include('azure-20/Item/Other/ServiceIcMTroubleshooting')

' renders the element
ServiceIcMTroubleshooting('ServiceIcMTroubleshooting', 'Service Ic M Troubleshooting', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIcMTroubleshootingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIcMTroubleshootingCard
include('azure-20/Item/Other/ServiceIcMTroubleshooting')

' renders the element
ServiceIcMTroubleshootingCard('ServiceIcMTroubleshootingCard', 'Service Ic M Troubleshooting Card', 'an optional description')
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

' loads the Item which embeds the element ServiceIcMTroubleshootingCard
include('azure-20/Item/Other/ServiceIcMTroubleshooting')

' renders the element
ServiceIcMTroubleshootingCard('ServiceIcMTroubleshootingCard', 'Service Ic M Troubleshooting Card', 'an optional description')
@enduml
```

## ServiceIcMTroubleshootingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceIcMTroubleshootingGroup
include('azure-20/Item/Other/ServiceIcMTroubleshooting')

' renders the element
ServiceIcMTroubleshootingGroup('ServiceIcMTroubleshootingGroup', 'Service Ic M Troubleshooting Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceIcMTroubleshootingGroup
include('azure-20/Item/Other/ServiceIcMTroubleshooting')

' renders the element
ServiceIcMTroubleshootingGroup('ServiceIcMTroubleshootingGroup', 'Service Ic M Troubleshooting Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

