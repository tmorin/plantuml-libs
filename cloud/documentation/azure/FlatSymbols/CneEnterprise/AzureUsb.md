# AzureUsb
```text
elements/azure/FlatSymbols/CneEnterprise/AzureUsb
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureUsb icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureUsb.png) | ![AzureUsb element](AzureUsb.element.png) | ![AzureUsb card](AzureUsb.card.png) |
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

' loads the AzureUsb element
include('elements/azure/FlatSymbols/CneEnterprise/AzureUsb')
AzureUsb('element', 'Usb', 'an optional tech field')
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

' loads the AzureUsb element
include('elements/azure/FlatSymbols/CneEnterprise/AzureUsb')
AzureUsb('element', 'Usb', 'an optional tech field')
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

' loads the AzureUsb card
include('elements/azure/FlatSymbols/CneEnterprise/AzureUsb')
AzureUsbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureUsb card
include('elements/azure/FlatSymbols/CneEnterprise/AzureUsb')
AzureUsbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
