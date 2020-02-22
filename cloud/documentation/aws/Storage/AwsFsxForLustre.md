# AwsFsxForLustre
```text
elements/aws/Storage/AwsFsxForLustre
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsFsxForLustre icon](../../../icons/aws/Storage/AwsFsxForLustre.png) | ![AwsFsxForLustre element](AwsFsxForLustre.element.png) | ![AwsFsxForLustre card](AwsFsxForLustre.card.png) |
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

' loads the AwsFsxForLustre element
include('elements/aws/Storage/AwsFsxForLustre')
AwsFsxForLustre('element', 'Fsx For Lustre', 'an optional tech field')
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

' loads the AwsFsxForLustre element
include('elements/aws/Storage/AwsFsxForLustre')
AwsFsxForLustre('element', 'Fsx For Lustre', 'an optional tech field')
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

' loads the AwsFsxForLustre card
include('elements/aws/Storage/AwsFsxForLustre')
AwsFsxForLustreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsFsxForLustre card
include('elements/aws/Storage/AwsFsxForLustre')
AwsFsxForLustreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
