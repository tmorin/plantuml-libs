# AzureExchangeOnPremisesAccess
```text
elements/azure/IntuneServiceColor/AzureExchangeOnPremisesAccess
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureExchangeOnPremisesAccess icon](../../../icons/azure/IntuneServiceColor/AzureExchangeOnPremisesAccess.png) | ![AzureExchangeOnPremisesAccess element](AzureExchangeOnPremisesAccess.element.png) | ![AzureExchangeOnPremisesAccess card](AzureExchangeOnPremisesAccess.card.png) |
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

' loads the AzureExchangeOnPremisesAccess element
include('elements/azure/IntuneServiceColor/AzureExchangeOnPremisesAccess')
AzureExchangeOnPremisesAccess('element', 'Exchange On Premises Access', 'an optional tech field')
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

' loads the AzureExchangeOnPremisesAccess element
include('elements/azure/IntuneServiceColor/AzureExchangeOnPremisesAccess')
AzureExchangeOnPremisesAccess('element', 'Exchange On Premises Access', 'an optional tech field')
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

' loads the AzureExchangeOnPremisesAccess card
include('elements/azure/IntuneServiceColor/AzureExchangeOnPremisesAccess')
AzureExchangeOnPremisesAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureExchangeOnPremisesAccess card
include('elements/azure/IntuneServiceColor/AzureExchangeOnPremisesAccess')
AzureExchangeOnPremisesAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
