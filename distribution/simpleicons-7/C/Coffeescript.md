# Coffeescript


```text
simpleicons-7/C/Coffeescript
```

```text
include('simpleicons-7/C/Coffeescript')
```



| Illustration | Coffeescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Coffeescript.png) | ![illustration for Coffeescript](../../simpleicons-7/C/Coffeescript.Local.png) |




## Coffeescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Coffeescript
include('simpleicons-7/C/Coffeescript')

' renders the element
Coffeescript('Coffeescript', 'Coffeescript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coffeescript
include('simpleicons-7/C/Coffeescript')

' renders the element
Coffeescript('Coffeescript', 'Coffeescript', 'an optional tech label', 'an optional description')
@enduml
```

