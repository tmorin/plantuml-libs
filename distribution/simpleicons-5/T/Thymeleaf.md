# Thymeleaf


```text
simpleicons-5/T/Thymeleaf
```

```text
include('simpleicons-5/T/Thymeleaf')
```



| Illustration | Thymeleaf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Thymeleaf.png) | ![illustration for Thymeleaf](../../simpleicons-5/T/Thymeleaf.Local.png) |




## Thymeleaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Thymeleaf
include('simpleicons-5/T/Thymeleaf')

' renders the element
Thymeleaf('Thymeleaf', 'Thymeleaf', 'an optional tech label')
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

' loads the Item which embeds the element Thymeleaf
include('simpleicons-5/T/Thymeleaf')

' renders the element
Thymeleaf('Thymeleaf', 'Thymeleaf', 'an optional tech label')
@enduml
```

