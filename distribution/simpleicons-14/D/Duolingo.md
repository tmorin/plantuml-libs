# Duolingo


```text
simpleicons-14/D/Duolingo
```

```text
include('simpleicons-14/D/Duolingo')
```



| Illustration | Duolingo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Duolingo.png) | ![illustration for Duolingo](../../simpleicons-14/D/Duolingo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DuolingoXs>`
- `<$DuolingoSm>`
- `<$DuolingoMd>`
- `<$DuolingoLg>`





## Duolingo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Duolingo
include('simpleicons-14/D/Duolingo')

' renders the element
Duolingo('Duolingo', 'Duolingo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Duolingo
include('simpleicons-14/D/Duolingo')

' renders the element
Duolingo('Duolingo', 'Duolingo', 'an optional tech label', 'an optional description')
@enduml
```

