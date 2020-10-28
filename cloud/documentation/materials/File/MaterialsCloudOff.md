# MaterialsCloudOff
```text
elements/materials/File/MaterialsCloudOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCloudOff icon](../../../icons/materials/File/MaterialsCloudOff.png) | ![MaterialsCloudOff element](MaterialsCloudOff.element.png) | ![MaterialsCloudOff card](MaterialsCloudOff.card.png) |
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

' loads the MaterialsCloudOff element
include('elements/materials/File/MaterialsCloudOff')
MaterialsCloudOff('element', 'Cloud Off', 'an optional tech field')
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

' loads the MaterialsCloudOff element
include('elements/materials/File/MaterialsCloudOff')
MaterialsCloudOff('element', 'Cloud Off', 'an optional tech field')
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

' loads the MaterialsCloudOff card
include('elements/materials/File/MaterialsCloudOff')
MaterialsCloudOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCloudOff card
include('elements/materials/File/MaterialsCloudOff')
MaterialsCloudOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
