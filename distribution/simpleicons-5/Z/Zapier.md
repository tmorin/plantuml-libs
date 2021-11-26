# Zapier


```text
simpleicons-5/Z/Zapier
```

```text
include('simpleicons-5/Z/Zapier')
```



| Illustration | Zapier |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zapier.png) | ![illustration for Zapier](../../simpleicons-5/Z/Zapier.Local.png) |




## Zapier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zapier
include('simpleicons-5/Z/Zapier')

' renders the element
Zapier('Zapier', 'Zapier', 'an optional tech label')
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

' loads the Item which embeds the element Zapier
include('simpleicons-5/Z/Zapier')

' renders the element
Zapier('Zapier', 'Zapier', 'an optional tech label')
@enduml
```

