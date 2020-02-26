# AzureCutAndPaste
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureCutAndPaste
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCutAndPaste icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureCutAndPaste.png) | ![AzureCutAndPaste element](AzureCutAndPaste.element.png) | ![AzureCutAndPaste card](AzureCutAndPaste.card.png) |
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

' loads the AzureCutAndPaste element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCutAndPaste')
AzureCutAndPaste('element', 'Cut And Paste', 'an optional tech field')
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

' loads the AzureCutAndPaste element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCutAndPaste')
AzureCutAndPaste('element', 'Cut And Paste', 'an optional tech field')
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

' loads the AzureCutAndPaste card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCutAndPaste')
AzureCutAndPasteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCutAndPaste card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureCutAndPaste')
AzureCutAndPasteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
