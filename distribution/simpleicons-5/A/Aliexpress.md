# Aliexpress


```text
simpleicons-5/A/Aliexpress
```

```text
include('simpleicons-5/A/Aliexpress')
```



| Illustration | Aliexpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aliexpress.png) | ![illustration for Aliexpress](../../simpleicons-5/A/Aliexpress.Local.png) |




## Aliexpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aliexpress
include('simpleicons-5/A/Aliexpress')

' renders the element
Aliexpress('Aliexpress', 'Aliexpress', 'an optional tech label')
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

' loads the Item which embeds the element Aliexpress
include('simpleicons-5/A/Aliexpress')

' renders the element
Aliexpress('Aliexpress', 'Aliexpress', 'an optional tech label')
@enduml
```

