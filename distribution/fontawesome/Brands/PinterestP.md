# PinterestP


```text
fontawesome/Brands/PinterestP
```

```text
include('fontawesome/Brands/PinterestP')
```



| Illustration | PinterestP |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/PinterestP.png) | ![illustration for PinterestP](../../fontawesome/Brands/PinterestP.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PinterestPXs>`
- `<$PinterestPSm>`
- `<$PinterestPMd>`
- `<$PinterestPLg>`





## PinterestP

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PinterestP
include('fontawesome/Brands/PinterestP')

' renders the element
PinterestP('PinterestP', 'Pinterest P', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PinterestP
include('fontawesome/Brands/PinterestP')

' renders the element
PinterestP('PinterestP', 'Pinterest P', 'an optional tech label', 'an optional description')
@enduml
```

