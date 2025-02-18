# Gnu


```text
simpleicons-14/G/Gnu
```

```text
include('simpleicons-14/G/Gnu')
```



| Illustration | Gnu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gnu.png) | ![illustration for Gnu](../../simpleicons-14/G/Gnu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GnuXs>`
- `<$GnuSm>`
- `<$GnuMd>`
- `<$GnuLg>`





## Gnu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gnu
include('simpleicons-14/G/Gnu')

' renders the element
Gnu('Gnu', 'Gnu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gnu
include('simpleicons-14/G/Gnu')

' renders the element
Gnu('Gnu', 'Gnu', 'an optional tech label', 'an optional description')
@enduml
```

