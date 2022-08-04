# Jirasoftware


```text
simpleicons-7/J/Jirasoftware
```

```text
include('simpleicons-7/J/Jirasoftware')
```



| Illustration | Jirasoftware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jirasoftware.png) | ![illustration for Jirasoftware](../../simpleicons-7/J/Jirasoftware.Local.png) |




## Jirasoftware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jirasoftware
include('simpleicons-7/J/Jirasoftware')

' renders the element
Jirasoftware('Jirasoftware', 'Jirasoftware', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jirasoftware
include('simpleicons-7/J/Jirasoftware')

' renders the element
Jirasoftware('Jirasoftware', 'Jirasoftware', 'an optional tech label', 'an optional description')
@enduml
```

