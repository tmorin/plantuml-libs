# MaterialsImportExport
```text
elements/materials/Communication/MaterialsImportExport
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsImportExport icon](../../../icons/materials/Communication/MaterialsImportExport.png) | ![MaterialsImportExport element](MaterialsImportExport.element.png) | ![MaterialsImportExport card](MaterialsImportExport.card.png) |
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

' loads the MaterialsImportExport element
include('elements/materials/Communication/MaterialsImportExport')
MaterialsImportExport('element', 'Import Export', 'an optional tech field')
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

' loads the MaterialsImportExport element
include('elements/materials/Communication/MaterialsImportExport')
MaterialsImportExport('element', 'Import Export', 'an optional tech field')
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

' loads the MaterialsImportExport card
include('elements/materials/Communication/MaterialsImportExport')
MaterialsImportExportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsImportExport card
include('elements/materials/Communication/MaterialsImportExport')
MaterialsImportExportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
