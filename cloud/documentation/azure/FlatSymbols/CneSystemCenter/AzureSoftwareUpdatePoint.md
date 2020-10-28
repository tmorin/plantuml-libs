# AzureSoftwareUpdatePoint
```text
elements/azure/FlatSymbols/CneSystemCenter/AzureSoftwareUpdatePoint
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSoftwareUpdatePoint icon](../../../../icons/azure/FlatSymbols/CneSystemCenter/AzureSoftwareUpdatePoint.png) | ![AzureSoftwareUpdatePoint element](AzureSoftwareUpdatePoint.element.png) | ![AzureSoftwareUpdatePoint card](AzureSoftwareUpdatePoint.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureSoftwareUpdatePoint element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSoftwareUpdatePoint')
AzureSoftwareUpdatePoint('element', 'Software Update Point', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureSoftwareUpdatePoint element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSoftwareUpdatePoint')
AzureSoftwareUpdatePoint('element', 'Software Update Point', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureSoftwareUpdatePoint card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSoftwareUpdatePoint')
AzureSoftwareUpdatePointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureSoftwareUpdatePoint card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSoftwareUpdatePoint')
AzureSoftwareUpdatePointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
