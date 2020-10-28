# AwsAppstream20
```text
elements/aws/EndUserComputing/AwsAppstream20
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsAppstream20 icon](../../../icons/aws/EndUserComputing/AwsAppstream20.png) | ![AwsAppstream20 element](AwsAppstream20.element.png) | ![AwsAppstream20 card](AwsAppstream20.card.png) |
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

' loads the AwsAppstream20 element
include('elements/aws/EndUserComputing/AwsAppstream20')
AwsAppstream20('element', 'Appstream20', 'an optional tech field')
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

' loads the AwsAppstream20 element
include('elements/aws/EndUserComputing/AwsAppstream20')
AwsAppstream20('element', 'Appstream20', 'an optional tech field')
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

' loads the AwsAppstream20 card
include('elements/aws/EndUserComputing/AwsAppstream20')
AwsAppstream20Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsAppstream20 card
include('elements/aws/EndUserComputing/AwsAppstream20')
AwsAppstream20Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
