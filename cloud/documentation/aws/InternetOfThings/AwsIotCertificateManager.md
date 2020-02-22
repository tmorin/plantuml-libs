# AwsIotCertificateManager
```text
elements/aws/InternetOfThings/AwsIotCertificateManager
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotCertificateManager icon](../../../icons/aws/InternetOfThings/AwsIotCertificateManager.png) | ![AwsIotCertificateManager element](AwsIotCertificateManager.element.png) | ![AwsIotCertificateManager card](AwsIotCertificateManager.card.png) |
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

' loads the AwsIotCertificateManager element
include('elements/aws/InternetOfThings/AwsIotCertificateManager')
AwsIotCertificateManager('element', 'Iot Certificate Manager', 'an optional tech field')
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

' loads the AwsIotCertificateManager element
include('elements/aws/InternetOfThings/AwsIotCertificateManager')
AwsIotCertificateManager('element', 'Iot Certificate Manager', 'an optional tech field')
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

' loads the AwsIotCertificateManager card
include('elements/aws/InternetOfThings/AwsIotCertificateManager')
AwsIotCertificateManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotCertificateManager card
include('elements/aws/InternetOfThings/AwsIotCertificateManager')
AwsIotCertificateManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
