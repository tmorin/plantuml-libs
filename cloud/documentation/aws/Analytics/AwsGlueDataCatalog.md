# AwsGlueDataCatalog
```text
elements/aws/Analytics/AwsGlueDataCatalog
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsGlueDataCatalog icon](../../../icons/aws/Analytics/AwsGlueDataCatalog.png) | ![AwsGlueDataCatalog element](AwsGlueDataCatalog.element.png) | ![AwsGlueDataCatalog card](AwsGlueDataCatalog.card.png) |
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

' loads the AwsGlueDataCatalog element
include('elements/aws/Analytics/AwsGlueDataCatalog')
AwsGlueDataCatalog('element', 'Glue Data Catalog', 'an optional tech field')
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

' loads the AwsGlueDataCatalog element
include('elements/aws/Analytics/AwsGlueDataCatalog')
AwsGlueDataCatalog('element', 'Glue Data Catalog', 'an optional tech field')
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

' loads the AwsGlueDataCatalog card
include('elements/aws/Analytics/AwsGlueDataCatalog')
AwsGlueDataCatalogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsGlueDataCatalog card
include('elements/aws/Analytics/AwsGlueDataCatalog')
AwsGlueDataCatalogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
