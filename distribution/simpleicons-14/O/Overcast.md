# Overcast


```text
simpleicons-14/O/Overcast
```

```text
include('simpleicons-14/O/Overcast')
```



| Illustration | Overcast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Overcast.png) | ![illustration for Overcast](../../simpleicons-14/O/Overcast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OvercastXs>`
- `<$OvercastSm>`
- `<$OvercastMd>`
- `<$OvercastLg>`





## Overcast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Overcast
include('simpleicons-14/O/Overcast')

' renders the element
Overcast('Overcast', 'Overcast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Overcast
include('simpleicons-14/O/Overcast')

' renders the element
Overcast('Overcast', 'Overcast', 'an optional tech label', 'an optional description')
@enduml
```

