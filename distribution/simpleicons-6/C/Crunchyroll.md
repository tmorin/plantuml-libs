# Crunchyroll


```text
simpleicons-6/C/Crunchyroll
```

```text
include('simpleicons-6/C/Crunchyroll')
```



| Illustration | Crunchyroll |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Crunchyroll.png) | ![illustration for Crunchyroll](../../simpleicons-6/C/Crunchyroll.Local.png) |




## Crunchyroll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Crunchyroll
include('simpleicons-6/C/Crunchyroll')

' renders the element
Crunchyroll('Crunchyroll', 'Crunchyroll', 'an optional tech label')
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

' loads the Item which embeds the element Crunchyroll
include('simpleicons-6/C/Crunchyroll')

' renders the element
Crunchyroll('Crunchyroll', 'Crunchyroll', 'an optional tech label')
@enduml
```

