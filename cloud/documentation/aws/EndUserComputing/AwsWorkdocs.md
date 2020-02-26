# AwsWorkdocs
```text
elements/aws/EndUserComputing/AwsWorkdocs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsWorkdocs icon](../../../icons/aws/EndUserComputing/AwsWorkdocs.png) | ![AwsWorkdocs element](AwsWorkdocs.element.png) | ![AwsWorkdocs card](AwsWorkdocs.card.png) |
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

' loads the AwsWorkdocs element
include('elements/aws/EndUserComputing/AwsWorkdocs')
AwsWorkdocs('element', 'Workdocs', 'an optional tech field')
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

' loads the AwsWorkdocs element
include('elements/aws/EndUserComputing/AwsWorkdocs')
AwsWorkdocs('element', 'Workdocs', 'an optional tech field')
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

' loads the AwsWorkdocs card
include('elements/aws/EndUserComputing/AwsWorkdocs')
AwsWorkdocsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsWorkdocs card
include('elements/aws/EndUserComputing/AwsWorkdocs')
AwsWorkdocsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
