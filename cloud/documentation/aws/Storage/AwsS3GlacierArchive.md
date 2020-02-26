# AwsS3GlacierArchive
```text
elements/aws/Storage/AwsS3GlacierArchive
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsS3GlacierArchive icon](../../../icons/aws/Storage/AwsS3GlacierArchive.png) | ![AwsS3GlacierArchive element](AwsS3GlacierArchive.element.png) | ![AwsS3GlacierArchive card](AwsS3GlacierArchive.card.png) |
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

' loads the AwsS3GlacierArchive element
include('elements/aws/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchive('element', 'S3 Glacier Archive', 'an optional tech field')
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

' loads the AwsS3GlacierArchive element
include('elements/aws/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchive('element', 'S3 Glacier Archive', 'an optional tech field')
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

' loads the AwsS3GlacierArchive card
include('elements/aws/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsS3GlacierArchive card
include('elements/aws/Storage/AwsS3GlacierArchive')
AwsS3GlacierArchiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
