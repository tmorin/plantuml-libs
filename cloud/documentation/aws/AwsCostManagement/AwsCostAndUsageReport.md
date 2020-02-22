# AwsCostAndUsageReport
```text
elements/aws/AwsCostManagement/AwsCostAndUsageReport
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCostAndUsageReport icon](../../../icons/aws/AwsCostManagement/AwsCostAndUsageReport.png) | ![AwsCostAndUsageReport element](AwsCostAndUsageReport.element.png) | ![AwsCostAndUsageReport card](AwsCostAndUsageReport.card.png) |
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

' loads the AwsCostAndUsageReport element
include('elements/aws/AwsCostManagement/AwsCostAndUsageReport')
AwsCostAndUsageReport('element', 'Cost And Usage Report', 'an optional tech field')
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

' loads the AwsCostAndUsageReport element
include('elements/aws/AwsCostManagement/AwsCostAndUsageReport')
AwsCostAndUsageReport('element', 'Cost And Usage Report', 'an optional tech field')
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

' loads the AwsCostAndUsageReport card
include('elements/aws/AwsCostManagement/AwsCostAndUsageReport')
AwsCostAndUsageReportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCostAndUsageReport card
include('elements/aws/AwsCostManagement/AwsCostAndUsageReport')
AwsCostAndUsageReportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
