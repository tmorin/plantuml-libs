# Groupon


```text
simpleicons-7/G/Groupon
```

```text
include('simpleicons-7/G/Groupon')
```



| Illustration | Groupon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Groupon.png) | ![illustration for Groupon](../../simpleicons-7/G/Groupon.Local.png) |




## Groupon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Groupon
include('simpleicons-7/G/Groupon')

' renders the element
Groupon('Groupon', 'Groupon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Groupon
include('simpleicons-7/G/Groupon')

' renders the element
Groupon('Groupon', 'Groupon', 'an optional tech label', 'an optional description')
@enduml
```

