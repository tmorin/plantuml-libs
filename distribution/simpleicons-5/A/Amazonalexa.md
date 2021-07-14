# Amazonalexa


```text
simpleicons-5/A/Amazonalexa
```

```text
include('simpleicons-5/A/Amazonalexa')
```



| Illustration | Amazonalexa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Amazonalexa.png) | ![illustration for Amazonalexa](../../simpleicons-5/A/Amazonalexa.Local.png) |




## Amazonalexa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Amazonalexa
include('simpleicons-5/A/Amazonalexa')

' renders the element
Amazonalexa('Amazonalexa', 'Amazonalexa', 'an optional tech label')
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

' loads the Item which embeds the element Amazonalexa
include('simpleicons-5/A/Amazonalexa')

' renders the element
Amazonalexa('Amazonalexa', 'Amazonalexa', 'an optional tech label')
@enduml
```

