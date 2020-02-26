# MaterialsFormatAlignCenter
```text
elements/materials/Editor/MaterialsFormatAlignCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatAlignCenter icon](../../../icons/materials/Editor/MaterialsFormatAlignCenter.png) | ![MaterialsFormatAlignCenter element](MaterialsFormatAlignCenter.element.png) | ![MaterialsFormatAlignCenter card](MaterialsFormatAlignCenter.card.png) |
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

' loads the MaterialsFormatAlignCenter element
include('elements/materials/Editor/MaterialsFormatAlignCenter')
MaterialsFormatAlignCenter('element', 'Format Align Center', 'an optional tech field')
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

' loads the MaterialsFormatAlignCenter element
include('elements/materials/Editor/MaterialsFormatAlignCenter')
MaterialsFormatAlignCenter('element', 'Format Align Center', 'an optional tech field')
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

' loads the MaterialsFormatAlignCenter card
include('elements/materials/Editor/MaterialsFormatAlignCenter')
MaterialsFormatAlignCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatAlignCenter card
include('elements/materials/Editor/MaterialsFormatAlignCenter')
MaterialsFormatAlignCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
