# Myspace


```text
simpleicons-14/M/Myspace
```

```text
include('simpleicons-14/M/Myspace')
```



| Illustration | Myspace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Myspace.png) | ![illustration for Myspace](../../simpleicons-14/M/Myspace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MyspaceXs>`
- `<$MyspaceSm>`
- `<$MyspaceMd>`
- `<$MyspaceLg>`





## Myspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Myspace
include('simpleicons-14/M/Myspace')

' renders the element
Myspace('Myspace', 'Myspace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Myspace
include('simpleicons-14/M/Myspace')

' renders the element
Myspace('Myspace', 'Myspace', 'an optional tech label', 'an optional description')
@enduml
```

