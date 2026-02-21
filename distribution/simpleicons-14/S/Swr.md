# Swr


```text
simpleicons-14/S/Swr
```

```text
include('simpleicons-14/S/Swr')
```



| Illustration | Swr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Swr.png) | ![illustration for Swr](../../simpleicons-14/S/Swr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwrXs>`
- `<$SwrSm>`
- `<$SwrMd>`
- `<$SwrLg>`





## Swr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Swr
include('simpleicons-14/S/Swr')

' renders the element
Swr('Swr', 'Swr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swr
include('simpleicons-14/S/Swr')

' renders the element
Swr('Swr', 'Swr', 'an optional tech label', 'an optional description')
@enduml
```

