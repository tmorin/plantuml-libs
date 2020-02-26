# MaterialsPersonPinCircle
```text
elements/materials/Maps/MaterialsPersonPinCircle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPersonPinCircle icon](../../../icons/materials/Maps/MaterialsPersonPinCircle.png) | ![MaterialsPersonPinCircle element](MaterialsPersonPinCircle.element.png) | ![MaterialsPersonPinCircle card](MaterialsPersonPinCircle.card.png) |
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

' loads the MaterialsPersonPinCircle element
include('elements/materials/Maps/MaterialsPersonPinCircle')
MaterialsPersonPinCircle('element', 'Person Pin Circle', 'an optional tech field')
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

' loads the MaterialsPersonPinCircle element
include('elements/materials/Maps/MaterialsPersonPinCircle')
MaterialsPersonPinCircle('element', 'Person Pin Circle', 'an optional tech field')
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

' loads the MaterialsPersonPinCircle card
include('elements/materials/Maps/MaterialsPersonPinCircle')
MaterialsPersonPinCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPersonPinCircle card
include('elements/materials/Maps/MaterialsPersonPinCircle')
MaterialsPersonPinCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
