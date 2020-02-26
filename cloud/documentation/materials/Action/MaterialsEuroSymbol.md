# MaterialsEuroSymbol
```text
elements/materials/Action/MaterialsEuroSymbol
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsEuroSymbol icon](../../../icons/materials/Action/MaterialsEuroSymbol.png) | ![MaterialsEuroSymbol element](MaterialsEuroSymbol.element.png) | ![MaterialsEuroSymbol card](MaterialsEuroSymbol.card.png) |
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

' loads the MaterialsEuroSymbol element
include('elements/materials/Action/MaterialsEuroSymbol')
MaterialsEuroSymbol('element', 'Euro Symbol', 'an optional tech field')
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

' loads the MaterialsEuroSymbol element
include('elements/materials/Action/MaterialsEuroSymbol')
MaterialsEuroSymbol('element', 'Euro Symbol', 'an optional tech field')
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

' loads the MaterialsEuroSymbol card
include('elements/materials/Action/MaterialsEuroSymbol')
MaterialsEuroSymbolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsEuroSymbol card
include('elements/materials/Action/MaterialsEuroSymbol')
MaterialsEuroSymbolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
