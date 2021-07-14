# Appstore


```text
simpleicons-5/A/Appstore
```

```text
include('simpleicons-5/A/Appstore')
```



| Illustration | Appstore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Appstore.png) | ![illustration for Appstore](../../simpleicons-5/A/Appstore.Local.png) |




## Appstore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Appstore
include('simpleicons-5/A/Appstore')

' renders the element
Appstore('Appstore', 'Appstore', 'an optional tech label')
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

' loads the Item which embeds the element Appstore
include('simpleicons-5/A/Appstore')

' renders the element
Appstore('Appstore', 'Appstore', 'an optional tech label')
@enduml
```

