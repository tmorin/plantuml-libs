# MaterialsCropFree
```text
elements/materials/Image/MaterialsCropFree
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCropFree icon](../../../icons/materials/Image/MaterialsCropFree.png) | ![MaterialsCropFree element](MaterialsCropFree.element.png) | ![MaterialsCropFree card](MaterialsCropFree.card.png) |
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

' loads the MaterialsCropFree element
include('elements/materials/Image/MaterialsCropFree')
MaterialsCropFree('element', 'Crop Free', 'an optional tech field')
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

' loads the MaterialsCropFree element
include('elements/materials/Image/MaterialsCropFree')
MaterialsCropFree('element', 'Crop Free', 'an optional tech field')
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

' loads the MaterialsCropFree card
include('elements/materials/Image/MaterialsCropFree')
MaterialsCropFreeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCropFree card
include('elements/materials/Image/MaterialsCropFree')
MaterialsCropFreeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
