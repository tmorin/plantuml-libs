# SquareYoutube


```text
fontawesome/Brands/SquareYoutube
```

```text
include('fontawesome/Brands/SquareYoutube')
```



| Illustration | SquareYoutube |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareYoutube.png) | ![illustration for SquareYoutube](../../fontawesome/Brands/SquareYoutube.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareYoutubeXs>`
- `<$SquareYoutubeSm>`
- `<$SquareYoutubeMd>`
- `<$SquareYoutubeLg>`





## SquareYoutube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareYoutube
include('fontawesome/Brands/SquareYoutube')

' renders the element
SquareYoutube('SquareYoutube', 'Square Youtube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareYoutube
include('fontawesome/Brands/SquareYoutube')

' renders the element
SquareYoutube('SquareYoutube', 'Square Youtube', 'an optional tech label', 'an optional description')
@enduml
```

