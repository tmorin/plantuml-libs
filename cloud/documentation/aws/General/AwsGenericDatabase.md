# AwsGenericDatabase
```text
elements/aws/General/AwsGenericDatabase
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsGenericDatabase icon](../../../icons/aws/General/AwsGenericDatabase.png) | ![AwsGenericDatabase element](AwsGenericDatabase.element.png) | ![AwsGenericDatabase card](AwsGenericDatabase.card.png) |
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

' loads the AwsGenericDatabase element
include('elements/aws/General/AwsGenericDatabase')
AwsGenericDatabase('element', 'Generic Database', 'an optional tech field')
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

' loads the AwsGenericDatabase element
include('elements/aws/General/AwsGenericDatabase')
AwsGenericDatabase('element', 'Generic Database', 'an optional tech field')
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

' loads the AwsGenericDatabase card
include('elements/aws/General/AwsGenericDatabase')
AwsGenericDatabaseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsGenericDatabase card
include('elements/aws/General/AwsGenericDatabase')
AwsGenericDatabaseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
