# Retroarch


```text
simpleicons-5/R/Retroarch
```

```text
include('simpleicons-5/R/Retroarch')
```



| Illustration | Retroarch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Retroarch.png) | ![illustration for Retroarch](../../simpleicons-5/R/Retroarch.Local.png) |




## Retroarch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Retroarch
include('simpleicons-5/R/Retroarch')

' renders the element
Retroarch('Retroarch', 'Retroarch', 'an optional tech label')
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

' loads the Item which embeds the element Retroarch
include('simpleicons-5/R/Retroarch')

' renders the element
Retroarch('Retroarch', 'Retroarch', 'an optional tech label')
@enduml
```

