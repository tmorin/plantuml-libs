# Letterboxd


```text
fontawesome/Brands/Letterboxd
```

```text
include('fontawesome/Brands/Letterboxd')
```



| Illustration | Letterboxd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Letterboxd.png) | ![illustration for Letterboxd](../../fontawesome/Brands/Letterboxd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LetterboxdXs>`
- `<$LetterboxdSm>`
- `<$LetterboxdMd>`
- `<$LetterboxdLg>`





## Letterboxd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Letterboxd
include('fontawesome/Brands/Letterboxd')

' renders the element
Letterboxd('Letterboxd', 'Letterboxd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Letterboxd
include('fontawesome/Brands/Letterboxd')

' renders the element
Letterboxd('Letterboxd', 'Letterboxd', 'an optional tech label', 'an optional description')
@enduml
```

