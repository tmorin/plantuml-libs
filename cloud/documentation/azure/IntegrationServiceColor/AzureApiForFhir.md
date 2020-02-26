# AzureApiForFhir
```text
elements/azure/IntegrationServiceColor/AzureApiForFhir
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureApiForFhir icon](../../../icons/azure/IntegrationServiceColor/AzureApiForFhir.png) | ![AzureApiForFhir element](AzureApiForFhir.element.png) | ![AzureApiForFhir card](AzureApiForFhir.card.png) |
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

' loads the AzureApiForFhir element
include('elements/azure/IntegrationServiceColor/AzureApiForFhir')
AzureApiForFhir('element', 'Api For Fhir', 'an optional tech field')
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

' loads the AzureApiForFhir element
include('elements/azure/IntegrationServiceColor/AzureApiForFhir')
AzureApiForFhir('element', 'Api For Fhir', 'an optional tech field')
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

' loads the AzureApiForFhir card
include('elements/azure/IntegrationServiceColor/AzureApiForFhir')
AzureApiForFhirCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureApiForFhir card
include('elements/azure/IntegrationServiceColor/AzureApiForFhir')
AzureApiForFhirCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
