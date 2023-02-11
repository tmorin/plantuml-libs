# Godotengine


```text
simpleicons-8/G/Godotengine
```

```text
include('simpleicons-8/G/Godotengine')
```



| Illustration | Godotengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Godotengine.png) | ![illustration for Godotengine](../../simpleicons-8/G/Godotengine.Local.png) |




## Godotengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Godotengine
include('simpleicons-8/G/Godotengine')

' renders the element
Godotengine('Godotengine', 'Godotengine', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Godotengine
include('simpleicons-8/G/Godotengine')

' renders the element
Godotengine('Godotengine', 'Godotengine', 'an optional tech label', 'an optional description')
@enduml
```

