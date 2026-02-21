# Deutschewelle


```text
simpleicons/D/Deutschewelle
```

```text
include('simpleicons/D/Deutschewelle')
```



| Illustration | Deutschewelle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Deutschewelle.png) | ![illustration for Deutschewelle](../../simpleicons/D/Deutschewelle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeutschewelleXs>`
- `<$DeutschewelleSm>`
- `<$DeutschewelleMd>`
- `<$DeutschewelleLg>`





## Deutschewelle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Deutschewelle
include('simpleicons/D/Deutschewelle')

' renders the element
Deutschewelle('Deutschewelle', 'Deutschewelle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deutschewelle
include('simpleicons/D/Deutschewelle')

' renders the element
Deutschewelle('Deutschewelle', 'Deutschewelle', 'an optional tech label', 'an optional description')
@enduml
```

