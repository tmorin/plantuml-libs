# Rustfs


```text
simpleicons/R/Rustfs
```

```text
include('simpleicons/R/Rustfs')
```



| Illustration | Rustfs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rustfs.png) | ![illustration for Rustfs](../../simpleicons/R/Rustfs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RustfsXs>`
- `<$RustfsSm>`
- `<$RustfsMd>`
- `<$RustfsLg>`





## Rustfs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rustfs
include('simpleicons/R/Rustfs')

' renders the element
Rustfs('Rustfs', 'Rustfs', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rustfs
include('simpleicons/R/Rustfs')

' renders the element
Rustfs('Rustfs', 'Rustfs', 'an optional tech label', 'an optional description')
@enduml
```

