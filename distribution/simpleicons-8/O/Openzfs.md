# Openzfs


```text
simpleicons-8/O/Openzfs
```

```text
include('simpleicons-8/O/Openzfs')
```



| Illustration | Openzfs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Openzfs.png) | ![illustration for Openzfs](../../simpleicons-8/O/Openzfs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenzfsXs>`
- `<$OpenzfsSm>`
- `<$OpenzfsMd>`
- `<$OpenzfsLg>`





## Openzfs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openzfs
include('simpleicons-8/O/Openzfs')

' renders the element
Openzfs('Openzfs', 'Openzfs', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openzfs
include('simpleicons-8/O/Openzfs')

' renders the element
Openzfs('Openzfs', 'Openzfs', 'an optional tech label', 'an optional description')
@enduml
```

