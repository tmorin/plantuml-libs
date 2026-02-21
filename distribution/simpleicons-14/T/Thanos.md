# Thanos


```text
simpleicons-14/T/Thanos
```

```text
include('simpleicons-14/T/Thanos')
```



| Illustration | Thanos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thanos.png) | ![illustration for Thanos](../../simpleicons-14/T/Thanos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThanosXs>`
- `<$ThanosSm>`
- `<$ThanosMd>`
- `<$ThanosLg>`





## Thanos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thanos
include('simpleicons-14/T/Thanos')

' renders the element
Thanos('Thanos', 'Thanos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thanos
include('simpleicons-14/T/Thanos')

' renders the element
Thanos('Thanos', 'Thanos', 'an optional tech label', 'an optional description')
@enduml
```

