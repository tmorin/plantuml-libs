# MaterialsAccessibility
```text
elements/materials/Action/MaterialsAccessibility
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAccessibility icon](../../../icons/materials/Action/MaterialsAccessibility.png) | ![MaterialsAccessibility element](MaterialsAccessibility.element.png) | ![MaterialsAccessibility card](MaterialsAccessibility.card.png) |
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

' loads the MaterialsAccessibility element
include('elements/materials/Action/MaterialsAccessibility')
MaterialsAccessibility('element', 'Accessibility', 'an optional tech field')
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

' loads the MaterialsAccessibility element
include('elements/materials/Action/MaterialsAccessibility')
MaterialsAccessibility('element', 'Accessibility', 'an optional tech field')
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

' loads the MaterialsAccessibility card
include('elements/materials/Action/MaterialsAccessibility')
MaterialsAccessibilityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAccessibility card
include('elements/materials/Action/MaterialsAccessibility')
MaterialsAccessibilityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
