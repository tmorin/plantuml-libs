# Appstore


```text
simpleicons-7/A/Appstore
```

```text
include('simpleicons-7/A/Appstore')
```



| Illustration | Appstore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Appstore.png) | ![illustration for Appstore](../../simpleicons-7/A/Appstore.Local.png) |




## Appstore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Appstore
include('simpleicons-7/A/Appstore')

' renders the element
Appstore('Appstore', 'Appstore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Appstore
include('simpleicons-7/A/Appstore')

' renders the element
Appstore('Appstore', 'Appstore', 'an optional tech label', 'an optional description')
@enduml
```

