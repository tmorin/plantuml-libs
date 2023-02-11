# Gocd


```text
simpleicons-8/G/Gocd
```

```text
include('simpleicons-8/G/Gocd')
```



| Illustration | Gocd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gocd.png) | ![illustration for Gocd](../../simpleicons-8/G/Gocd.Local.png) |




## Gocd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gocd
include('simpleicons-8/G/Gocd')

' renders the element
Gocd('Gocd', 'Gocd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gocd
include('simpleicons-8/G/Gocd')

' renders the element
Gocd('Gocd', 'Gocd', 'an optional tech label', 'an optional description')
@enduml
```

