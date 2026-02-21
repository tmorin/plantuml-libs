# Zerotier


```text
simpleicons-14/Z/Zerotier
```

```text
include('simpleicons-14/Z/Zerotier')
```



| Illustration | Zerotier |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zerotier.png) | ![illustration for Zerotier](../../simpleicons-14/Z/Zerotier.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZerotierXs>`
- `<$ZerotierSm>`
- `<$ZerotierMd>`
- `<$ZerotierLg>`





## Zerotier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zerotier
include('simpleicons-14/Z/Zerotier')

' renders the element
Zerotier('Zerotier', 'Zerotier', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zerotier
include('simpleicons-14/Z/Zerotier')

' renders the element
Zerotier('Zerotier', 'Zerotier', 'an optional tech label', 'an optional description')
@enduml
```

