# Teamcity


```text
simpleicons-7/T/Teamcity
```

```text
include('simpleicons-7/T/Teamcity')
```



| Illustration | Teamcity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Teamcity.png) | ![illustration for Teamcity](../../simpleicons-7/T/Teamcity.Local.png) |




## Teamcity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Teamcity
include('simpleicons-7/T/Teamcity')

' renders the element
Teamcity('Teamcity', 'Teamcity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teamcity
include('simpleicons-7/T/Teamcity')

' renders the element
Teamcity('Teamcity', 'Teamcity', 'an optional tech label', 'an optional description')
@enduml
```

