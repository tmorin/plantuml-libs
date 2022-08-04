# Trustedshops


```text
simpleicons-7/T/Trustedshops
```

```text
include('simpleicons-7/T/Trustedshops')
```



| Illustration | Trustedshops |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Trustedshops.png) | ![illustration for Trustedshops](../../simpleicons-7/T/Trustedshops.Local.png) |




## Trustedshops

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Trustedshops
include('simpleicons-7/T/Trustedshops')

' renders the element
Trustedshops('Trustedshops', 'Trustedshops', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Trustedshops
include('simpleicons-7/T/Trustedshops')

' renders the element
Trustedshops('Trustedshops', 'Trustedshops', 'an optional tech label', 'an optional description')
@enduml
```

