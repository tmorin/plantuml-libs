# AzureWhatSNew
```text
elements/azure/GeneralServiceIcons/AzureWhatSNew
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureWhatSNew icon](../../../icons/azure/GeneralServiceIcons/AzureWhatSNew.png) | ![AzureWhatSNew element](AzureWhatSNew.element.png) | ![AzureWhatSNew card](AzureWhatSNew.card.png) |
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

' loads the AzureWhatSNew element
include('elements/azure/GeneralServiceIcons/AzureWhatSNew')
AzureWhatSNew('element', 'What S New', 'an optional tech field')
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

' loads the AzureWhatSNew element
include('elements/azure/GeneralServiceIcons/AzureWhatSNew')
AzureWhatSNew('element', 'What S New', 'an optional tech field')
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

' loads the AzureWhatSNew card
include('elements/azure/GeneralServiceIcons/AzureWhatSNew')
AzureWhatSNewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureWhatSNew card
include('elements/azure/GeneralServiceIcons/AzureWhatSNew')
AzureWhatSNewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
