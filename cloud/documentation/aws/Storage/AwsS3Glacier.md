# AwsS3Glacier
```text
elements/aws/Storage/AwsS3Glacier
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsS3Glacier icon](../../../icons/aws/Storage/AwsS3Glacier.png) | ![AwsS3Glacier element](AwsS3Glacier.element.png) | ![AwsS3Glacier card](AwsS3Glacier.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsS3Glacier element
include('elements/aws/Storage/AwsS3Glacier')
AwsS3Glacier('element', 'S3 Glacier', 'an optional tech field')
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

' loads the AwsS3Glacier element
include('elements/aws/Storage/AwsS3Glacier')
AwsS3Glacier('element', 'S3 Glacier', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsS3Glacier card
include('elements/aws/Storage/AwsS3Glacier')
AwsS3GlacierCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsS3Glacier card
include('elements/aws/Storage/AwsS3Glacier')
AwsS3GlacierCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
