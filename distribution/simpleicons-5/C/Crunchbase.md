# Crunchbase


```text
simpleicons-5/C/Crunchbase
```

```text
include('simpleicons-5/C/Crunchbase')
```



| Illustration | Crunchbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Crunchbase.png) | ![illustration for Crunchbase](../../simpleicons-5/C/Crunchbase.Local.png) |




## Crunchbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Crunchbase
include('simpleicons-5/C/Crunchbase')

' renders the element
Crunchbase('Crunchbase', 'Crunchbase', 'an optional tech label')
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

' loads the Item which embeds the element Crunchbase
include('simpleicons-5/C/Crunchbase')

' renders the element
Crunchbase('Crunchbase', 'Crunchbase', 'an optional tech label')
@enduml
```

