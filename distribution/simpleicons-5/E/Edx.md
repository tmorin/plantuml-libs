# Edx


```text
simpleicons-5/E/Edx
```

```text
include('simpleicons-5/E/Edx')
```



| Illustration | Edx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Edx.png) | ![illustration for Edx](../../simpleicons-5/E/Edx.Local.png) |




## Edx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Edx
include('simpleicons-5/E/Edx')

' renders the element
Edx('Edx', 'Edx', 'an optional tech label')
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

' loads the Item which embeds the element Edx
include('simpleicons-5/E/Edx')

' renders the element
Edx('Edx', 'Edx', 'an optional tech label')
@enduml
```

