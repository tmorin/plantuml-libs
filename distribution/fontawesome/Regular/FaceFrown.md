# FaceFrown


```text
fontawesome/Regular/FaceFrown
```

```text
include('fontawesome/Regular/FaceFrown')
```



| Illustration | FaceFrown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceFrown.png) | ![illustration for FaceFrown](../../fontawesome/Regular/FaceFrown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceFrownXs>`
- `<$FaceFrownSm>`
- `<$FaceFrownMd>`
- `<$FaceFrownLg>`





## FaceFrown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceFrown
include('fontawesome/Regular/FaceFrown')

' renders the element
FaceFrown('FaceFrown', 'Face Frown', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceFrown
include('fontawesome/Regular/FaceFrown')

' renders the element
FaceFrown('FaceFrown', 'Face Frown', 'an optional tech label', 'an optional description')
@enduml
```

