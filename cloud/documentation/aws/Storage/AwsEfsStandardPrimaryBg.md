# AwsEfsStandardPrimaryBg
```text
elements/aws/Storage/AwsEfsStandardPrimaryBg
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEfsStandardPrimaryBg icon](../../../icons/aws/Storage/AwsEfsStandardPrimaryBg.png) | ![AwsEfsStandardPrimaryBg element](AwsEfsStandardPrimaryBg.element.png) | ![AwsEfsStandardPrimaryBg card](AwsEfsStandardPrimaryBg.card.png) |
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

' loads the AwsEfsStandardPrimaryBg element
include('elements/aws/Storage/AwsEfsStandardPrimaryBg')
AwsEfsStandardPrimaryBg('element', 'Efs Standard Primary Bg', 'an optional tech field')
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

' loads the AwsEfsStandardPrimaryBg element
include('elements/aws/Storage/AwsEfsStandardPrimaryBg')
AwsEfsStandardPrimaryBg('element', 'Efs Standard Primary Bg', 'an optional tech field')
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

' loads the AwsEfsStandardPrimaryBg card
include('elements/aws/Storage/AwsEfsStandardPrimaryBg')
AwsEfsStandardPrimaryBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEfsStandardPrimaryBg card
include('elements/aws/Storage/AwsEfsStandardPrimaryBg')
AwsEfsStandardPrimaryBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
