# Duplicati


```text
simpleicons-14/D/Duplicati
```

```text
include('simpleicons-14/D/Duplicati')
```



| Illustration | Duplicati |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Duplicati.png) | ![illustration for Duplicati](../../simpleicons-14/D/Duplicati.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DuplicatiXs>`
- `<$DuplicatiSm>`
- `<$DuplicatiMd>`
- `<$DuplicatiLg>`





## Duplicati

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Duplicati
include('simpleicons-14/D/Duplicati')

' renders the element
Duplicati('Duplicati', 'Duplicati', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Duplicati
include('simpleicons-14/D/Duplicati')

' renders the element
Duplicati('Duplicati', 'Duplicati', 'an optional tech label', 'an optional description')
@enduml
```

