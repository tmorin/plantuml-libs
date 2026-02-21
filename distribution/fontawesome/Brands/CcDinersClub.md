# CcDinersClub


```text
fontawesome/Brands/CcDinersClub
```

```text
include('fontawesome/Brands/CcDinersClub')
```



| Illustration | CcDinersClub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CcDinersClub.png) | ![illustration for CcDinersClub](../../fontawesome/Brands/CcDinersClub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcDinersClubXs>`
- `<$CcDinersClubSm>`
- `<$CcDinersClubMd>`
- `<$CcDinersClubLg>`





## CcDinersClub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CcDinersClub
include('fontawesome/Brands/CcDinersClub')

' renders the element
CcDinersClub('CcDinersClub', 'Cc Diners Club', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CcDinersClub
include('fontawesome/Brands/CcDinersClub')

' renders the element
CcDinersClub('CcDinersClub', 'Cc Diners Club', 'an optional tech label', 'an optional description')
@enduml
```

