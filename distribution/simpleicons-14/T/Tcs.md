# Tcs


```text
simpleicons-14/T/Tcs
```

```text
include('simpleicons-14/T/Tcs')
```



| Illustration | Tcs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tcs.png) | ![illustration for Tcs](../../simpleicons-14/T/Tcs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TcsXs>`
- `<$TcsSm>`
- `<$TcsMd>`
- `<$TcsLg>`





## Tcs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tcs
include('simpleicons-14/T/Tcs')

' renders the element
Tcs('Tcs', 'Tcs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tcs
include('simpleicons-14/T/Tcs')

' renders the element
Tcs('Tcs', 'Tcs', 'an optional tech label', 'an optional description')
@enduml
```

