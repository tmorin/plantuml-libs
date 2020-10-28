# AzureSharedImageGalleries
```text
elements/azure/OtherCategoryServiceIcon/AzureSharedImageGalleries
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSharedImageGalleries icon](../../../icons/azure/OtherCategoryServiceIcon/AzureSharedImageGalleries.png) | ![AzureSharedImageGalleries element](AzureSharedImageGalleries.element.png) | ![AzureSharedImageGalleries card](AzureSharedImageGalleries.card.png) |
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
include('styles/azure')

' loads the AzureSharedImageGalleries element
include('elements/azure/OtherCategoryServiceIcon/AzureSharedImageGalleries')
AzureSharedImageGalleries('element', 'Shared Image Galleries', 'an optional tech field')
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

' loads the AzureSharedImageGalleries element
include('elements/azure/OtherCategoryServiceIcon/AzureSharedImageGalleries')
AzureSharedImageGalleries('element', 'Shared Image Galleries', 'an optional tech field')
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
include('styles/azure')

' loads the AzureSharedImageGalleries card
include('elements/azure/OtherCategoryServiceIcon/AzureSharedImageGalleries')
AzureSharedImageGalleriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSharedImageGalleries card
include('elements/azure/OtherCategoryServiceIcon/AzureSharedImageGalleries')
AzureSharedImageGalleriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
