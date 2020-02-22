# AwsEndUserComputing
```text
elements/aws/EndUserComputing/AwsEndUserComputing
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEndUserComputing icon](../../../icons/aws/EndUserComputing/AwsEndUserComputing.png) | ![AwsEndUserComputing element](AwsEndUserComputing.element.png) | ![AwsEndUserComputing card](AwsEndUserComputing.card.png) |
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

' loads the AwsEndUserComputing element
include('elements/aws/EndUserComputing/AwsEndUserComputing')
AwsEndUserComputing('element', 'End User Computing', 'an optional tech field')
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

' loads the AwsEndUserComputing element
include('elements/aws/EndUserComputing/AwsEndUserComputing')
AwsEndUserComputing('element', 'End User Computing', 'an optional tech field')
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

' loads the AwsEndUserComputing card
include('elements/aws/EndUserComputing/AwsEndUserComputing')
AwsEndUserComputingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEndUserComputing card
include('elements/aws/EndUserComputing/AwsEndUserComputing')
AwsEndUserComputingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
