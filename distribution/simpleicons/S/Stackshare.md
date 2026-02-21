# Stackshare


```text
simpleicons/S/Stackshare
```

```text
include('simpleicons/S/Stackshare')
```



| Illustration | Stackshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Stackshare.png) | ![illustration for Stackshare](../../simpleicons/S/Stackshare.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Stackshare
include('simpleicons/S/Stackshare')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Stackshare
include('simpleicons/S/Stackshare')

' renders the element
Stackshare('Stackshare', 'Stackshare', 'an optional tech label', 'an optional description')
@enduml
```

