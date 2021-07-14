# Jirasoftware


```text
simpleicons-5/J/Jirasoftware
```

```text
include('simpleicons-5/J/Jirasoftware')
```



| Illustration | Jirasoftware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jirasoftware.png) | ![illustration for Jirasoftware](../../simpleicons-5/J/Jirasoftware.Local.png) |




## Jirasoftware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jirasoftware
include('simpleicons-5/J/Jirasoftware')

' renders the element
Jirasoftware('Jirasoftware', 'Jirasoftware', 'an optional tech label')
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

' loads the Item which embeds the element Jirasoftware
include('simpleicons-5/J/Jirasoftware')

' renders the element
Jirasoftware('Jirasoftware', 'Jirasoftware', 'an optional tech label')
@enduml
```

