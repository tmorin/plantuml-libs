# Monzo


```text
simpleicons/M/Monzo
```

```text
include('simpleicons/M/Monzo')
```



| Illustration | Monzo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Monzo.png) | ![illustration for Monzo](../../simpleicons/M/Monzo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonzoXs>`
- `<$MonzoSm>`
- `<$MonzoMd>`
- `<$MonzoLg>`





## Monzo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Monzo
include('simpleicons/M/Monzo')

' renders the element
Monzo('Monzo', 'Monzo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monzo
include('simpleicons/M/Monzo')

' renders the element
Monzo('Monzo', 'Monzo', 'an optional tech label', 'an optional description')
@enduml
```

