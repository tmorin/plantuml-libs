# Coderwall


```text
simpleicons-5/C/Coderwall
```

```text
include('simpleicons-5/C/Coderwall')
```



| Illustration | Coderwall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Coderwall.png) | ![illustration for Coderwall](../../simpleicons-5/C/Coderwall.Local.png) |




## Coderwall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Coderwall
include('simpleicons-5/C/Coderwall')

' renders the element
Coderwall('Coderwall', 'Coderwall', 'an optional tech label')
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

' loads the Item which embeds the element Coderwall
include('simpleicons-5/C/Coderwall')

' renders the element
Coderwall('Coderwall', 'Coderwall', 'an optional tech label')
@enduml
```

