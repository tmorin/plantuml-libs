# Codeproject


```text
simpleicons-7/C/Codeproject
```

```text
include('simpleicons-7/C/Codeproject')
```



| Illustration | Codeproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Codeproject.png) | ![illustration for Codeproject](../../simpleicons-7/C/Codeproject.Local.png) |




## Codeproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codeproject
include('simpleicons-7/C/Codeproject')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codeproject
include('simpleicons-7/C/Codeproject')

' renders the element
Codeproject('Codeproject', 'Codeproject', 'an optional tech label')
@enduml
```

