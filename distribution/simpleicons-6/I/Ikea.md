# Ikea


```text
simpleicons-6/I/Ikea
```

```text
include('simpleicons-6/I/Ikea')
```



| Illustration | Ikea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Ikea.png) | ![illustration for Ikea](../../simpleicons-6/I/Ikea.Local.png) |




## Ikea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ikea
include('simpleicons-6/I/Ikea')

' renders the element
Ikea('Ikea', 'Ikea', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ikea
include('simpleicons-6/I/Ikea')

' renders the element
Ikea('Ikea', 'Ikea', 'an optional tech label')
@enduml
```

