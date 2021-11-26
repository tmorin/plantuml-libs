# Cypress


```text
simpleicons-5/C/Cypress
```

```text
include('simpleicons-5/C/Cypress')
```



| Illustration | Cypress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cypress.png) | ![illustration for Cypress](../../simpleicons-5/C/Cypress.Local.png) |




## Cypress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cypress
include('simpleicons-5/C/Cypress')

' renders the element
Cypress('Cypress', 'Cypress', 'an optional tech label')
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

' loads the Item which embeds the element Cypress
include('simpleicons-5/C/Cypress')

' renders the element
Cypress('Cypress', 'Cypress', 'an optional tech label')
@enduml
```

