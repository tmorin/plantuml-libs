# MaterialsSubdirectoryArrowLeft
```text
elements/materials/Navigation/MaterialsSubdirectoryArrowLeft
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSubdirectoryArrowLeft icon](../../../icons/materials/Navigation/MaterialsSubdirectoryArrowLeft.png) | ![MaterialsSubdirectoryArrowLeft element](MaterialsSubdirectoryArrowLeft.element.png) | ![MaterialsSubdirectoryArrowLeft card](MaterialsSubdirectoryArrowLeft.card.png) |
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

' loads the MaterialsSubdirectoryArrowLeft element
include('elements/materials/Navigation/MaterialsSubdirectoryArrowLeft')
MaterialsSubdirectoryArrowLeft('element', 'Subdirectory Arrow Left', 'an optional tech field')
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

' loads the MaterialsSubdirectoryArrowLeft element
include('elements/materials/Navigation/MaterialsSubdirectoryArrowLeft')
MaterialsSubdirectoryArrowLeft('element', 'Subdirectory Arrow Left', 'an optional tech field')
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

' loads the MaterialsSubdirectoryArrowLeft card
include('elements/materials/Navigation/MaterialsSubdirectoryArrowLeft')
MaterialsSubdirectoryArrowLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSubdirectoryArrowLeft card
include('elements/materials/Navigation/MaterialsSubdirectoryArrowLeft')
MaterialsSubdirectoryArrowLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
