# Nextdoor


```text
simpleicons-5/N/Nextdoor
```

```text
include('simpleicons-5/N/Nextdoor')
```



| Illustration | Nextdoor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nextdoor.png) | ![illustration for Nextdoor](../../simpleicons-5/N/Nextdoor.Local.png) |




## Nextdoor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nextdoor
include('simpleicons-5/N/Nextdoor')

' renders the element
Nextdoor('Nextdoor', 'Nextdoor', 'an optional tech label')
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

' loads the Item which embeds the element Nextdoor
include('simpleicons-5/N/Nextdoor')

' renders the element
Nextdoor('Nextdoor', 'Nextdoor', 'an optional tech label')
@enduml
```

