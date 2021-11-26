# Amazonprime


```text
simpleicons-5/A/Amazonprime
```

```text
include('simpleicons-5/A/Amazonprime')
```



| Illustration | Amazonprime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Amazonprime.png) | ![illustration for Amazonprime](../../simpleicons-5/A/Amazonprime.Local.png) |




## Amazonprime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Amazonprime
include('simpleicons-5/A/Amazonprime')

' renders the element
Amazonprime('Amazonprime', 'Amazonprime', 'an optional tech label')
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

' loads the Item which embeds the element Amazonprime
include('simpleicons-5/A/Amazonprime')

' renders the element
Amazonprime('Amazonprime', 'Amazonprime', 'an optional tech label')
@enduml
```

