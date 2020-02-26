# MaterialsContactPhone
```text
elements/materials/Communication/MaterialsContactPhone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsContactPhone icon](../../../icons/materials/Communication/MaterialsContactPhone.png) | ![MaterialsContactPhone element](MaterialsContactPhone.element.png) | ![MaterialsContactPhone card](MaterialsContactPhone.card.png) |
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

' loads the MaterialsContactPhone element
include('elements/materials/Communication/MaterialsContactPhone')
MaterialsContactPhone('element', 'Contact Phone', 'an optional tech field')
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

' loads the MaterialsContactPhone element
include('elements/materials/Communication/MaterialsContactPhone')
MaterialsContactPhone('element', 'Contact Phone', 'an optional tech field')
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

' loads the MaterialsContactPhone card
include('elements/materials/Communication/MaterialsContactPhone')
MaterialsContactPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsContactPhone card
include('elements/materials/Communication/MaterialsContactPhone')
MaterialsContactPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
