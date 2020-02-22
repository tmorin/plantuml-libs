# MaterialsPhotoLibrary
```text
elements/materials/Image/MaterialsPhotoLibrary
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhotoLibrary icon](../../../icons/materials/Image/MaterialsPhotoLibrary.png) | ![MaterialsPhotoLibrary element](MaterialsPhotoLibrary.element.png) | ![MaterialsPhotoLibrary card](MaterialsPhotoLibrary.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsPhotoLibrary element
include('elements/materials/Image/MaterialsPhotoLibrary')
MaterialsPhotoLibrary('element', 'Photo Library', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsPhotoLibrary element
include('elements/materials/Image/MaterialsPhotoLibrary')
MaterialsPhotoLibrary('element', 'Photo Library', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsPhotoLibrary card
include('elements/materials/Image/MaterialsPhotoLibrary')
MaterialsPhotoLibraryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsPhotoLibrary card
include('elements/materials/Image/MaterialsPhotoLibrary')
MaterialsPhotoLibraryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
