# AwsEfsStandard
```text
elements/aws/Storage/AwsEfsStandard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEfsStandard icon](../../../icons/aws/Storage/AwsEfsStandard.png) | ![AwsEfsStandard element](AwsEfsStandard.element.png) | ![AwsEfsStandard card](AwsEfsStandard.card.png) |
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

' loads the AwsEfsStandard element
include('elements/aws/Storage/AwsEfsStandard')
AwsEfsStandard('element', 'Efs Standard', 'an optional tech field')
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

' loads the AwsEfsStandard element
include('elements/aws/Storage/AwsEfsStandard')
AwsEfsStandard('element', 'Efs Standard', 'an optional tech field')
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

' loads the AwsEfsStandard card
include('elements/aws/Storage/AwsEfsStandard')
AwsEfsStandardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEfsStandard card
include('elements/aws/Storage/AwsEfsStandard')
AwsEfsStandardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
