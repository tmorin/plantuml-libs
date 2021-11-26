# Codeigniter


```text
simpleicons-5/C/Codeigniter
```

```text
include('simpleicons-5/C/Codeigniter')
```



| Illustration | Codeigniter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codeigniter.png) | ![illustration for Codeigniter](../../simpleicons-5/C/Codeigniter.Local.png) |




## Codeigniter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codeigniter
include('simpleicons-5/C/Codeigniter')

' renders the element
Codeigniter('Codeigniter', 'Codeigniter', 'an optional tech label')
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

' loads the Item which embeds the element Codeigniter
include('simpleicons-5/C/Codeigniter')

' renders the element
Codeigniter('Codeigniter', 'Codeigniter', 'an optional tech label')
@enduml
```

