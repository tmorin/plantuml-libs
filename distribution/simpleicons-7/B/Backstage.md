# Backstage


```text
simpleicons-7/B/Backstage
```

```text
include('simpleicons-7/B/Backstage')
```



| Illustration | Backstage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Backstage.png) | ![illustration for Backstage](../../simpleicons-7/B/Backstage.Local.png) |




## Backstage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Backstage
include('simpleicons-7/B/Backstage')

' renders the element
Backstage('Backstage', 'Backstage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backstage
include('simpleicons-7/B/Backstage')

' renders the element
Backstage('Backstage', 'Backstage', 'an optional tech label', 'an optional description')
@enduml
```

