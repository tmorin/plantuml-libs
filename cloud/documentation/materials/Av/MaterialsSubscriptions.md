# MaterialsSubscriptions
```text
elements/materials/Av/MaterialsSubscriptions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSubscriptions icon](../../../icons/materials/Av/MaterialsSubscriptions.png) | ![MaterialsSubscriptions element](MaterialsSubscriptions.element.png) | ![MaterialsSubscriptions card](MaterialsSubscriptions.card.png) |
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

' loads the MaterialsSubscriptions element
include('elements/materials/Av/MaterialsSubscriptions')
MaterialsSubscriptions('element', 'Subscriptions', 'an optional tech field')
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

' loads the MaterialsSubscriptions element
include('elements/materials/Av/MaterialsSubscriptions')
MaterialsSubscriptions('element', 'Subscriptions', 'an optional tech field')
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

' loads the MaterialsSubscriptions card
include('elements/materials/Av/MaterialsSubscriptions')
MaterialsSubscriptionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSubscriptions card
include('elements/materials/Av/MaterialsSubscriptions')
MaterialsSubscriptionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
