# AzureApplicationGeneric
```text
elements/azure/FlatSymbols/CneEnterprise/AzureApplicationGeneric
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureApplicationGeneric icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureApplicationGeneric.png) | ![AzureApplicationGeneric element](AzureApplicationGeneric.element.png) | ![AzureApplicationGeneric card](AzureApplicationGeneric.card.png) |
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

' loads the AzureApplicationGeneric element
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationGeneric')
AzureApplicationGeneric('element', 'Application Generic', 'an optional tech field')
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

' loads the AzureApplicationGeneric element
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationGeneric')
AzureApplicationGeneric('element', 'Application Generic', 'an optional tech field')
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

' loads the AzureApplicationGeneric card
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationGeneric')
AzureApplicationGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureApplicationGeneric card
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationGeneric')
AzureApplicationGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
