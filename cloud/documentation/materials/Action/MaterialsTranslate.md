# MaterialsTranslate
```text
elements/materials/Action/MaterialsTranslate
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTranslate icon](../../../icons/materials/Action/MaterialsTranslate.png) | ![MaterialsTranslate element](MaterialsTranslate.element.png) | ![MaterialsTranslate card](MaterialsTranslate.card.png) |
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

' loads the MaterialsTranslate element
include('elements/materials/Action/MaterialsTranslate')
MaterialsTranslate('element', 'Translate', 'an optional tech field')
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

' loads the MaterialsTranslate element
include('elements/materials/Action/MaterialsTranslate')
MaterialsTranslate('element', 'Translate', 'an optional tech field')
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

' loads the MaterialsTranslate card
include('elements/materials/Action/MaterialsTranslate')
MaterialsTranslateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTranslate card
include('elements/materials/Action/MaterialsTranslate')
MaterialsTranslateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
