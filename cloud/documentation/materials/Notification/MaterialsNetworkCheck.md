# MaterialsNetworkCheck
```text
elements/materials/Notification/MaterialsNetworkCheck
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNetworkCheck icon](../../../icons/materials/Notification/MaterialsNetworkCheck.png) | ![MaterialsNetworkCheck element](MaterialsNetworkCheck.element.png) | ![MaterialsNetworkCheck card](MaterialsNetworkCheck.card.png) |
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
include('styles/materials')

' loads the MaterialsNetworkCheck element
include('elements/materials/Notification/MaterialsNetworkCheck')
MaterialsNetworkCheck('element', 'Network Check', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsNetworkCheck element
include('elements/materials/Notification/MaterialsNetworkCheck')
MaterialsNetworkCheck('element', 'Network Check', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsNetworkCheck card
include('elements/materials/Notification/MaterialsNetworkCheck')
MaterialsNetworkCheckCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsNetworkCheck card
include('elements/materials/Notification/MaterialsNetworkCheck')
MaterialsNetworkCheckCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
