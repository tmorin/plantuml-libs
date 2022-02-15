# Fax


```text
fontawesome-6/Solid/Fax
```

```text
include('fontawesome-6/Solid/Fax')
```



| Illustration | Fax |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Fax.png) | ![illustration for Fax](../../fontawesome-6/Solid/Fax.Local.png) |




## Fax

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fax
include('fontawesome-6/Solid/Fax')

' renders the element
Fax('Fax', 'Fax', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fax
include('fontawesome-6/Solid/Fax')

' renders the element
Fax('Fax', 'Fax', 'an optional tech label')
@enduml
```

