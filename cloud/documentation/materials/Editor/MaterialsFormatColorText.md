# MaterialsFormatColorText
```text
elements/materials/Editor/MaterialsFormatColorText
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatColorText icon](../../../icons/materials/Editor/MaterialsFormatColorText.png) | ![MaterialsFormatColorText element](MaterialsFormatColorText.element.png) | ![MaterialsFormatColorText card](MaterialsFormatColorText.card.png) |
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

' loads the MaterialsFormatColorText element
include('elements/materials/Editor/MaterialsFormatColorText')
MaterialsFormatColorText('element', 'Format Color Text', 'an optional tech field')
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

' loads the MaterialsFormatColorText element
include('elements/materials/Editor/MaterialsFormatColorText')
MaterialsFormatColorText('element', 'Format Color Text', 'an optional tech field')
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

' loads the MaterialsFormatColorText card
include('elements/materials/Editor/MaterialsFormatColorText')
MaterialsFormatColorTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatColorText card
include('elements/materials/Editor/MaterialsFormatColorText')
MaterialsFormatColorTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
