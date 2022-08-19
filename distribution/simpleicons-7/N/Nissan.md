# Nissan


```text
simpleicons-7/N/Nissan
```

```text
include('simpleicons-7/N/Nissan')
```



| Illustration | Nissan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nissan.png) | ![illustration for Nissan](../../simpleicons-7/N/Nissan.Local.png) |




## Nissan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nissan
include('simpleicons-7/N/Nissan')

' renders the element
Nissan('Nissan', 'Nissan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nissan
include('simpleicons-7/N/Nissan')

' renders the element
Nissan('Nissan', 'Nissan', 'an optional tech label', 'an optional description')
@enduml
```
