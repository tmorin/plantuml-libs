# MaterialsCloudDone
```text
elements/materials/File/MaterialsCloudDone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCloudDone icon](../../../icons/materials/File/MaterialsCloudDone.png) | ![MaterialsCloudDone element](MaterialsCloudDone.element.png) | ![MaterialsCloudDone card](MaterialsCloudDone.card.png) |
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

' loads the MaterialsCloudDone element
include('elements/materials/File/MaterialsCloudDone')
MaterialsCloudDone('element', 'Cloud Done', 'an optional tech field')
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

' loads the MaterialsCloudDone element
include('elements/materials/File/MaterialsCloudDone')
MaterialsCloudDone('element', 'Cloud Done', 'an optional tech field')
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

' loads the MaterialsCloudDone card
include('elements/materials/File/MaterialsCloudDone')
MaterialsCloudDoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCloudDone card
include('elements/materials/File/MaterialsCloudDone')
MaterialsCloudDoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
