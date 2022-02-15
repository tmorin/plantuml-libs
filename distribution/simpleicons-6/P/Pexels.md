# Pexels


```text
simpleicons-6/P/Pexels
```

```text
include('simpleicons-6/P/Pexels')
```



| Illustration | Pexels |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pexels.png) | ![illustration for Pexels](../../simpleicons-6/P/Pexels.Local.png) |




## Pexels

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pexels
include('simpleicons-6/P/Pexels')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pexels
include('simpleicons-6/P/Pexels')

' renders the element
Pexels('Pexels', 'Pexels', 'an optional tech label')
@enduml
```

