# AzureHelpSupport
```text
elements/azure/GeneralServiceIcons/AzureHelpSupport
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHelpSupport icon](../../../icons/azure/GeneralServiceIcons/AzureHelpSupport.png) | ![AzureHelpSupport element](AzureHelpSupport.element.png) | ![AzureHelpSupport card](AzureHelpSupport.card.png) |
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

' loads the AzureHelpSupport element
include('elements/azure/GeneralServiceIcons/AzureHelpSupport')
AzureHelpSupport('element', 'Help Support', 'an optional tech field')
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

' loads the AzureHelpSupport element
include('elements/azure/GeneralServiceIcons/AzureHelpSupport')
AzureHelpSupport('element', 'Help Support', 'an optional tech field')
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

' loads the AzureHelpSupport card
include('elements/azure/GeneralServiceIcons/AzureHelpSupport')
AzureHelpSupportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHelpSupport card
include('elements/azure/GeneralServiceIcons/AzureHelpSupport')
AzureHelpSupportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
