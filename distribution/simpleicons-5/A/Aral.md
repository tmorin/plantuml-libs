# Aral


```text
simpleicons-5/A/Aral
```

```text
include('simpleicons-5/A/Aral')
```



| Illustration | Aral |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aral.png) | ![illustration for Aral](../../simpleicons-5/A/Aral.Local.png) |




## Aral

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aral
include('simpleicons-5/A/Aral')

' renders the element
Aral('Aral', 'Aral', 'an optional tech label')
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

' loads the Item which embeds the element Aral
include('simpleicons-5/A/Aral')

' renders the element
Aral('Aral', 'Aral', 'an optional tech label')
@enduml
```

