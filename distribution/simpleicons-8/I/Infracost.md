# Infracost


```text
simpleicons-8/I/Infracost
```

```text
include('simpleicons-8/I/Infracost')
```



| Illustration | Infracost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Infracost.png) | ![illustration for Infracost](../../simpleicons-8/I/Infracost.Local.png) |




## Infracost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Infracost
include('simpleicons-8/I/Infracost')

' renders the element
Infracost('Infracost', 'Infracost', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Infracost
include('simpleicons-8/I/Infracost')

' renders the element
Infracost('Infracost', 'Infracost', 'an optional tech label', 'an optional description')
@enduml
```

