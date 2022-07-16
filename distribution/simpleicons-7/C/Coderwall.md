# Coderwall


```text
simpleicons-7/C/Coderwall
```

```text
include('simpleicons-7/C/Coderwall')
```



| Illustration | Coderwall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Coderwall.png) | ![illustration for Coderwall](../../simpleicons-7/C/Coderwall.Local.png) |




## Coderwall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Coderwall
include('simpleicons-7/C/Coderwall')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Coderwall
include('simpleicons-7/C/Coderwall')

' renders the element
Coderwall('Coderwall', 'Coderwall', 'an optional tech label')
@enduml
```

