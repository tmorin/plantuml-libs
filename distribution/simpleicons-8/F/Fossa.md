# Fossa


```text
simpleicons-8/F/Fossa
```

```text
include('simpleicons-8/F/Fossa')
```



| Illustration | Fossa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fossa.png) | ![illustration for Fossa](../../simpleicons-8/F/Fossa.Local.png) |




## Fossa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fossa
include('simpleicons-8/F/Fossa')

' renders the element
Fossa('Fossa', 'Fossa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fossa
include('simpleicons-8/F/Fossa')

' renders the element
Fossa('Fossa', 'Fossa', 'an optional tech label', 'an optional description')
@enduml
```

