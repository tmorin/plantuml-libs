# Aqua


```text
simpleicons-5/A/Aqua
```

```text
include('simpleicons-5/A/Aqua')
```



| Illustration | Aqua |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aqua.png) | ![illustration for Aqua](../../simpleicons-5/A/Aqua.Local.png) |




## Aqua

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aqua
include('simpleicons-5/A/Aqua')

' renders the element
Aqua('Aqua', 'Aqua', 'an optional tech label')
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

' loads the Item which embeds the element Aqua
include('simpleicons-5/A/Aqua')

' renders the element
Aqua('Aqua', 'Aqua', 'an optional tech label')
@enduml
```

