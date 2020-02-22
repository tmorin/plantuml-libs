# MaterialsPictureAsPdf
```text
elements/materials/Image/MaterialsPictureAsPdf
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPictureAsPdf icon](../../../icons/materials/Image/MaterialsPictureAsPdf.png) | ![MaterialsPictureAsPdf element](MaterialsPictureAsPdf.element.png) | ![MaterialsPictureAsPdf card](MaterialsPictureAsPdf.card.png) |
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

' loads the MaterialsPictureAsPdf element
include('elements/materials/Image/MaterialsPictureAsPdf')
MaterialsPictureAsPdf('element', 'Picture As Pdf', 'an optional tech field')
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

' loads the MaterialsPictureAsPdf element
include('elements/materials/Image/MaterialsPictureAsPdf')
MaterialsPictureAsPdf('element', 'Picture As Pdf', 'an optional tech field')
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

' loads the MaterialsPictureAsPdf card
include('elements/materials/Image/MaterialsPictureAsPdf')
MaterialsPictureAsPdfCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPictureAsPdf card
include('elements/materials/Image/MaterialsPictureAsPdf')
MaterialsPictureAsPdfCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
