# AzureAdFs
```text
elements/azure/FlatSymbols/CneEnterprise/AzureAdFs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAdFs icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureAdFs.png) | ![AzureAdFs element](AzureAdFs.element.png) | ![AzureAdFs card](AzureAdFs.card.png) |
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

' loads the AzureAdFs element
include('elements/azure/FlatSymbols/CneEnterprise/AzureAdFs')
AzureAdFs('element', 'Ad Fs', 'an optional tech field')
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

' loads the AzureAdFs element
include('elements/azure/FlatSymbols/CneEnterprise/AzureAdFs')
AzureAdFs('element', 'Ad Fs', 'an optional tech field')
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

' loads the AzureAdFs card
include('elements/azure/FlatSymbols/CneEnterprise/AzureAdFs')
AzureAdFsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAdFs card
include('elements/azure/FlatSymbols/CneEnterprise/AzureAdFs')
AzureAdFsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
