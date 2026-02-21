# Trustedshops


```text
simpleicons/T/Trustedshops
```

```text
include('simpleicons/T/Trustedshops')
```



| Illustration | Trustedshops |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trustedshops.png) | ![illustration for Trustedshops](../../simpleicons/T/Trustedshops.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrustedshopsXs>`
- `<$TrustedshopsSm>`
- `<$TrustedshopsMd>`
- `<$TrustedshopsLg>`





## Trustedshops

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trustedshops
include('simpleicons/T/Trustedshops')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trustedshops
include('simpleicons/T/Trustedshops')

' renders the element
Trustedshops('Trustedshops', 'Trustedshops', 'an optional tech label', 'an optional description')
@enduml
```

