# StayCurrentPortrait


```text
material/Communication/StayCurrentPortrait
```

```text
include('material/Communication/StayCurrentPortrait')
```



| Illustration | StayCurrentPortrait |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/StayCurrentPortrait.png) | ![illustration for StayCurrentPortrait](../../material/Communication/StayCurrentPortrait.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StayCurrentPortraitXs>`
- `<$StayCurrentPortraitSm>`
- `<$StayCurrentPortraitMd>`
- `<$StayCurrentPortraitLg>`





## StayCurrentPortrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element StayCurrentPortrait
include('material/Communication/StayCurrentPortrait')

' renders the element
StayCurrentPortrait('StayCurrentPortrait', 'Stay Current Portrait', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element StayCurrentPortrait
include('material/Communication/StayCurrentPortrait')

' renders the element
StayCurrentPortrait('StayCurrentPortrait', 'Stay Current Portrait', 'an optional tech label', 'an optional description')
@enduml
```

