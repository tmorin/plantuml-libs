# AzureAppServiceMobile
```text
elements/azure/MobileServiceColor/AzureAppServiceMobile
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAppServiceMobile icon](../../../icons/azure/MobileServiceColor/AzureAppServiceMobile.png) | ![AzureAppServiceMobile element](AzureAppServiceMobile.element.png) | ![AzureAppServiceMobile card](AzureAppServiceMobile.card.png) |
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

' loads the AzureAppServiceMobile element
include('elements/azure/MobileServiceColor/AzureAppServiceMobile')
AzureAppServiceMobile('element', 'App Service Mobile', 'an optional tech field')
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

' loads the AzureAppServiceMobile element
include('elements/azure/MobileServiceColor/AzureAppServiceMobile')
AzureAppServiceMobile('element', 'App Service Mobile', 'an optional tech field')
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

' loads the AzureAppServiceMobile card
include('elements/azure/MobileServiceColor/AzureAppServiceMobile')
AzureAppServiceMobileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAppServiceMobile card
include('elements/azure/MobileServiceColor/AzureAppServiceMobile')
AzureAppServiceMobileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
