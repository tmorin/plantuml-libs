# Hbo


```text
simpleicons-5/H/Hbo
```

```text
include('simpleicons-5/H/Hbo')
```



| Illustration | Hbo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hbo.png) | ![illustration for Hbo](../../simpleicons-5/H/Hbo.Local.png) |




## Hbo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hbo
include('simpleicons-5/H/Hbo')

' renders the element
Hbo('Hbo', 'Hbo', 'an optional tech label')
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

' loads the Item which embeds the element Hbo
include('simpleicons-5/H/Hbo')

' renders the element
Hbo('Hbo', 'Hbo', 'an optional tech label')
@enduml
```

