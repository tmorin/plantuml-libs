# GrinStars


```text
fontawesome/Regular/GrinStars
```

```text
include('fontawesome/Regular/GrinStars')
```



| Illustration | GrinStars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/GrinStars.png) | ![illustration for GrinStars](../../fontawesome/Regular/GrinStars.Local.png) |



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
include('fontawesome/Regular/GrinStars')

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
include('fontawesome/Regular/GrinStars')

' renders the element
GrinStars('GrinStars', 'Grin Stars', 'an optional tech label', 'an optional description')
@enduml
```

