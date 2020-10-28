# AzureMicrosoftIntune
```text
elements/azure/FlatSymbols/CneIntune/AzureMicrosoftIntune
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMicrosoftIntune icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureMicrosoftIntune.png) | ![AzureMicrosoftIntune element](AzureMicrosoftIntune.element.png) | ![AzureMicrosoftIntune card](AzureMicrosoftIntune.card.png) |
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

' loads the AzureMicrosoftIntune element
include('elements/azure/FlatSymbols/CneIntune/AzureMicrosoftIntune')
AzureMicrosoftIntune('element', 'Microsoft Intune', 'an optional tech field')
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

' loads the AzureMicrosoftIntune element
include('elements/azure/FlatSymbols/CneIntune/AzureMicrosoftIntune')
AzureMicrosoftIntune('element', 'Microsoft Intune', 'an optional tech field')
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

' loads the AzureMicrosoftIntune card
include('elements/azure/FlatSymbols/CneIntune/AzureMicrosoftIntune')
AzureMicrosoftIntuneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMicrosoftIntune card
include('elements/azure/FlatSymbols/CneIntune/AzureMicrosoftIntune')
AzureMicrosoftIntuneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
