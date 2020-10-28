# MaterialsSpellcheck
```text
elements/materials/Action/MaterialsSpellcheck
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSpellcheck icon](../../../icons/materials/Action/MaterialsSpellcheck.png) | ![MaterialsSpellcheck element](MaterialsSpellcheck.element.png) | ![MaterialsSpellcheck card](MaterialsSpellcheck.card.png) |
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

' loads the MaterialsSpellcheck element
include('elements/materials/Action/MaterialsSpellcheck')
MaterialsSpellcheck('element', 'Spellcheck', 'an optional tech field')
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

' loads the MaterialsSpellcheck element
include('elements/materials/Action/MaterialsSpellcheck')
MaterialsSpellcheck('element', 'Spellcheck', 'an optional tech field')
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

' loads the MaterialsSpellcheck card
include('elements/materials/Action/MaterialsSpellcheck')
MaterialsSpellcheckCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSpellcheck card
include('elements/materials/Action/MaterialsSpellcheck')
MaterialsSpellcheckCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
