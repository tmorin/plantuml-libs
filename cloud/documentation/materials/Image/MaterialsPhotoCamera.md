# MaterialsPhotoCamera
```text
elements/materials/Image/MaterialsPhotoCamera
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhotoCamera icon](../../../icons/materials/Image/MaterialsPhotoCamera.png) | ![MaterialsPhotoCamera element](MaterialsPhotoCamera.element.png) | ![MaterialsPhotoCamera card](MaterialsPhotoCamera.card.png) |
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

' loads the MaterialsPhotoCamera element
include('elements/materials/Image/MaterialsPhotoCamera')
MaterialsPhotoCamera('element', 'Photo Camera', 'an optional tech field')
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

' loads the MaterialsPhotoCamera element
include('elements/materials/Image/MaterialsPhotoCamera')
MaterialsPhotoCamera('element', 'Photo Camera', 'an optional tech field')
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

' loads the MaterialsPhotoCamera card
include('elements/materials/Image/MaterialsPhotoCamera')
MaterialsPhotoCameraCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhotoCamera card
include('elements/materials/Image/MaterialsPhotoCamera')
MaterialsPhotoCameraCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
