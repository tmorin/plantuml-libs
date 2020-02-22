# AwsIotHttp2Protocol
```text
elements/aws/InternetOfThings/AwsIotHttp2Protocol
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotHttp2Protocol icon](../../../icons/aws/InternetOfThings/AwsIotHttp2Protocol.png) | ![AwsIotHttp2Protocol element](AwsIotHttp2Protocol.element.png) | ![AwsIotHttp2Protocol card](AwsIotHttp2Protocol.card.png) |
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

' loads the AwsIotHttp2Protocol element
include('elements/aws/InternetOfThings/AwsIotHttp2Protocol')
AwsIotHttp2Protocol('element', 'Iot Http2 Protocol', 'an optional tech field')
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

' loads the AwsIotHttp2Protocol element
include('elements/aws/InternetOfThings/AwsIotHttp2Protocol')
AwsIotHttp2Protocol('element', 'Iot Http2 Protocol', 'an optional tech field')
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

' loads the AwsIotHttp2Protocol card
include('elements/aws/InternetOfThings/AwsIotHttp2Protocol')
AwsIotHttp2ProtocolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotHttp2Protocol card
include('elements/aws/InternetOfThings/AwsIotHttp2Protocol')
AwsIotHttp2ProtocolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
