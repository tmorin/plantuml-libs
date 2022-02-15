# Ingress


```text
simpleicons-6/I/Ingress
```

```text
include('simpleicons-6/I/Ingress')
```



| Illustration | Ingress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Ingress.png) | ![illustration for Ingress](../../simpleicons-6/I/Ingress.Local.png) |




## Ingress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ingress
include('simpleicons-6/I/Ingress')

' renders the element
Ingress('Ingress', 'Ingress', 'an optional tech label')
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

' loads the Item which embeds the element Ingress
include('simpleicons-6/I/Ingress')

' renders the element
Ingress('Ingress', 'Ingress', 'an optional tech label')
@enduml
```

