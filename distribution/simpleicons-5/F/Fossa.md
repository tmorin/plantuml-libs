# Fossa


```text
simpleicons-5/F/Fossa
```

```text
include('simpleicons-5/F/Fossa')
```



| Illustration | Fossa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fossa.png) | ![illustration for Fossa](../../simpleicons-5/F/Fossa.Local.png) |




## Fossa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fossa
include('simpleicons-5/F/Fossa')

' renders the element
Fossa('Fossa', 'Fossa', 'an optional tech label')
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

' loads the Item which embeds the element Fossa
include('simpleicons-5/F/Fossa')

' renders the element
Fossa('Fossa', 'Fossa', 'an optional tech label')
@enduml
```

