# AzureIphone
```text
elements/azure/FlatSymbols/CneEnterprise/AzureIphone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureIphone icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureIphone.png) | ![AzureIphone element](AzureIphone.element.png) | ![AzureIphone card](AzureIphone.card.png) |
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

' loads the AzureIphone element
include('elements/azure/FlatSymbols/CneEnterprise/AzureIphone')
AzureIphone('element', 'Iphone', 'an optional tech field')
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

' loads the AzureIphone element
include('elements/azure/FlatSymbols/CneEnterprise/AzureIphone')
AzureIphone('element', 'Iphone', 'an optional tech field')
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

' loads the AzureIphone card
include('elements/azure/FlatSymbols/CneEnterprise/AzureIphone')
AzureIphoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureIphone card
include('elements/azure/FlatSymbols/CneEnterprise/AzureIphone')
AzureIphoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
