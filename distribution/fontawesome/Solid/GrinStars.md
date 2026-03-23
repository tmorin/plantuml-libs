# GrinStars


```text
fontawesome/Solid/GrinStars
```

```text
include('fontawesome/Solid/GrinStars')
```



| Illustration | GrinStars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinStars.png) | ![illustration for GrinStars](../../fontawesome/Solid/GrinStars.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinStarsXs>`
- `<$GrinStarsSm>`
- `<$GrinStarsMd>`
- `<$GrinStarsLg>`





## GrinStars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinStars
include('fontawesome/Solid/GrinStars')

' renders the element
GrinStars('GrinStars', 'Grin Stars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinStars
include('fontawesome/Solid/GrinStars')

' renders the element
GrinStars('GrinStars', 'Grin Stars', 'an optional tech label', 'an optional description')
@enduml
```

