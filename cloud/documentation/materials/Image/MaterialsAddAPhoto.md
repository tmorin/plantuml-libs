# MaterialsAddAPhoto
```text
elements/materials/Image/MaterialsAddAPhoto
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAddAPhoto icon](../../../icons/materials/Image/MaterialsAddAPhoto.png) | ![MaterialsAddAPhoto element](MaterialsAddAPhoto.element.png) | ![MaterialsAddAPhoto card](MaterialsAddAPhoto.card.png) |
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

' loads the MaterialsAddAPhoto element
include('elements/materials/Image/MaterialsAddAPhoto')
MaterialsAddAPhoto('element', 'Add A Photo', 'an optional tech field')
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

' loads the MaterialsAddAPhoto element
include('elements/materials/Image/MaterialsAddAPhoto')
MaterialsAddAPhoto('element', 'Add A Photo', 'an optional tech field')
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

' loads the MaterialsAddAPhoto card
include('elements/materials/Image/MaterialsAddAPhoto')
MaterialsAddAPhotoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAddAPhoto card
include('elements/materials/Image/MaterialsAddAPhoto')
MaterialsAddAPhotoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
