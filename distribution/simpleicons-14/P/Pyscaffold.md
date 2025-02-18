# Pyscaffold


```text
simpleicons-14/P/Pyscaffold
```

```text
include('simpleicons-14/P/Pyscaffold')
```



| Illustration | Pyscaffold |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pyscaffold.png) | ![illustration for Pyscaffold](../../simpleicons-14/P/Pyscaffold.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PyscaffoldXs>`
- `<$PyscaffoldSm>`
- `<$PyscaffoldMd>`
- `<$PyscaffoldLg>`





## Pyscaffold

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pyscaffold
include('simpleicons-14/P/Pyscaffold')

' renders the element
Pyscaffold('Pyscaffold', 'Pyscaffold', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pyscaffold
include('simpleicons-14/P/Pyscaffold')

' renders the element
Pyscaffold('Pyscaffold', 'Pyscaffold', 'an optional tech label', 'an optional description')
@enduml
```

