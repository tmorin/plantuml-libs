# AzureAttachments1
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureAttachments1
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAttachments1 icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureAttachments1.png) | ![AzureAttachments1 element](AzureAttachments1.element.png) | ![AzureAttachments1 card](AzureAttachments1.card.png) |
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

' loads the AzureAttachments1 element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAttachments1')
AzureAttachments1('element', 'Attachments1', 'an optional tech field')
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

' loads the AzureAttachments1 element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAttachments1')
AzureAttachments1('element', 'Attachments1', 'an optional tech field')
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

' loads the AzureAttachments1 card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAttachments1')
AzureAttachments1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAttachments1 card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAttachments1')
AzureAttachments1Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
