# Asciinema


```text
simpleicons-8/A/Asciinema
```

```text
include('simpleicons-8/A/Asciinema')
```



| Illustration | Asciinema |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Asciinema.png) | ![illustration for Asciinema](../../simpleicons-8/A/Asciinema.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsciinemaXs>`
- `<$AsciinemaSm>`
- `<$AsciinemaMd>`
- `<$AsciinemaLg>`





## Asciinema

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Asciinema
include('simpleicons-8/A/Asciinema')

' renders the element
Asciinema('Asciinema', 'Asciinema', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Asciinema
include('simpleicons-8/A/Asciinema')

' renders the element
Asciinema('Asciinema', 'Asciinema', 'an optional tech label', 'an optional description')
@enduml
```

