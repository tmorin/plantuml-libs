# Devdotto


```text
simpleicons-5/D/Devdotto
```

```text
include('simpleicons-5/D/Devdotto')
```



| Illustration | Devdotto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Devdotto.png) | ![illustration for Devdotto](../../simpleicons-5/D/Devdotto.Local.png) |




## Devdotto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Devdotto
include('simpleicons-5/D/Devdotto')

' renders the element
Devdotto('Devdotto', 'Devdotto', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Devdotto
include('simpleicons-5/D/Devdotto')

' renders the element
Devdotto('Devdotto', 'Devdotto', 'an optional tech label')
@enduml
```

