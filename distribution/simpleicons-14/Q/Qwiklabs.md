# Qwiklabs


```text
simpleicons-14/Q/Qwiklabs
```

```text
include('simpleicons-14/Q/Qwiklabs')
```



| Illustration | Qwiklabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qwiklabs.png) | ![illustration for Qwiklabs](../../simpleicons-14/Q/Qwiklabs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QwiklabsXs>`
- `<$QwiklabsSm>`
- `<$QwiklabsMd>`
- `<$QwiklabsLg>`





## Qwiklabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qwiklabs
include('simpleicons-14/Q/Qwiklabs')

' renders the element
Qwiklabs('Qwiklabs', 'Qwiklabs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qwiklabs
include('simpleicons-14/Q/Qwiklabs')

' renders the element
Qwiklabs('Qwiklabs', 'Qwiklabs', 'an optional tech label', 'an optional description')
@enduml
```

