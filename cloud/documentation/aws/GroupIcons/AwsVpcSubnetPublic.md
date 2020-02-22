# AwsVpcSubnetPublic
```text
elements/aws/GroupIcons/AwsVpcSubnetPublic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcSubnetPublic icon](../../../icons/aws/GroupIcons/AwsVpcSubnetPublic.png) | ![AwsVpcSubnetPublic element](AwsVpcSubnetPublic.element.png) | ![AwsVpcSubnetPublic card](AwsVpcSubnetPublic.card.png) |
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

' loads the AwsVpcSubnetPublic element
include('elements/aws/GroupIcons/AwsVpcSubnetPublic')
AwsVpcSubnetPublic('element', 'Vpc Subnet Public', 'an optional tech field')
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

' loads the AwsVpcSubnetPublic element
include('elements/aws/GroupIcons/AwsVpcSubnetPublic')
AwsVpcSubnetPublic('element', 'Vpc Subnet Public', 'an optional tech field')
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

' loads the AwsVpcSubnetPublic card
include('elements/aws/GroupIcons/AwsVpcSubnetPublic')
AwsVpcSubnetPublicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcSubnetPublic card
include('elements/aws/GroupIcons/AwsVpcSubnetPublic')
AwsVpcSubnetPublicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
