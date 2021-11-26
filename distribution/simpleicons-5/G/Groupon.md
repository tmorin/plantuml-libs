# Groupon


```text
simpleicons-5/G/Groupon
```

```text
include('simpleicons-5/G/Groupon')
```



| Illustration | Groupon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Groupon.png) | ![illustration for Groupon](../../simpleicons-5/G/Groupon.Local.png) |




## Groupon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Groupon
include('simpleicons-5/G/Groupon')

' renders the element
Groupon('Groupon', 'Groupon', 'an optional tech label')
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

' loads the Item which embeds the element Groupon
include('simpleicons-5/G/Groupon')

' renders the element
Groupon('Groupon', 'Groupon', 'an optional tech label')
@enduml
```

