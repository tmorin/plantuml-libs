# Bandcamp


```text
fontawesome/Brands/Bandcamp
```

```text
include('fontawesome/Brands/Bandcamp')
```



| Illustration | Bandcamp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Bandcamp.png) | ![illustration for Bandcamp](../../fontawesome/Brands/Bandcamp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BandcampXs>`
- `<$BandcampSm>`
- `<$BandcampMd>`
- `<$BandcampLg>`





## Bandcamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bandcamp
include('fontawesome/Brands/Bandcamp')

' renders the element
Bandcamp('Bandcamp', 'Bandcamp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bandcamp
include('fontawesome/Brands/Bandcamp')

' renders the element
Bandcamp('Bandcamp', 'Bandcamp', 'an optional tech label', 'an optional description')
@enduml
```

