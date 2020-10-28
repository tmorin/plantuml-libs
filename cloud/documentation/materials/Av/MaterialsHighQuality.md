# MaterialsHighQuality
```text
elements/materials/Av/MaterialsHighQuality
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHighQuality icon](../../../icons/materials/Av/MaterialsHighQuality.png) | ![MaterialsHighQuality element](MaterialsHighQuality.element.png) | ![MaterialsHighQuality card](MaterialsHighQuality.card.png) |
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

' loads the MaterialsHighQuality element
include('elements/materials/Av/MaterialsHighQuality')
MaterialsHighQuality('element', 'High Quality', 'an optional tech field')
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

' loads the MaterialsHighQuality element
include('elements/materials/Av/MaterialsHighQuality')
MaterialsHighQuality('element', 'High Quality', 'an optional tech field')
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

' loads the MaterialsHighQuality card
include('elements/materials/Av/MaterialsHighQuality')
MaterialsHighQualityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHighQuality card
include('elements/materials/Av/MaterialsHighQuality')
MaterialsHighQualityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
