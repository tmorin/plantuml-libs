# Producthunt


```text
simpleicons-5/P/Producthunt
```

```text
include('simpleicons-5/P/Producthunt')
```



| Illustration | Producthunt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Producthunt.png) | ![illustration for Producthunt](../../simpleicons-5/P/Producthunt.Local.png) |




## Producthunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Producthunt
include('simpleicons-5/P/Producthunt')

' renders the element
Producthunt('Producthunt', 'Producthunt', 'an optional tech label')
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

' loads the Item which embeds the element Producthunt
include('simpleicons-5/P/Producthunt')

' renders the element
Producthunt('Producthunt', 'Producthunt', 'an optional tech label')
@enduml
```

