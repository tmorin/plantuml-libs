# MaterialsCloudCircle
```text
elements/materials/File/MaterialsCloudCircle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCloudCircle icon](../../../icons/materials/File/MaterialsCloudCircle.png) | ![MaterialsCloudCircle element](MaterialsCloudCircle.element.png) | ![MaterialsCloudCircle card](MaterialsCloudCircle.card.png) |
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

' loads the MaterialsCloudCircle element
include('elements/materials/File/MaterialsCloudCircle')
MaterialsCloudCircle('element', 'Cloud Circle', 'an optional tech field')
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

' loads the MaterialsCloudCircle element
include('elements/materials/File/MaterialsCloudCircle')
MaterialsCloudCircle('element', 'Cloud Circle', 'an optional tech field')
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

' loads the MaterialsCloudCircle card
include('elements/materials/File/MaterialsCloudCircle')
MaterialsCloudCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCloudCircle card
include('elements/materials/File/MaterialsCloudCircle')
MaterialsCloudCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
