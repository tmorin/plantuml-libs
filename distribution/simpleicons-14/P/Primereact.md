# Primereact


```text
simpleicons-14/P/Primereact
```

```text
include('simpleicons-14/P/Primereact')
```



| Illustration | Primereact |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Primereact.png) | ![illustration for Primereact](../../simpleicons-14/P/Primereact.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrimereactXs>`
- `<$PrimereactSm>`
- `<$PrimereactMd>`
- `<$PrimereactLg>`





## Primereact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Primereact
include('simpleicons-14/P/Primereact')

' renders the element
Primereact('Primereact', 'Primereact', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Primereact
include('simpleicons-14/P/Primereact')

' renders the element
Primereact('Primereact', 'Primereact', 'an optional tech label', 'an optional description')
@enduml
```

