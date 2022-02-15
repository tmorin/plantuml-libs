# Edx


```text
simpleicons-6/E/Edx
```

```text
include('simpleicons-6/E/Edx')
```



| Illustration | Edx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Edx.png) | ![illustration for Edx](../../simpleicons-6/E/Edx.Local.png) |




## Edx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Edx
include('simpleicons-6/E/Edx')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Edx
include('simpleicons-6/E/Edx')

' renders the element
Edx('Edx', 'Edx', 'an optional tech label')
@enduml
```

