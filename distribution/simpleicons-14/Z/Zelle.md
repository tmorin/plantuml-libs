# Zelle


```text
simpleicons-14/Z/Zelle
```

```text
include('simpleicons-14/Z/Zelle')
```



| Illustration | Zelle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zelle.png) | ![illustration for Zelle](../../simpleicons-14/Z/Zelle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZelleXs>`
- `<$ZelleSm>`
- `<$ZelleMd>`
- `<$ZelleLg>`





## Zelle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zelle
include('simpleicons-14/Z/Zelle')

' renders the element
Zelle('Zelle', 'Zelle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zelle
include('simpleicons-14/Z/Zelle')

' renders the element
Zelle('Zelle', 'Zelle', 'an optional tech label', 'an optional description')
@enduml
```

