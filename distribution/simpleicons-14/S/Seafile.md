# Seafile


```text
simpleicons-14/S/Seafile
```

```text
include('simpleicons-14/S/Seafile')
```



| Illustration | Seafile |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Seafile.png) | ![illustration for Seafile](../../simpleicons-14/S/Seafile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SeafileXs>`
- `<$SeafileSm>`
- `<$SeafileMd>`
- `<$SeafileLg>`





## Seafile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Seafile
include('simpleicons-14/S/Seafile')

' renders the element
Seafile('Seafile', 'Seafile', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Seafile
include('simpleicons-14/S/Seafile')

' renders the element
Seafile('Seafile', 'Seafile', 'an optional tech label', 'an optional description')
@enduml
```

