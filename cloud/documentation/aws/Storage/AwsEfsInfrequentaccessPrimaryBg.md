# AwsEfsInfrequentaccessPrimaryBg
```text
elements/aws/Storage/AwsEfsInfrequentaccessPrimaryBg
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEfsInfrequentaccessPrimaryBg icon](../../../icons/aws/Storage/AwsEfsInfrequentaccessPrimaryBg.png) | ![AwsEfsInfrequentaccessPrimaryBg element](AwsEfsInfrequentaccessPrimaryBg.element.png) | ![AwsEfsInfrequentaccessPrimaryBg card](AwsEfsInfrequentaccessPrimaryBg.card.png) |
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

' loads the AwsEfsInfrequentaccessPrimaryBg element
include('elements/aws/Storage/AwsEfsInfrequentaccessPrimaryBg')
AwsEfsInfrequentaccessPrimaryBg('element', 'Efs Infrequentaccess Primary Bg', 'an optional tech field')
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

' loads the AwsEfsInfrequentaccessPrimaryBg element
include('elements/aws/Storage/AwsEfsInfrequentaccessPrimaryBg')
AwsEfsInfrequentaccessPrimaryBg('element', 'Efs Infrequentaccess Primary Bg', 'an optional tech field')
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

' loads the AwsEfsInfrequentaccessPrimaryBg card
include('elements/aws/Storage/AwsEfsInfrequentaccessPrimaryBg')
AwsEfsInfrequentaccessPrimaryBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEfsInfrequentaccessPrimaryBg card
include('elements/aws/Storage/AwsEfsInfrequentaccessPrimaryBg')
AwsEfsInfrequentaccessPrimaryBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
