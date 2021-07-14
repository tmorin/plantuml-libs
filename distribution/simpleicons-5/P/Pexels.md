# Pexels


```text
simpleicons-5/P/Pexels
```

```text
include('simpleicons-5/P/Pexels')
```



| Illustration | Pexels |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pexels.png) | ![illustration for Pexels](../../simpleicons-5/P/Pexels.Local.png) |




## Pexels

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pexels
include('simpleicons-5/P/Pexels')

' renders the element
Pexels('Pexels', 'Pexels', 'an optional tech label')
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

' loads the Item which embeds the element Pexels
include('simpleicons-5/P/Pexels')

' renders the element
Pexels('Pexels', 'Pexels', 'an optional tech label')
@enduml
```

