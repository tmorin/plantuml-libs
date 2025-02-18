# Ovh


```text
simpleicons-14/O/Ovh
```

```text
include('simpleicons-14/O/Ovh')
```



| Illustration | Ovh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Ovh.png) | ![illustration for Ovh](../../simpleicons-14/O/Ovh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OvhXs>`
- `<$OvhSm>`
- `<$OvhMd>`
- `<$OvhLg>`





## Ovh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ovh
include('simpleicons-14/O/Ovh')

' renders the element
Ovh('Ovh', 'Ovh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ovh
include('simpleicons-14/O/Ovh')

' renders the element
Ovh('Ovh', 'Ovh', 'an optional tech label', 'an optional description')
@enduml
```

