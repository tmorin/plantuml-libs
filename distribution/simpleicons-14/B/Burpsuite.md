# Burpsuite


```text
simpleicons-14/B/Burpsuite
```

```text
include('simpleicons-14/B/Burpsuite')
```



| Illustration | Burpsuite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Burpsuite.png) | ![illustration for Burpsuite](../../simpleicons-14/B/Burpsuite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BurpsuiteXs>`
- `<$BurpsuiteSm>`
- `<$BurpsuiteMd>`
- `<$BurpsuiteLg>`





## Burpsuite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Burpsuite
include('simpleicons-14/B/Burpsuite')

' renders the element
Burpsuite('Burpsuite', 'Burpsuite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Burpsuite
include('simpleicons-14/B/Burpsuite')

' renders the element
Burpsuite('Burpsuite', 'Burpsuite', 'an optional tech label', 'an optional description')
@enduml
```

