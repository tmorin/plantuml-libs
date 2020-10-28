# AzureControllers
```text
elements/azure/OtherCategoryServiceIcon/AzureControllers
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureControllers icon](../../../icons/azure/OtherCategoryServiceIcon/AzureControllers.png) | ![AzureControllers element](AzureControllers.element.png) | ![AzureControllers card](AzureControllers.card.png) |
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

' loads the AzureControllers element
include('elements/azure/OtherCategoryServiceIcon/AzureControllers')
AzureControllers('element', 'Controllers', 'an optional tech field')
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

' loads the AzureControllers element
include('elements/azure/OtherCategoryServiceIcon/AzureControllers')
AzureControllers('element', 'Controllers', 'an optional tech field')
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

' loads the AzureControllers card
include('elements/azure/OtherCategoryServiceIcon/AzureControllers')
AzureControllersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureControllers card
include('elements/azure/OtherCategoryServiceIcon/AzureControllers')
AzureControllersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
