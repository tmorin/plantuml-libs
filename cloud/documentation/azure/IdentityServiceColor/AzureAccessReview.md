# AzureAccessReview
```text
elements/azure/IdentityServiceColor/AzureAccessReview
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAccessReview icon](../../../icons/azure/IdentityServiceColor/AzureAccessReview.png) | ![AzureAccessReview element](AzureAccessReview.element.png) | ![AzureAccessReview card](AzureAccessReview.card.png) |
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

' loads the AzureAccessReview element
include('elements/azure/IdentityServiceColor/AzureAccessReview')
AzureAccessReview('element', 'Access Review', 'an optional tech field')
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

' loads the AzureAccessReview element
include('elements/azure/IdentityServiceColor/AzureAccessReview')
AzureAccessReview('element', 'Access Review', 'an optional tech field')
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

' loads the AzureAccessReview card
include('elements/azure/IdentityServiceColor/AzureAccessReview')
AzureAccessReviewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAccessReview card
include('elements/azure/IdentityServiceColor/AzureAccessReview')
AzureAccessReviewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
