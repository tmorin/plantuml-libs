# Odysee


```text
fontawesome-6/Brands/Odysee
```

```text
include('fontawesome-6/Brands/Odysee')
```



| Illustration | Odysee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Odysee.png) | ![illustration for Odysee](../../fontawesome-6/Brands/Odysee.Local.png) |




## Odysee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Odysee
include('fontawesome-6/Brands/Odysee')

' renders the element
Odysee('Odysee', 'Odysee', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Odysee
include('fontawesome-6/Brands/Odysee')

' renders the element
Odysee('Odysee', 'Odysee', 'an optional tech label', 'an optional description')
@enduml
```

