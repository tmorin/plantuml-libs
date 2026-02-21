# Bombardier


```text
simpleicons/B/Bombardier
```

```text
include('simpleicons/B/Bombardier')
```



| Illustration | Bombardier |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bombardier.png) | ![illustration for Bombardier](../../simpleicons/B/Bombardier.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BombardierXs>`
- `<$BombardierSm>`
- `<$BombardierMd>`
- `<$BombardierLg>`





## Bombardier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bombardier
include('simpleicons/B/Bombardier')

' renders the element
Bombardier('Bombardier', 'Bombardier', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bombardier
include('simpleicons/B/Bombardier')

' renders the element
Bombardier('Bombardier', 'Bombardier', 'an optional tech label', 'an optional description')
@enduml
```

