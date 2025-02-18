# Peloton


```text
simpleicons-14/P/Peloton
```

```text
include('simpleicons-14/P/Peloton')
```



| Illustration | Peloton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Peloton.png) | ![illustration for Peloton](../../simpleicons-14/P/Peloton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PelotonXs>`
- `<$PelotonSm>`
- `<$PelotonMd>`
- `<$PelotonLg>`





## Peloton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Peloton
include('simpleicons-14/P/Peloton')

' renders the element
Peloton('Peloton', 'Peloton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Peloton
include('simpleicons-14/P/Peloton')

' renders the element
Peloton('Peloton', 'Peloton', 'an optional tech label', 'an optional description')
@enduml
```

