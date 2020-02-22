# MaterialsCloudUpload
```text
elements/materials/File/MaterialsCloudUpload
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCloudUpload icon](../../../icons/materials/File/MaterialsCloudUpload.png) | ![MaterialsCloudUpload element](MaterialsCloudUpload.element.png) | ![MaterialsCloudUpload card](MaterialsCloudUpload.card.png) |
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

' loads the MaterialsCloudUpload element
include('elements/materials/File/MaterialsCloudUpload')
MaterialsCloudUpload('element', 'Cloud Upload', 'an optional tech field')
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

' loads the MaterialsCloudUpload element
include('elements/materials/File/MaterialsCloudUpload')
MaterialsCloudUpload('element', 'Cloud Upload', 'an optional tech field')
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

' loads the MaterialsCloudUpload card
include('elements/materials/File/MaterialsCloudUpload')
MaterialsCloudUploadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCloudUpload card
include('elements/materials/File/MaterialsCloudUpload')
MaterialsCloudUploadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
