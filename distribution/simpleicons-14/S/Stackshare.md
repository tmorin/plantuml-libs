# Stackshare


```text
simpleicons-14/S/Stackshare
```

```text
include('simpleicons-14/S/Stackshare')
```



| Illustration | Stackshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stackshare.png) | ![illustration for Stackshare](../../simpleicons-14/S/Stackshare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackshareXs>`
- `<$StackshareSm>`
- `<$StackshareMd>`
- `<$StackshareLg>`





## Stackshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stackshare
include('simpleicons-14/S/Stackshare')

' renders the element
Stackshare('Stackshare', 'Stackshare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stackshare
include('simpleicons-14/S/Stackshare')

' renders the element
Stackshare('Stackshare', 'Stackshare', 'an optional tech label', 'an optional description')
@enduml
```

