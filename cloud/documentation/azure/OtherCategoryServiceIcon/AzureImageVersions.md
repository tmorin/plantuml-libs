# AzureImageVersions
```text
elements/azure/OtherCategoryServiceIcon/AzureImageVersions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureImageVersions icon](../../../icons/azure/OtherCategoryServiceIcon/AzureImageVersions.png) | ![AzureImageVersions element](AzureImageVersions.element.png) | ![AzureImageVersions card](AzureImageVersions.card.png) |
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
include('styles/azure')

' loads the AzureImageVersions element
include('elements/azure/OtherCategoryServiceIcon/AzureImageVersions')
AzureImageVersions('element', 'Image Versions', 'an optional tech field')
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
include('styles/azure')

' loads the AzureImageVersions element
include('elements/azure/OtherCategoryServiceIcon/AzureImageVersions')
AzureImageVersions('element', 'Image Versions', 'an optional tech field')
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
include('styles/azure')

' loads the AzureImageVersions card
include('elements/azure/OtherCategoryServiceIcon/AzureImageVersions')
AzureImageVersionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/azure')

' loads the AzureImageVersions card
include('elements/azure/OtherCategoryServiceIcon/AzureImageVersions')
AzureImageVersionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
