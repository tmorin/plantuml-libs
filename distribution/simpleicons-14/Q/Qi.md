# Qi


```text
simpleicons-14/Q/Qi
```

```text
include('simpleicons-14/Q/Qi')
```



| Illustration | Qi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qi.png) | ![illustration for Qi](../../simpleicons-14/Q/Qi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QiXs>`
- `<$QiSm>`
- `<$QiMd>`
- `<$QiLg>`





## Qi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qi
include('simpleicons-14/Q/Qi')

' renders the element
Qi('Qi', 'Qi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qi
include('simpleicons-14/Q/Qi')

' renders the element
Qi('Qi', 'Qi', 'an optional tech label', 'an optional description')
@enduml
```

