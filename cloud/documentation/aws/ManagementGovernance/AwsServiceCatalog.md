# AwsServiceCatalog
```text
elements/aws/ManagementGovernance/AwsServiceCatalog
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsServiceCatalog icon](../../../icons/aws/ManagementGovernance/AwsServiceCatalog.png) | ![AwsServiceCatalog element](AwsServiceCatalog.element.png) | ![AwsServiceCatalog card](AwsServiceCatalog.card.png) |
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
include('styles/aws')

' loads the AwsServiceCatalog element
include('elements/aws/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalog('element', 'Service Catalog', 'an optional tech field')
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
include('styles/aws')

' loads the AwsServiceCatalog element
include('elements/aws/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalog('element', 'Service Catalog', 'an optional tech field')
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
include('styles/aws')

' loads the AwsServiceCatalog card
include('elements/aws/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsServiceCatalog card
include('elements/aws/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
