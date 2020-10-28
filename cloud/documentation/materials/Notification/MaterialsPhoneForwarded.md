# MaterialsPhoneForwarded
```text
elements/materials/Notification/MaterialsPhoneForwarded
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhoneForwarded icon](../../../icons/materials/Notification/MaterialsPhoneForwarded.png) | ![MaterialsPhoneForwarded element](MaterialsPhoneForwarded.element.png) | ![MaterialsPhoneForwarded card](MaterialsPhoneForwarded.card.png) |
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

' loads the MaterialsPhoneForwarded element
include('elements/materials/Notification/MaterialsPhoneForwarded')
MaterialsPhoneForwarded('element', 'Phone Forwarded', 'an optional tech field')
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

' loads the MaterialsPhoneForwarded element
include('elements/materials/Notification/MaterialsPhoneForwarded')
MaterialsPhoneForwarded('element', 'Phone Forwarded', 'an optional tech field')
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

' loads the MaterialsPhoneForwarded card
include('elements/materials/Notification/MaterialsPhoneForwarded')
MaterialsPhoneForwardedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhoneForwarded card
include('elements/materials/Notification/MaterialsPhoneForwarded')
MaterialsPhoneForwardedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
