# Trustedshops


```text
simpleicons-5/T/Trustedshops
```

```text
include('simpleicons-5/T/Trustedshops')
```



| Illustration | Trustedshops |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Trustedshops.png) | ![illustration for Trustedshops](../../simpleicons-5/T/Trustedshops.Local.png) |




## Trustedshops

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Trustedshops
include('simpleicons-5/T/Trustedshops')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Trustedshops
include('simpleicons-5/T/Trustedshops')

' renders the element
Trustedshops('Trustedshops', 'Trustedshops', 'an optional tech label')
@enduml
```

