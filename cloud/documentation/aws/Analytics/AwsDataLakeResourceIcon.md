# AwsDataLakeResourceIcon
```text
elements/aws/Analytics/AwsDataLakeResourceIcon
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDataLakeResourceIcon icon](../../../icons/aws/Analytics/AwsDataLakeResourceIcon.png) | ![AwsDataLakeResourceIcon element](AwsDataLakeResourceIcon.element.png) | ![AwsDataLakeResourceIcon card](AwsDataLakeResourceIcon.card.png) |
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

' loads the AwsDataLakeResourceIcon element
include('elements/aws/Analytics/AwsDataLakeResourceIcon')
AwsDataLakeResourceIcon('element', 'Data Lake Resource Icon', 'an optional tech field')
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

' loads the AwsDataLakeResourceIcon element
include('elements/aws/Analytics/AwsDataLakeResourceIcon')
AwsDataLakeResourceIcon('element', 'Data Lake Resource Icon', 'an optional tech field')
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

' loads the AwsDataLakeResourceIcon card
include('elements/aws/Analytics/AwsDataLakeResourceIcon')
AwsDataLakeResourceIconCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDataLakeResourceIcon card
include('elements/aws/Analytics/AwsDataLakeResourceIcon')
AwsDataLakeResourceIconCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
