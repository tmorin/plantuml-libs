# Frappe


```text
simpleicons/F/Frappe
```

```text
include('simpleicons/F/Frappe')
```



| Illustration | Frappe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Frappe.png) | ![illustration for Frappe](../../simpleicons/F/Frappe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrappeXs>`
- `<$FrappeSm>`
- `<$FrappeMd>`
- `<$FrappeLg>`





## Frappe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Frappe
include('simpleicons/F/Frappe')

' renders the element
Frappe('Frappe', 'Frappe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Frappe
include('simpleicons/F/Frappe')

' renders the element
Frappe('Frappe', 'Frappe', 'an optional tech label', 'an optional description')
@enduml
```

