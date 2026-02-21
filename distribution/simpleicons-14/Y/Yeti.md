# Yeti


```text
simpleicons-14/Y/Yeti
```

```text
include('simpleicons-14/Y/Yeti')
```



| Illustration | Yeti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Yeti.png) | ![illustration for Yeti](../../simpleicons-14/Y/Yeti.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YetiXs>`
- `<$YetiSm>`
- `<$YetiMd>`
- `<$YetiLg>`





## Yeti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yeti
include('simpleicons-14/Y/Yeti')

' renders the element
Yeti('Yeti', 'Yeti', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yeti
include('simpleicons-14/Y/Yeti')

' renders the element
Yeti('Yeti', 'Yeti', 'an optional tech label', 'an optional description')
@enduml
```

