# MaterialsBrandingWatermark
```text
elements/materials/Av/MaterialsBrandingWatermark
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrandingWatermark icon](../../../icons/materials/Av/MaterialsBrandingWatermark.png) | ![MaterialsBrandingWatermark element](MaterialsBrandingWatermark.element.png) | ![MaterialsBrandingWatermark card](MaterialsBrandingWatermark.card.png) |
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
include('styles/materials')

' loads the MaterialsBrandingWatermark element
include('elements/materials/Av/MaterialsBrandingWatermark')
MaterialsBrandingWatermark('element', 'Branding Watermark', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsBrandingWatermark element
include('elements/materials/Av/MaterialsBrandingWatermark')
MaterialsBrandingWatermark('element', 'Branding Watermark', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsBrandingWatermark card
include('elements/materials/Av/MaterialsBrandingWatermark')
MaterialsBrandingWatermarkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsBrandingWatermark card
include('elements/materials/Av/MaterialsBrandingWatermark')
MaterialsBrandingWatermarkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
