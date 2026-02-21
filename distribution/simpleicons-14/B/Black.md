# Black


```text
simpleicons-14/B/Black
```

```text
include('simpleicons-14/B/Black')
```



| Illustration | Black |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Black.png) | ![illustration for Black](../../simpleicons-14/B/Black.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlackXs>`
- `<$BlackSm>`
- `<$BlackMd>`
- `<$BlackLg>`





## Black

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Black
include('simpleicons-14/B/Black')

' renders the element
Black('Black', 'Black', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Black
include('simpleicons-14/B/Black')

' renders the element
Black('Black', 'Black', 'an optional tech label', 'an optional description')
@enduml
```

