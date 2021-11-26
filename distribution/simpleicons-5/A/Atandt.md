# Atandt


```text
simpleicons-5/A/Atandt
```

```text
include('simpleicons-5/A/Atandt')
```



| Illustration | Atandt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Atandt.png) | ![illustration for Atandt](../../simpleicons-5/A/Atandt.Local.png) |




## Atandt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Atandt
include('simpleicons-5/A/Atandt')

' renders the element
Atandt('Atandt', 'Atandt', 'an optional tech label')
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

' loads the Item which embeds the element Atandt
include('simpleicons-5/A/Atandt')

' renders the element
Atandt('Atandt', 'Atandt', 'an optional tech label')
@enduml
```

