# BoardGameGeek


```text
fontawesome/Brands/BoardGameGeek
```

```text
include('fontawesome/Brands/BoardGameGeek')
```



| Illustration | BoardGameGeek |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/BoardGameGeek.png) | ![illustration for BoardGameGeek](../../fontawesome/Brands/BoardGameGeek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoardGameGeekXs>`
- `<$BoardGameGeekSm>`
- `<$BoardGameGeekMd>`
- `<$BoardGameGeekLg>`





## BoardGameGeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoardGameGeek
include('fontawesome/Brands/BoardGameGeek')

' renders the element
BoardGameGeek('BoardGameGeek', 'Board Game Geek', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoardGameGeek
include('fontawesome/Brands/BoardGameGeek')

' renders the element
BoardGameGeek('BoardGameGeek', 'Board Game Geek', 'an optional tech label', 'an optional description')
@enduml
```

