# MaterialsSmsFailed
```text
elements/materials/Notification/MaterialsSmsFailed
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSmsFailed icon](../../../icons/materials/Notification/MaterialsSmsFailed.png) | ![MaterialsSmsFailed element](MaterialsSmsFailed.element.png) | ![MaterialsSmsFailed card](MaterialsSmsFailed.card.png) |
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

' loads the MaterialsSmsFailed element
include('elements/materials/Notification/MaterialsSmsFailed')
MaterialsSmsFailed('element', 'Sms Failed', 'an optional tech field')
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

' loads the MaterialsSmsFailed element
include('elements/materials/Notification/MaterialsSmsFailed')
MaterialsSmsFailed('element', 'Sms Failed', 'an optional tech field')
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

' loads the MaterialsSmsFailed card
include('elements/materials/Notification/MaterialsSmsFailed')
MaterialsSmsFailedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSmsFailed card
include('elements/materials/Notification/MaterialsSmsFailed')
MaterialsSmsFailedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
