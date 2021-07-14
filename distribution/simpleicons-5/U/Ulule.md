# Ulule


```text
simpleicons-5/U/Ulule
```

```text
include('simpleicons-5/U/Ulule')
```



| Illustration | Ulule |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Ulule.png) | ![illustration for Ulule](../../simpleicons-5/U/Ulule.Local.png) |




## Ulule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ulule
include('simpleicons-5/U/Ulule')

' renders the element
Ulule('Ulule', 'Ulule', 'an optional tech label')
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

' loads the Item which embeds the element Ulule
include('simpleicons-5/U/Ulule')

' renders the element
Ulule('Ulule', 'Ulule', 'an optional tech label')
@enduml
```

