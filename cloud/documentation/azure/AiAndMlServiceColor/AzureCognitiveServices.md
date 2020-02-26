# AzureCognitiveServices
```text
elements/azure/AiAndMlServiceColor/AzureCognitiveServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCognitiveServices icon](../../../icons/azure/AiAndMlServiceColor/AzureCognitiveServices.png) | ![AzureCognitiveServices element](AzureCognitiveServices.element.png) | ![AzureCognitiveServices card](AzureCognitiveServices.card.png) |
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

' loads the AzureCognitiveServices element
include('elements/azure/AiAndMlServiceColor/AzureCognitiveServices')
AzureCognitiveServices('element', 'Cognitive Services', 'an optional tech field')
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

' loads the AzureCognitiveServices element
include('elements/azure/AiAndMlServiceColor/AzureCognitiveServices')
AzureCognitiveServices('element', 'Cognitive Services', 'an optional tech field')
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

' loads the AzureCognitiveServices card
include('elements/azure/AiAndMlServiceColor/AzureCognitiveServices')
AzureCognitiveServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCognitiveServices card
include('elements/azure/AiAndMlServiceColor/AzureCognitiveServices')
AzureCognitiveServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
