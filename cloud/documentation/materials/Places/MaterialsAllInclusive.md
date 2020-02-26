# MaterialsAllInclusive
```text
elements/materials/Places/MaterialsAllInclusive
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAllInclusive icon](../../../icons/materials/Places/MaterialsAllInclusive.png) | ![MaterialsAllInclusive element](MaterialsAllInclusive.element.png) | ![MaterialsAllInclusive card](MaterialsAllInclusive.card.png) |
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

' loads the MaterialsAllInclusive element
include('elements/materials/Places/MaterialsAllInclusive')
MaterialsAllInclusive('element', 'All Inclusive', 'an optional tech field')
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

' loads the MaterialsAllInclusive element
include('elements/materials/Places/MaterialsAllInclusive')
MaterialsAllInclusive('element', 'All Inclusive', 'an optional tech field')
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

' loads the MaterialsAllInclusive card
include('elements/materials/Places/MaterialsAllInclusive')
MaterialsAllInclusiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAllInclusive card
include('elements/materials/Places/MaterialsAllInclusive')
MaterialsAllInclusiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
