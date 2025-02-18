# Osano


```text
simpleicons-14/O/Osano
```

```text
include('simpleicons-14/O/Osano')
```



| Illustration | Osano |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Osano.png) | ![illustration for Osano](../../simpleicons-14/O/Osano.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OsanoXs>`
- `<$OsanoSm>`
- `<$OsanoMd>`
- `<$OsanoLg>`





## Osano

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Osano
include('simpleicons-14/O/Osano')

' renders the element
Osano('Osano', 'Osano', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Osano
include('simpleicons-14/O/Osano')

' renders the element
Osano('Osano', 'Osano', 'an optional tech label', 'an optional description')
@enduml
```

