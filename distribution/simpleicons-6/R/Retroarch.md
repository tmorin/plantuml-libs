# Retroarch


```text
simpleicons-6/R/Retroarch
```

```text
include('simpleicons-6/R/Retroarch')
```



| Illustration | Retroarch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Retroarch.png) | ![illustration for Retroarch](../../simpleicons-6/R/Retroarch.Local.png) |




## Retroarch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Retroarch
include('simpleicons-6/R/Retroarch')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Retroarch
include('simpleicons-6/R/Retroarch')

' renders the element
Retroarch('Retroarch', 'Retroarch', 'an optional tech label')
@enduml
```

