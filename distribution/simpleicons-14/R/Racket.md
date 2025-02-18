# Racket


```text
simpleicons-14/R/Racket
```

```text
include('simpleicons-14/R/Racket')
```



| Illustration | Racket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Racket.png) | ![illustration for Racket](../../simpleicons-14/R/Racket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RacketXs>`
- `<$RacketSm>`
- `<$RacketMd>`
- `<$RacketLg>`





## Racket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Racket
include('simpleicons-14/R/Racket')

' renders the element
Racket('Racket', 'Racket', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Racket
include('simpleicons-14/R/Racket')

' renders the element
Racket('Racket', 'Racket', 'an optional tech label', 'an optional description')
@enduml
```

