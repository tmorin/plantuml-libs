# Datev


```text
simpleicons-14/D/Datev
```

```text
include('simpleicons-14/D/Datev')
```



| Illustration | Datev |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Datev.png) | ![illustration for Datev](../../simpleicons-14/D/Datev.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DatevXs>`
- `<$DatevSm>`
- `<$DatevMd>`
- `<$DatevLg>`





## Datev

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Datev
include('simpleicons-14/D/Datev')

' renders the element
Datev('Datev', 'Datev', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datev
include('simpleicons-14/D/Datev')

' renders the element
Datev('Datev', 'Datev', 'an optional tech label', 'an optional description')
@enduml
```

