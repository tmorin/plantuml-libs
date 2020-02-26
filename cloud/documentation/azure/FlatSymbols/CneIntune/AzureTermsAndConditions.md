# AzureTermsAndConditions
```text
elements/azure/FlatSymbols/CneIntune/AzureTermsAndConditions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTermsAndConditions icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureTermsAndConditions.png) | ![AzureTermsAndConditions element](AzureTermsAndConditions.element.png) | ![AzureTermsAndConditions card](AzureTermsAndConditions.card.png) |
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

' loads the AzureTermsAndConditions element
include('elements/azure/FlatSymbols/CneIntune/AzureTermsAndConditions')
AzureTermsAndConditions('element', 'Terms And Conditions', 'an optional tech field')
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

' loads the AzureTermsAndConditions element
include('elements/azure/FlatSymbols/CneIntune/AzureTermsAndConditions')
AzureTermsAndConditions('element', 'Terms And Conditions', 'an optional tech field')
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

' loads the AzureTermsAndConditions card
include('elements/azure/FlatSymbols/CneIntune/AzureTermsAndConditions')
AzureTermsAndConditionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTermsAndConditions card
include('elements/azure/FlatSymbols/CneIntune/AzureTermsAndConditions')
AzureTermsAndConditionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
