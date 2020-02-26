# AzureServiceCatalogManagedApplicationDefinitions
```text
elements/azure/IntegrationServiceColor/AzureServiceCatalogManagedApplicationDefinitions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureServiceCatalogManagedApplicationDefinitions icon](../../../icons/azure/IntegrationServiceColor/AzureServiceCatalogManagedApplicationDefinitions.png) | ![AzureServiceCatalogManagedApplicationDefinitions element](AzureServiceCatalogManagedApplicationDefinitions.element.png) | ![AzureServiceCatalogManagedApplicationDefinitions card](AzureServiceCatalogManagedApplicationDefinitions.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureServiceCatalogManagedApplicationDefinitions element
include('elements/azure/IntegrationServiceColor/AzureServiceCatalogManagedApplicationDefinitions')
AzureServiceCatalogManagedApplicationDefinitions('element', 'Service Catalog Managed Application Definitions', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureServiceCatalogManagedApplicationDefinitions element
include('elements/azure/IntegrationServiceColor/AzureServiceCatalogManagedApplicationDefinitions')
AzureServiceCatalogManagedApplicationDefinitions('element', 'Service Catalog Managed Application Definitions', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureServiceCatalogManagedApplicationDefinitions card
include('elements/azure/IntegrationServiceColor/AzureServiceCatalogManagedApplicationDefinitions')
AzureServiceCatalogManagedApplicationDefinitionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureServiceCatalogManagedApplicationDefinitions card
include('elements/azure/IntegrationServiceColor/AzureServiceCatalogManagedApplicationDefinitions')
AzureServiceCatalogManagedApplicationDefinitionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
