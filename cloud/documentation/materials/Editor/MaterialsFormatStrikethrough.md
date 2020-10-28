# MaterialsFormatStrikethrough
```text
elements/materials/Editor/MaterialsFormatStrikethrough
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatStrikethrough icon](../../../icons/materials/Editor/MaterialsFormatStrikethrough.png) | ![MaterialsFormatStrikethrough element](MaterialsFormatStrikethrough.element.png) | ![MaterialsFormatStrikethrough card](MaterialsFormatStrikethrough.card.png) |
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

' loads the MaterialsFormatStrikethrough element
include('elements/materials/Editor/MaterialsFormatStrikethrough')
MaterialsFormatStrikethrough('element', 'Format Strikethrough', 'an optional tech field')
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

' loads the MaterialsFormatStrikethrough element
include('elements/materials/Editor/MaterialsFormatStrikethrough')
MaterialsFormatStrikethrough('element', 'Format Strikethrough', 'an optional tech field')
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

' loads the MaterialsFormatStrikethrough card
include('elements/materials/Editor/MaterialsFormatStrikethrough')
MaterialsFormatStrikethroughCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatStrikethrough card
include('elements/materials/Editor/MaterialsFormatStrikethrough')
MaterialsFormatStrikethroughCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
