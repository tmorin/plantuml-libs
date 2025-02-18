# Qmk


```text
simpleicons-14/Q/Qmk
```

```text
include('simpleicons-14/Q/Qmk')
```



| Illustration | Qmk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qmk.png) | ![illustration for Qmk](../../simpleicons-14/Q/Qmk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QmkXs>`
- `<$QmkSm>`
- `<$QmkMd>`
- `<$QmkLg>`





## Qmk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qmk
include('simpleicons-14/Q/Qmk')

' renders the element
Qmk('Qmk', 'Qmk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qmk
include('simpleicons-14/Q/Qmk')

' renders the element
Qmk('Qmk', 'Qmk', 'an optional tech label', 'an optional description')
@enduml
```

