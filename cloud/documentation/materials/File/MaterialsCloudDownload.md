# MaterialsCloudDownload
```text
elements/materials/File/MaterialsCloudDownload
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCloudDownload icon](../../../icons/materials/File/MaterialsCloudDownload.png) | ![MaterialsCloudDownload element](MaterialsCloudDownload.element.png) | ![MaterialsCloudDownload card](MaterialsCloudDownload.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsCloudDownload element
include('elements/materials/File/MaterialsCloudDownload')
MaterialsCloudDownload('element', 'Cloud Download', 'an optional tech field')
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

' loads the MaterialsCloudDownload element
include('elements/materials/File/MaterialsCloudDownload')
MaterialsCloudDownload('element', 'Cloud Download', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsCloudDownload card
include('elements/materials/File/MaterialsCloudDownload')
MaterialsCloudDownloadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCloudDownload card
include('elements/materials/File/MaterialsCloudDownload')
MaterialsCloudDownloadCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
