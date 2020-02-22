# AwsCertificateManager
```text
elements/aws/SecurityIdentityCompliance/AwsCertificateManager
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCertificateManager icon](../../../icons/aws/SecurityIdentityCompliance/AwsCertificateManager.png) | ![AwsCertificateManager element](AwsCertificateManager.element.png) | ![AwsCertificateManager card](AwsCertificateManager.card.png) |
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

' loads the AwsCertificateManager element
include('elements/aws/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManager('element', 'Certificate Manager', 'an optional tech field')
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

' loads the AwsCertificateManager element
include('elements/aws/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManager('element', 'Certificate Manager', 'an optional tech field')
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

' loads the AwsCertificateManager card
include('elements/aws/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCertificateManager card
include('elements/aws/SecurityIdentityCompliance/AwsCertificateManager')
AwsCertificateManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
