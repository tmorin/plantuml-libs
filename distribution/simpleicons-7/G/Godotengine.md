# Godotengine


```text
simpleicons-7/G/Godotengine
```

```text
include('simpleicons-7/G/Godotengine')
```



| Illustration | Godotengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Godotengine.png) | ![illustration for Godotengine](../../simpleicons-7/G/Godotengine.Local.png) |




## Godotengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Godotengine
include('simpleicons-7/G/Godotengine')

' renders the element
Godotengine('Godotengine', 'Godotengine', 'an optional tech label')
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

' loads the Item which embeds the element Godotengine
include('simpleicons-7/G/Godotengine')

' renders the element
Godotengine('Godotengine', 'Godotengine', 'an optional tech label')
@enduml
```

