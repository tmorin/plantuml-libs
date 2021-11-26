# Intellijidea


```text
simpleicons-5/I/Intellijidea
```

```text
include('simpleicons-5/I/Intellijidea')
```



| Illustration | Intellijidea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Intellijidea.png) | ![illustration for Intellijidea](../../simpleicons-5/I/Intellijidea.Local.png) |




## Intellijidea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Intellijidea
include('simpleicons-5/I/Intellijidea')

' renders the element
Intellijidea('Intellijidea', 'Intellijidea', 'an optional tech label')
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

' loads the Item which embeds the element Intellijidea
include('simpleicons-5/I/Intellijidea')

' renders the element
Intellijidea('Intellijidea', 'Intellijidea', 'an optional tech label')
@enduml
```

