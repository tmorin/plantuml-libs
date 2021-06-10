# Fax


```text
fontawesome-5/Solid/Fax
```

```text
include('fontawesome-5/Solid/Fax')
```



| Illustration | Fax |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Fax.png) | ![illustration for Fax](../../fontawesome-5/Solid/Fax.Local.png) |




## Fax

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fax
include('fontawesome-5/Solid/Fax')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fax
include('fontawesome-5/Solid/Fax')

' renders the element
Fax('Fax', 'Fax', 'an optional tech label')
@enduml
```

