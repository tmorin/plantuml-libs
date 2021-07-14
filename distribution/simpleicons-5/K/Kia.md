# Kia


```text
simpleicons-5/K/Kia
```

```text
include('simpleicons-5/K/Kia')
```



| Illustration | Kia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kia.png) | ![illustration for Kia](../../simpleicons-5/K/Kia.Local.png) |




## Kia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kia
include('simpleicons-5/K/Kia')

' renders the element
Kia('Kia', 'Kia', 'an optional tech label')
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

' loads the Item which embeds the element Kia
include('simpleicons-5/K/Kia')

' renders the element
Kia('Kia', 'Kia', 'an optional tech label')
@enduml
```

