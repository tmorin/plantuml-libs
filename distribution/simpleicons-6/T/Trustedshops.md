# Trustedshops


```text
simpleicons-6/T/Trustedshops
```

```text
include('simpleicons-6/T/Trustedshops')
```



| Illustration | Trustedshops |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Trustedshops.png) | ![illustration for Trustedshops](../../simpleicons-6/T/Trustedshops.Local.png) |




## Trustedshops

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Trustedshops
include('simpleicons-6/T/Trustedshops')

' renders the element
Trustedshops('Trustedshops', 'Trustedshops', 'an optional tech label')
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

' loads the Item which embeds the element Trustedshops
include('simpleicons-6/T/Trustedshops')

' renders the element
Trustedshops('Trustedshops', 'Trustedshops', 'an optional tech label')
@enduml
```

