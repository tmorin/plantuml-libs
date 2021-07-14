# Sonarsource


```text
simpleicons-5/S/Sonarsource
```

```text
include('simpleicons-5/S/Sonarsource')
```



| Illustration | Sonarsource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sonarsource.png) | ![illustration for Sonarsource](../../simpleicons-5/S/Sonarsource.Local.png) |




## Sonarsource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sonarsource
include('simpleicons-5/S/Sonarsource')

' renders the element
Sonarsource('Sonarsource', 'Sonarsource', 'an optional tech label')
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

' loads the Item which embeds the element Sonarsource
include('simpleicons-5/S/Sonarsource')

' renders the element
Sonarsource('Sonarsource', 'Sonarsource', 'an optional tech label')
@enduml
```

