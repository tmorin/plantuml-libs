# SquareBluesky


```text
fontawesome/Brands/SquareBluesky
```

```text
include('fontawesome/Brands/SquareBluesky')
```



| Illustration | SquareBluesky |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareBluesky.png) | ![illustration for SquareBluesky](../../fontawesome/Brands/SquareBluesky.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareBlueskyXs>`
- `<$SquareBlueskySm>`
- `<$SquareBlueskyMd>`
- `<$SquareBlueskyLg>`





## SquareBluesky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareBluesky
include('fontawesome/Brands/SquareBluesky')

' renders the element
SquareBluesky('SquareBluesky', 'Square Bluesky', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareBluesky
include('fontawesome/Brands/SquareBluesky')

' renders the element
SquareBluesky('SquareBluesky', 'Square Bluesky', 'an optional tech label', 'an optional description')
@enduml
```

