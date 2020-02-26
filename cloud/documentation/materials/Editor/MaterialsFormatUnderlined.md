# MaterialsFormatUnderlined
```text
elements/materials/Editor/MaterialsFormatUnderlined
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatUnderlined icon](../../../icons/materials/Editor/MaterialsFormatUnderlined.png) | ![MaterialsFormatUnderlined element](MaterialsFormatUnderlined.element.png) | ![MaterialsFormatUnderlined card](MaterialsFormatUnderlined.card.png) |
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

' loads the MaterialsFormatUnderlined element
include('elements/materials/Editor/MaterialsFormatUnderlined')
MaterialsFormatUnderlined('element', 'Format Underlined', 'an optional tech field')
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

' loads the MaterialsFormatUnderlined element
include('elements/materials/Editor/MaterialsFormatUnderlined')
MaterialsFormatUnderlined('element', 'Format Underlined', 'an optional tech field')
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

' loads the MaterialsFormatUnderlined card
include('elements/materials/Editor/MaterialsFormatUnderlined')
MaterialsFormatUnderlinedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatUnderlined card
include('elements/materials/Editor/MaterialsFormatUnderlined')
MaterialsFormatUnderlinedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
