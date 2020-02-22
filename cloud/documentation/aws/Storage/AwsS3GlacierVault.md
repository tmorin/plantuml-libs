# AwsS3GlacierVault
```text
elements/aws/Storage/AwsS3GlacierVault
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsS3GlacierVault icon](../../../icons/aws/Storage/AwsS3GlacierVault.png) | ![AwsS3GlacierVault element](AwsS3GlacierVault.element.png) | ![AwsS3GlacierVault card](AwsS3GlacierVault.card.png) |
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

' loads the AwsS3GlacierVault element
include('elements/aws/Storage/AwsS3GlacierVault')
AwsS3GlacierVault('element', 'S3 Glacier Vault', 'an optional tech field')
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

' loads the AwsS3GlacierVault element
include('elements/aws/Storage/AwsS3GlacierVault')
AwsS3GlacierVault('element', 'S3 Glacier Vault', 'an optional tech field')
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

' loads the AwsS3GlacierVault card
include('elements/aws/Storage/AwsS3GlacierVault')
AwsS3GlacierVaultCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsS3GlacierVault card
include('elements/aws/Storage/AwsS3GlacierVault')
AwsS3GlacierVaultCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
