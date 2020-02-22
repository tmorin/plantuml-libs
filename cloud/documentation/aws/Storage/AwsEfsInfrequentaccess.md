# AwsEfsInfrequentaccess
```text
elements/aws/Storage/AwsEfsInfrequentaccess
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEfsInfrequentaccess icon](../../../icons/aws/Storage/AwsEfsInfrequentaccess.png) | ![AwsEfsInfrequentaccess element](AwsEfsInfrequentaccess.element.png) | ![AwsEfsInfrequentaccess card](AwsEfsInfrequentaccess.card.png) |
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

' loads the AwsEfsInfrequentaccess element
include('elements/aws/Storage/AwsEfsInfrequentaccess')
AwsEfsInfrequentaccess('element', 'Efs Infrequentaccess', 'an optional tech field')
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

' loads the AwsEfsInfrequentaccess element
include('elements/aws/Storage/AwsEfsInfrequentaccess')
AwsEfsInfrequentaccess('element', 'Efs Infrequentaccess', 'an optional tech field')
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

' loads the AwsEfsInfrequentaccess card
include('elements/aws/Storage/AwsEfsInfrequentaccess')
AwsEfsInfrequentaccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEfsInfrequentaccess card
include('elements/aws/Storage/AwsEfsInfrequentaccess')
AwsEfsInfrequentaccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
