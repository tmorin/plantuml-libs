# Rottentomatoes


```text
simpleicons/R/Rottentomatoes
```

```text
include('simpleicons/R/Rottentomatoes')
```



| Illustration | Rottentomatoes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rottentomatoes.png) | ![illustration for Rottentomatoes](../../simpleicons/R/Rottentomatoes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RottentomatoesXs>`
- `<$RottentomatoesSm>`
- `<$RottentomatoesMd>`
- `<$RottentomatoesLg>`





## Rottentomatoes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rottentomatoes
include('simpleicons/R/Rottentomatoes')

' renders the element
Rottentomatoes('Rottentomatoes', 'Rottentomatoes', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rottentomatoes
include('simpleicons/R/Rottentomatoes')

' renders the element
Rottentomatoes('Rottentomatoes', 'Rottentomatoes', 'an optional tech label', 'an optional description')
@enduml
```

