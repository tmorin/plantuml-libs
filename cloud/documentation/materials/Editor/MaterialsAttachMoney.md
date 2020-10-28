# MaterialsAttachMoney
```text
elements/materials/Editor/MaterialsAttachMoney
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAttachMoney icon](../../../icons/materials/Editor/MaterialsAttachMoney.png) | ![MaterialsAttachMoney element](MaterialsAttachMoney.element.png) | ![MaterialsAttachMoney card](MaterialsAttachMoney.card.png) |
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
include('styles/materials')

' loads the MaterialsAttachMoney element
include('elements/materials/Editor/MaterialsAttachMoney')
MaterialsAttachMoney('element', 'Attach Money', 'an optional tech field')
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

' loads the MaterialsAttachMoney element
include('elements/materials/Editor/MaterialsAttachMoney')
MaterialsAttachMoney('element', 'Attach Money', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsAttachMoney card
include('elements/materials/Editor/MaterialsAttachMoney')
MaterialsAttachMoneyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAttachMoney card
include('elements/materials/Editor/MaterialsAttachMoney')
MaterialsAttachMoneyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
