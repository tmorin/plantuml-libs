# Okx


```text
simpleicons-14/O/Okx
```

```text
include('simpleicons-14/O/Okx')
```



| Illustration | Okx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Okx.png) | ![illustration for Okx](../../simpleicons-14/O/Okx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OkxXs>`
- `<$OkxSm>`
- `<$OkxMd>`
- `<$OkxLg>`





## Okx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Okx
include('simpleicons-14/O/Okx')

' renders the element
Okx('Okx', 'Okx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Okx
include('simpleicons-14/O/Okx')

' renders the element
Okx('Okx', 'Okx', 'an optional tech label', 'an optional description')
@enduml
```

