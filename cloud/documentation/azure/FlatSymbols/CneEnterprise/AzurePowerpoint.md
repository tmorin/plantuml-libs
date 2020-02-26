# AzurePowerpoint
```text
elements/azure/FlatSymbols/CneEnterprise/AzurePowerpoint
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzurePowerpoint icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzurePowerpoint.png) | ![AzurePowerpoint element](AzurePowerpoint.element.png) | ![AzurePowerpoint card](AzurePowerpoint.card.png) |
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

' loads the AzurePowerpoint element
include('elements/azure/FlatSymbols/CneEnterprise/AzurePowerpoint')
AzurePowerpoint('element', 'Powerpoint', 'an optional tech field')
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

' loads the AzurePowerpoint element
include('elements/azure/FlatSymbols/CneEnterprise/AzurePowerpoint')
AzurePowerpoint('element', 'Powerpoint', 'an optional tech field')
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

' loads the AzurePowerpoint card
include('elements/azure/FlatSymbols/CneEnterprise/AzurePowerpoint')
AzurePowerpointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzurePowerpoint card
include('elements/azure/FlatSymbols/CneEnterprise/AzurePowerpoint')
AzurePowerpointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
