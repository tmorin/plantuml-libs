# MaterialsCallToAction
```text
elements/materials/Av/MaterialsCallToAction
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCallToAction icon](../../../icons/materials/Av/MaterialsCallToAction.png) | ![MaterialsCallToAction element](MaterialsCallToAction.element.png) | ![MaterialsCallToAction card](MaterialsCallToAction.card.png) |
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

' loads the MaterialsCallToAction element
include('elements/materials/Av/MaterialsCallToAction')
MaterialsCallToAction('element', 'Call To Action', 'an optional tech field')
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

' loads the MaterialsCallToAction element
include('elements/materials/Av/MaterialsCallToAction')
MaterialsCallToAction('element', 'Call To Action', 'an optional tech field')
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

' loads the MaterialsCallToAction card
include('elements/materials/Av/MaterialsCallToAction')
MaterialsCallToActionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCallToAction card
include('elements/materials/Av/MaterialsCallToAction')
MaterialsCallToActionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
