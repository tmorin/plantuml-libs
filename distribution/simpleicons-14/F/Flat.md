# Flat


```text
simpleicons-14/F/Flat
```

```text
include('simpleicons-14/F/Flat')
```



| Illustration | Flat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Flat.png) | ![illustration for Flat](../../simpleicons-14/F/Flat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlatXs>`
- `<$FlatSm>`
- `<$FlatMd>`
- `<$FlatLg>`





## Flat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Flat
include('simpleicons-14/F/Flat')

' renders the element
Flat('Flat', 'Flat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flat
include('simpleicons-14/F/Flat')

' renders the element
Flat('Flat', 'Flat', 'an optional tech label', 'an optional description')
@enduml
```

