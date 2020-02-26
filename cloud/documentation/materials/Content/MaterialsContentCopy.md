# MaterialsContentCopy
```text
elements/materials/Content/MaterialsContentCopy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsContentCopy icon](../../../icons/materials/Content/MaterialsContentCopy.png) | ![MaterialsContentCopy element](MaterialsContentCopy.element.png) | ![MaterialsContentCopy card](MaterialsContentCopy.card.png) |
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

' loads the MaterialsContentCopy element
include('elements/materials/Content/MaterialsContentCopy')
MaterialsContentCopy('element', 'Content Copy', 'an optional tech field')
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

' loads the MaterialsContentCopy element
include('elements/materials/Content/MaterialsContentCopy')
MaterialsContentCopy('element', 'Content Copy', 'an optional tech field')
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

' loads the MaterialsContentCopy card
include('elements/materials/Content/MaterialsContentCopy')
MaterialsContentCopyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsContentCopy card
include('elements/materials/Content/MaterialsContentCopy')
MaterialsContentCopyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
