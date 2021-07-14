# Sepa


```text
simpleicons-5/S/Sepa
```

```text
include('simpleicons-5/S/Sepa')
```



| Illustration | Sepa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sepa.png) | ![illustration for Sepa](../../simpleicons-5/S/Sepa.Local.png) |




## Sepa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sepa
include('simpleicons-5/S/Sepa')

' renders the element
Sepa('Sepa', 'Sepa', 'an optional tech label')
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

' loads the Item which embeds the element Sepa
include('simpleicons-5/S/Sepa')

' renders the element
Sepa('Sepa', 'Sepa', 'an optional tech label')
@enduml
```

