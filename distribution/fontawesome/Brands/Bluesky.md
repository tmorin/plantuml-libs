# Bluesky


```text
fontawesome/Brands/Bluesky
```

```text
include('fontawesome/Brands/Bluesky')
```



| Illustration | Bluesky |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Bluesky.png) | ![illustration for Bluesky](../../fontawesome/Brands/Bluesky.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlueskyXs>`
- `<$BlueskySm>`
- `<$BlueskyMd>`
- `<$BlueskyLg>`





## Bluesky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bluesky
include('fontawesome/Brands/Bluesky')

' renders the element
Bluesky('Bluesky', 'Bluesky', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bluesky
include('fontawesome/Brands/Bluesky')

' renders the element
Bluesky('Bluesky', 'Bluesky', 'an optional tech label', 'an optional description')
@enduml
```

