# Citroen


```text
simpleicons-5/C/Citroen
```

```text
include('simpleicons-5/C/Citroen')
```



| Illustration | Citroen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Citroen.png) | ![illustration for Citroen](../../simpleicons-5/C/Citroen.Local.png) |




## Citroen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Citroen
include('simpleicons-5/C/Citroen')

' renders the element
Citroen('Citroen', 'Citroen', 'an optional tech label')
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

' loads the Item which embeds the element Citroen
include('simpleicons-5/C/Citroen')

' renders the element
Citroen('Citroen', 'Citroen', 'an optional tech label')
@enduml
```

