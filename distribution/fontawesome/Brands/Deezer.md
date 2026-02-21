# Deezer


```text
fontawesome/Brands/Deezer
```

```text
include('fontawesome/Brands/Deezer')
```



| Illustration | Deezer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Deezer.png) | ![illustration for Deezer](../../fontawesome/Brands/Deezer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeezerXs>`
- `<$DeezerSm>`
- `<$DeezerMd>`
- `<$DeezerLg>`





## Deezer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Deezer
include('fontawesome/Brands/Deezer')

' renders the element
Deezer('Deezer', 'Deezer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deezer
include('fontawesome/Brands/Deezer')

' renders the element
Deezer('Deezer', 'Deezer', 'an optional tech label', 'an optional description')
@enduml
```

