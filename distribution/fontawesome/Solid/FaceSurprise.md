# FaceSurprise


```text
fontawesome/Solid/FaceSurprise
```

```text
include('fontawesome/Solid/FaceSurprise')
```



| Illustration | FaceSurprise |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceSurprise.png) | ![illustration for FaceSurprise](../../fontawesome/Solid/FaceSurprise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceSurpriseXs>`
- `<$FaceSurpriseSm>`
- `<$FaceSurpriseMd>`
- `<$FaceSurpriseLg>`





## FaceSurprise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceSurprise
include('fontawesome/Solid/FaceSurprise')

' renders the element
FaceSurprise('FaceSurprise', 'Face Surprise', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceSurprise
include('fontawesome/Solid/FaceSurprise')

' renders the element
FaceSurprise('FaceSurprise', 'Face Surprise', 'an optional tech label', 'an optional description')
@enduml
```

