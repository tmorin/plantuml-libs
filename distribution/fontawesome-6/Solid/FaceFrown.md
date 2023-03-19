# FaceFrown


```text
fontawesome-6/Solid/FaceFrown
```

```text
include('fontawesome-6/Solid/FaceFrown')
```



| Illustration | FaceFrown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceFrown.png) | ![illustration for FaceFrown](../../fontawesome-6/Solid/FaceFrown.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceFrown
include('fontawesome-6/Solid/FaceFrown')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceFrown
include('fontawesome-6/Solid/FaceFrown')

' renders the element
FaceFrown('FaceFrown', 'Face Frown', 'an optional tech label', 'an optional description')
@enduml
```

