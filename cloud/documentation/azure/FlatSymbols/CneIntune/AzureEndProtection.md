# AzureEndProtection
```text
elements/azure/FlatSymbols/CneIntune/AzureEndProtection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEndProtection icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureEndProtection.png) | ![AzureEndProtection element](AzureEndProtection.element.png) | ![AzureEndProtection card](AzureEndProtection.card.png) |
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

' loads the AzureEndProtection element
include('elements/azure/FlatSymbols/CneIntune/AzureEndProtection')
AzureEndProtection('element', 'End Protection', 'an optional tech field')
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

' loads the AzureEndProtection element
include('elements/azure/FlatSymbols/CneIntune/AzureEndProtection')
AzureEndProtection('element', 'End Protection', 'an optional tech field')
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

' loads the AzureEndProtection card
include('elements/azure/FlatSymbols/CneIntune/AzureEndProtection')
AzureEndProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureEndProtection card
include('elements/azure/FlatSymbols/CneIntune/AzureEndProtection')
AzureEndProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
