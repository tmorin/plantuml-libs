# Mdblist


```text
simpleicons-14/M/Mdblist
```

```text
include('simpleicons-14/M/Mdblist')
```



| Illustration | Mdblist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mdblist.png) | ![illustration for Mdblist](../../simpleicons-14/M/Mdblist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MdblistXs>`
- `<$MdblistSm>`
- `<$MdblistMd>`
- `<$MdblistLg>`





## Mdblist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mdblist
include('simpleicons-14/M/Mdblist')

' renders the element
Mdblist('Mdblist', 'Mdblist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mdblist
include('simpleicons-14/M/Mdblist')

' renders the element
Mdblist('Mdblist', 'Mdblist', 'an optional tech label', 'an optional description')
@enduml
```

