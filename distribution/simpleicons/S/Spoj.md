# Spoj


```text
simpleicons/S/Spoj
```

```text
include('simpleicons/S/Spoj')
```



| Illustration | Spoj |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spoj.png) | ![illustration for Spoj](../../simpleicons/S/Spoj.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpojXs>`
- `<$SpojSm>`
- `<$SpojMd>`
- `<$SpojLg>`





## Spoj

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spoj
include('simpleicons/S/Spoj')

' renders the element
Spoj('Spoj', 'Spoj', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spoj
include('simpleicons/S/Spoj')

' renders the element
Spoj('Spoj', 'Spoj', 'an optional tech label', 'an optional description')
@enduml
```

