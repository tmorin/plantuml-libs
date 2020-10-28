# MaterialsPhonelink
```text
elements/materials/Hardware/MaterialsPhonelink
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhonelink icon](../../../icons/materials/Hardware/MaterialsPhonelink.png) | ![MaterialsPhonelink element](MaterialsPhonelink.element.png) | ![MaterialsPhonelink card](MaterialsPhonelink.card.png) |
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

' loads the MaterialsPhonelink element
include('elements/materials/Hardware/MaterialsPhonelink')
MaterialsPhonelink('element', 'Phonelink', 'an optional tech field')
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

' loads the MaterialsPhonelink element
include('elements/materials/Hardware/MaterialsPhonelink')
MaterialsPhonelink('element', 'Phonelink', 'an optional tech field')
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

' loads the MaterialsPhonelink card
include('elements/materials/Hardware/MaterialsPhonelink')
MaterialsPhonelinkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhonelink card
include('elements/materials/Hardware/MaterialsPhonelink')
MaterialsPhonelinkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
