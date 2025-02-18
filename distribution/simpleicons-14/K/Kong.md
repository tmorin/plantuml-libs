# Kong


```text
simpleicons-14/K/Kong
```

```text
include('simpleicons-14/K/Kong')
```



| Illustration | Kong |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kong.png) | ![illustration for Kong](../../simpleicons-14/K/Kong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KongXs>`
- `<$KongSm>`
- `<$KongMd>`
- `<$KongLg>`





## Kong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kong
include('simpleicons-14/K/Kong')

' renders the element
Kong('Kong', 'Kong', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kong
include('simpleicons-14/K/Kong')

' renders the element
Kong('Kong', 'Kong', 'an optional tech label', 'an optional description')
@enduml
```

