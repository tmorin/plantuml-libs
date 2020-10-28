# AzureKeyboard
```text
elements/azure/FlatSymbols/CneEnterprise/AzureKeyboard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureKeyboard icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureKeyboard.png) | ![AzureKeyboard element](AzureKeyboard.element.png) | ![AzureKeyboard card](AzureKeyboard.card.png) |
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

' loads the AzureKeyboard element
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyboard')
AzureKeyboard('element', 'Keyboard', 'an optional tech field')
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

' loads the AzureKeyboard element
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyboard')
AzureKeyboard('element', 'Keyboard', 'an optional tech field')
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

' loads the AzureKeyboard card
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyboard')
AzureKeyboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureKeyboard card
include('elements/azure/FlatSymbols/CneEnterprise/AzureKeyboard')
AzureKeyboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
