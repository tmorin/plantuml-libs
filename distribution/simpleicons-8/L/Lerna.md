# Lerna


```text
simpleicons-8/L/Lerna
```

```text
include('simpleicons-8/L/Lerna')
```



| Illustration | Lerna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Lerna.png) | ![illustration for Lerna](../../simpleicons-8/L/Lerna.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LernaXs>`
- `<$LernaSm>`
- `<$LernaMd>`
- `<$LernaLg>`





## Lerna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lerna
include('simpleicons-8/L/Lerna')

' renders the element
Lerna('Lerna', 'Lerna', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lerna
include('simpleicons-8/L/Lerna')

' renders the element
Lerna('Lerna', 'Lerna', 'an optional tech label', 'an optional description')
@enduml
```

