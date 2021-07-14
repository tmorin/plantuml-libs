# Codeproject


```text
simpleicons-5/C/Codeproject
```

```text
include('simpleicons-5/C/Codeproject')
```



| Illustration | Codeproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codeproject.png) | ![illustration for Codeproject](../../simpleicons-5/C/Codeproject.Local.png) |




## Codeproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codeproject
include('simpleicons-5/C/Codeproject')

' renders the element
Codeproject('Codeproject', 'Codeproject', 'an optional tech label')
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

' loads the Item which embeds the element Codeproject
include('simpleicons-5/C/Codeproject')

' renders the element
Codeproject('Codeproject', 'Codeproject', 'an optional tech label')
@enduml
```

