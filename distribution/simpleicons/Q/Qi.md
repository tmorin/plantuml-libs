# Qi


```text
simpleicons/Q/Qi
```

```text
include('simpleicons/Q/Qi')
```



| Illustration | Qi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qi.png) | ![illustration for Qi](../../simpleicons/Q/Qi.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qi
include('simpleicons/Q/Qi')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qi
include('simpleicons/Q/Qi')

' renders the element
Qi('Qi', 'Qi', 'an optional tech label', 'an optional description')
@enduml
```

