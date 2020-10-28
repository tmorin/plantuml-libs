# AzureApplicationBlankForText
```text
elements/azure/FlatSymbols/CneEnterprise/AzureApplicationBlankForText
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureApplicationBlankForText icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureApplicationBlankForText.png) | ![AzureApplicationBlankForText element](AzureApplicationBlankForText.element.png) | ![AzureApplicationBlankForText card](AzureApplicationBlankForText.card.png) |
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

' loads the AzureApplicationBlankForText element
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationBlankForText')
AzureApplicationBlankForText('element', 'Application Blank For Text', 'an optional tech field')
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

' loads the AzureApplicationBlankForText element
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationBlankForText')
AzureApplicationBlankForText('element', 'Application Blank For Text', 'an optional tech field')
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

' loads the AzureApplicationBlankForText card
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationBlankForText')
AzureApplicationBlankForTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureApplicationBlankForText card
include('elements/azure/FlatSymbols/CneEnterprise/AzureApplicationBlankForText')
AzureApplicationBlankForTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
