# AzureSoftwareUpdate
```text
elements/azure/IntuneServiceColor/AzureSoftwareUpdate
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSoftwareUpdate icon](../../../icons/azure/IntuneServiceColor/AzureSoftwareUpdate.png) | ![AzureSoftwareUpdate element](AzureSoftwareUpdate.element.png) | ![AzureSoftwareUpdate card](AzureSoftwareUpdate.card.png) |
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

' loads the AzureSoftwareUpdate element
include('elements/azure/IntuneServiceColor/AzureSoftwareUpdate')
AzureSoftwareUpdate('element', 'Software Update', 'an optional tech field')
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

' loads the AzureSoftwareUpdate element
include('elements/azure/IntuneServiceColor/AzureSoftwareUpdate')
AzureSoftwareUpdate('element', 'Software Update', 'an optional tech field')
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

' loads the AzureSoftwareUpdate card
include('elements/azure/IntuneServiceColor/AzureSoftwareUpdate')
AzureSoftwareUpdateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSoftwareUpdate card
include('elements/azure/IntuneServiceColor/AzureSoftwareUpdate')
AzureSoftwareUpdateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
