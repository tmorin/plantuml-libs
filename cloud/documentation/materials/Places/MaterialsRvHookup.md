# MaterialsRvHookup
```text
elements/materials/Places/MaterialsRvHookup
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRvHookup icon](../../../icons/materials/Places/MaterialsRvHookup.png) | ![MaterialsRvHookup element](MaterialsRvHookup.element.png) | ![MaterialsRvHookup card](MaterialsRvHookup.card.png) |
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

' loads the MaterialsRvHookup element
include('elements/materials/Places/MaterialsRvHookup')
MaterialsRvHookup('element', 'Rv Hookup', 'an optional tech field')
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

' loads the MaterialsRvHookup element
include('elements/materials/Places/MaterialsRvHookup')
MaterialsRvHookup('element', 'Rv Hookup', 'an optional tech field')
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

' loads the MaterialsRvHookup card
include('elements/materials/Places/MaterialsRvHookup')
MaterialsRvHookupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRvHookup card
include('elements/materials/Places/MaterialsRvHookup')
MaterialsRvHookupCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
