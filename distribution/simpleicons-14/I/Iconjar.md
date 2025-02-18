# Iconjar


```text
simpleicons-14/I/Iconjar
```

```text
include('simpleicons-14/I/Iconjar')
```



| Illustration | Iconjar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Iconjar.png) | ![illustration for Iconjar](../../simpleicons-14/I/Iconjar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IconjarXs>`
- `<$IconjarSm>`
- `<$IconjarMd>`
- `<$IconjarLg>`





## Iconjar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iconjar
include('simpleicons-14/I/Iconjar')

' renders the element
Iconjar('Iconjar', 'Iconjar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iconjar
include('simpleicons-14/I/Iconjar')

' renders the element
Iconjar('Iconjar', 'Iconjar', 'an optional tech label', 'an optional description')
@enduml
```

