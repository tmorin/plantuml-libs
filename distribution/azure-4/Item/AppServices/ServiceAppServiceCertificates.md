# ServiceAppServiceCertificates


```text
azure-4/Item/AppServices/ServiceAppServiceCertificates
```

```text
include('azure-4/Item/AppServices/ServiceAppServiceCertificates')
```



| Illustration | ServiceAppServiceCertificates | ServiceAppServiceCertificatesCard | ServiceAppServiceCertificatesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/AppServices/ServiceAppServiceCertificates.png) | ![illustration for ServiceAppServiceCertificates](../../../azure-4/Item/AppServices/ServiceAppServiceCertificates.Local.png) | ![illustration for ServiceAppServiceCertificatesCard](../../../azure-4/Item/AppServices/ServiceAppServiceCertificatesCard.Local.png) | ![illustration for ServiceAppServiceCertificatesGroup](../../../azure-4/Item/AppServices/ServiceAppServiceCertificatesGroup.Local.png) |




## ServiceAppServiceCertificates

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAppServiceCertificates
include('azure-4/Item/AppServices/ServiceAppServiceCertificates')

' renders the element
ServiceAppServiceCertificates('ServiceAppServiceCertificates', 'Service App Service Certificates', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAppServiceCertificates
include('azure-4/Item/AppServices/ServiceAppServiceCertificates')

' renders the element
ServiceAppServiceCertificates('ServiceAppServiceCertificates', 'Service App Service Certificates', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAppServiceCertificatesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAppServiceCertificatesCard
include('azure-4/Item/AppServices/ServiceAppServiceCertificates')

' renders the element
ServiceAppServiceCertificatesCard('ServiceAppServiceCertificatesCard', 'Service App Service Certificates Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAppServiceCertificatesCard
include('azure-4/Item/AppServices/ServiceAppServiceCertificates')

' renders the element
ServiceAppServiceCertificatesCard('ServiceAppServiceCertificatesCard', 'Service App Service Certificates Card', 'an optional description')
@enduml
```

## ServiceAppServiceCertificatesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAppServiceCertificatesGroup
include('azure-4/Item/AppServices/ServiceAppServiceCertificates')

' renders the element
ServiceAppServiceCertificatesGroup('ServiceAppServiceCertificatesGroup', 'Service App Service Certificates Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAppServiceCertificatesGroup
include('azure-4/Item/AppServices/ServiceAppServiceCertificates')

' renders the element
ServiceAppServiceCertificatesGroup('ServiceAppServiceCertificatesGroup', 'Service App Service Certificates Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

