# ServiceSoftwareAsAService


```text
azure-6/Item/Integration/ServiceSoftwareAsAService
```

```text
include('azure-6/Item/Integration/ServiceSoftwareAsAService')
```



| Illustration | ServiceSoftwareAsAService | ServiceSoftwareAsAServiceCard | ServiceSoftwareAsAServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Integration/ServiceSoftwareAsAService.png) | ![illustration for ServiceSoftwareAsAService](../../../azure-6/Item/Integration/ServiceSoftwareAsAService.Local.png) | ![illustration for ServiceSoftwareAsAServiceCard](../../../azure-6/Item/Integration/ServiceSoftwareAsAServiceCard.Local.png) | ![illustration for ServiceSoftwareAsAServiceGroup](../../../azure-6/Item/Integration/ServiceSoftwareAsAServiceGroup.Local.png) |




## ServiceSoftwareAsAService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSoftwareAsAService
include('azure-6/Item/Integration/ServiceSoftwareAsAService')

' renders the element
ServiceSoftwareAsAService('ServiceSoftwareAsAService', 'Service Software As A Service', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceSoftwareAsAService
include('azure-6/Item/Integration/ServiceSoftwareAsAService')

' renders the element
ServiceSoftwareAsAService('ServiceSoftwareAsAService', 'Service Software As A Service', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSoftwareAsAServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSoftwareAsAServiceCard
include('azure-6/Item/Integration/ServiceSoftwareAsAService')

' renders the element
ServiceSoftwareAsAServiceCard('ServiceSoftwareAsAServiceCard', 'Service Software As A Service Card', 'an optional description')
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

' loads the Item which embeds the element ServiceSoftwareAsAServiceCard
include('azure-6/Item/Integration/ServiceSoftwareAsAService')

' renders the element
ServiceSoftwareAsAServiceCard('ServiceSoftwareAsAServiceCard', 'Service Software As A Service Card', 'an optional description')
@enduml
```

## ServiceSoftwareAsAServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSoftwareAsAServiceGroup
include('azure-6/Item/Integration/ServiceSoftwareAsAService')

' renders the element
ServiceSoftwareAsAServiceGroup('ServiceSoftwareAsAServiceGroup', 'Service Software As A Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceSoftwareAsAServiceGroup
include('azure-6/Item/Integration/ServiceSoftwareAsAService')

' renders the element
ServiceSoftwareAsAServiceGroup('ServiceSoftwareAsAServiceGroup', 'Service Software As A Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

