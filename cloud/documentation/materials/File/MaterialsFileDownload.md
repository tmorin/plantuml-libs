# MaterialsFileDownload
```text
elements/materials/File/MaterialsFileDownload
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFileDownload icon](../../../icons/materials/File/MaterialsFileDownload.png) | ![MaterialsFileDownload element](MaterialsFileDownload.element.png) | ![MaterialsFileDownload card](MaterialsFileDownload.card.png) |
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

' loads the MaterialsFileDownload element
include('elements/materials/File/MaterialsFileDownload')
MaterialsFileDownload('element', 'File Download', 'an optional tech field')
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

' loads the MaterialsFileDownload element
include('elements/materials/File/MaterialsFileDownload')
MaterialsFileDownload('element', 'File Download', 'an optional tech field')
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

' loads the MaterialsFileDownload card
include('elements/materials/File/MaterialsFileDownload')
MaterialsFileDownloadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFileDownload card
include('elements/materials/File/MaterialsFileDownload')
MaterialsFileDownloadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
