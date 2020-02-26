# AwsCertificateAuthority
```text
elements/aws/SecurityIdentityCompliance/AwsCertificateAuthority
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCertificateAuthority icon](../../../icons/aws/SecurityIdentityCompliance/AwsCertificateAuthority.png) | ![AwsCertificateAuthority element](AwsCertificateAuthority.element.png) | ![AwsCertificateAuthority card](AwsCertificateAuthority.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsCertificateAuthority element
include('elements/aws/SecurityIdentityCompliance/AwsCertificateAuthority')
AwsCertificateAuthority('element', 'Certificate Authority', 'an optional tech field')
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

' loads the AwsCertificateAuthority element
include('elements/aws/SecurityIdentityCompliance/AwsCertificateAuthority')
AwsCertificateAuthority('element', 'Certificate Authority', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsCertificateAuthority card
include('elements/aws/SecurityIdentityCompliance/AwsCertificateAuthority')
AwsCertificateAuthorityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCertificateAuthority card
include('elements/aws/SecurityIdentityCompliance/AwsCertificateAuthority')
AwsCertificateAuthorityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
