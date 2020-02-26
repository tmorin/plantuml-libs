# AzureSoftwareAsAServiceSaas
```text
elements/azure/IntegrationServiceColor/AzureSoftwareAsAServiceSaas
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSoftwareAsAServiceSaas icon](../../../icons/azure/IntegrationServiceColor/AzureSoftwareAsAServiceSaas.png) | ![AzureSoftwareAsAServiceSaas element](AzureSoftwareAsAServiceSaas.element.png) | ![AzureSoftwareAsAServiceSaas card](AzureSoftwareAsAServiceSaas.card.png) |
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

' loads the AzureSoftwareAsAServiceSaas element
include('elements/azure/IntegrationServiceColor/AzureSoftwareAsAServiceSaas')
AzureSoftwareAsAServiceSaas('element', 'Software As A Service Saas', 'an optional tech field')
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

' loads the AzureSoftwareAsAServiceSaas element
include('elements/azure/IntegrationServiceColor/AzureSoftwareAsAServiceSaas')
AzureSoftwareAsAServiceSaas('element', 'Software As A Service Saas', 'an optional tech field')
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

' loads the AzureSoftwareAsAServiceSaas card
include('elements/azure/IntegrationServiceColor/AzureSoftwareAsAServiceSaas')
AzureSoftwareAsAServiceSaasCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSoftwareAsAServiceSaas card
include('elements/azure/IntegrationServiceColor/AzureSoftwareAsAServiceSaas')
AzureSoftwareAsAServiceSaasCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
