# MaterialsFileUpload
```text
elements/materials/File/MaterialsFileUpload
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFileUpload icon](../../../icons/materials/File/MaterialsFileUpload.png) | ![MaterialsFileUpload element](MaterialsFileUpload.element.png) | ![MaterialsFileUpload card](MaterialsFileUpload.card.png) |
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

' loads the MaterialsFileUpload element
include('elements/materials/File/MaterialsFileUpload')
MaterialsFileUpload('element', 'File Upload', 'an optional tech field')
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

' loads the MaterialsFileUpload element
include('elements/materials/File/MaterialsFileUpload')
MaterialsFileUpload('element', 'File Upload', 'an optional tech field')
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

' loads the MaterialsFileUpload card
include('elements/materials/File/MaterialsFileUpload')
MaterialsFileUploadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFileUpload card
include('elements/materials/File/MaterialsFileUpload')
MaterialsFileUploadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
