# Grandfrais


```text
simpleicons-14/G/Grandfrais
```

```text
include('simpleicons-14/G/Grandfrais')
```



| Illustration | Grandfrais |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Grandfrais.png) | ![illustration for Grandfrais](../../simpleicons-14/G/Grandfrais.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrandfraisXs>`
- `<$GrandfraisSm>`
- `<$GrandfraisMd>`
- `<$GrandfraisLg>`





## Grandfrais

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Grandfrais
include('simpleicons-14/G/Grandfrais')

' renders the element
Grandfrais('Grandfrais', 'Grandfrais', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grandfrais
include('simpleicons-14/G/Grandfrais')

' renders the element
Grandfrais('Grandfrais', 'Grandfrais', 'an optional tech label', 'an optional description')
@enduml
```

