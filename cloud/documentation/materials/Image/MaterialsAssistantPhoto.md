# MaterialsAssistantPhoto
```text
elements/materials/Image/MaterialsAssistantPhoto
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAssistantPhoto icon](../../../icons/materials/Image/MaterialsAssistantPhoto.png) | ![MaterialsAssistantPhoto element](MaterialsAssistantPhoto.element.png) | ![MaterialsAssistantPhoto card](MaterialsAssistantPhoto.card.png) |
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

' loads the MaterialsAssistantPhoto element
include('elements/materials/Image/MaterialsAssistantPhoto')
MaterialsAssistantPhoto('element', 'Assistant Photo', 'an optional tech field')
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

' loads the MaterialsAssistantPhoto element
include('elements/materials/Image/MaterialsAssistantPhoto')
MaterialsAssistantPhoto('element', 'Assistant Photo', 'an optional tech field')
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

' loads the MaterialsAssistantPhoto card
include('elements/materials/Image/MaterialsAssistantPhoto')
MaterialsAssistantPhotoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAssistantPhoto card
include('elements/materials/Image/MaterialsAssistantPhoto')
MaterialsAssistantPhotoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
