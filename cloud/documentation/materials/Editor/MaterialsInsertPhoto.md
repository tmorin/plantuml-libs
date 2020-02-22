# MaterialsInsertPhoto
```text
elements/materials/Editor/MaterialsInsertPhoto
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsInsertPhoto icon](../../../icons/materials/Editor/MaterialsInsertPhoto.png) | ![MaterialsInsertPhoto element](MaterialsInsertPhoto.element.png) | ![MaterialsInsertPhoto card](MaterialsInsertPhoto.card.png) |
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

' loads the MaterialsInsertPhoto element
include('elements/materials/Editor/MaterialsInsertPhoto')
MaterialsInsertPhoto('element', 'Insert Photo', 'an optional tech field')
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

' loads the MaterialsInsertPhoto element
include('elements/materials/Editor/MaterialsInsertPhoto')
MaterialsInsertPhoto('element', 'Insert Photo', 'an optional tech field')
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

' loads the MaterialsInsertPhoto card
include('elements/materials/Editor/MaterialsInsertPhoto')
MaterialsInsertPhotoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsInsertPhoto card
include('elements/materials/Editor/MaterialsInsertPhoto')
MaterialsInsertPhotoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
