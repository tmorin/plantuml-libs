# Amazonprime


```text
simpleicons-8/A/Amazonprime
```

```text
include('simpleicons-8/A/Amazonprime')
```



| Illustration | Amazonprime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Amazonprime.png) | ![illustration for Amazonprime](../../simpleicons-8/A/Amazonprime.Local.png) |




## Amazonprime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Amazonprime
include('simpleicons-8/A/Amazonprime')

' renders the element
Amazonprime('Amazonprime', 'Amazonprime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazonprime
include('simpleicons-8/A/Amazonprime')

' renders the element
Amazonprime('Amazonprime', 'Amazonprime', 'an optional tech label', 'an optional description')
@enduml
```

