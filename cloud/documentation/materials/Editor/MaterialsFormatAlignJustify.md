# MaterialsFormatAlignJustify
```text
elements/materials/Editor/MaterialsFormatAlignJustify
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatAlignJustify icon](../../../icons/materials/Editor/MaterialsFormatAlignJustify.png) | ![MaterialsFormatAlignJustify element](MaterialsFormatAlignJustify.element.png) | ![MaterialsFormatAlignJustify card](MaterialsFormatAlignJustify.card.png) |
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

' loads the MaterialsFormatAlignJustify element
include('elements/materials/Editor/MaterialsFormatAlignJustify')
MaterialsFormatAlignJustify('element', 'Format Align Justify', 'an optional tech field')
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

' loads the MaterialsFormatAlignJustify element
include('elements/materials/Editor/MaterialsFormatAlignJustify')
MaterialsFormatAlignJustify('element', 'Format Align Justify', 'an optional tech field')
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

' loads the MaterialsFormatAlignJustify card
include('elements/materials/Editor/MaterialsFormatAlignJustify')
MaterialsFormatAlignJustifyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatAlignJustify card
include('elements/materials/Editor/MaterialsFormatAlignJustify')
MaterialsFormatAlignJustifyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
