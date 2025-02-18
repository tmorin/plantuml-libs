# Freenas


```text
simpleicons-14/F/Freenas
```

```text
include('simpleicons-14/F/Freenas')
```



| Illustration | Freenas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Freenas.png) | ![illustration for Freenas](../../simpleicons-14/F/Freenas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreenasXs>`
- `<$FreenasSm>`
- `<$FreenasMd>`
- `<$FreenasLg>`





## Freenas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freenas
include('simpleicons-14/F/Freenas')

' renders the element
Freenas('Freenas', 'Freenas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freenas
include('simpleicons-14/F/Freenas')

' renders the element
Freenas('Freenas', 'Freenas', 'an optional tech label', 'an optional description')
@enduml
```

