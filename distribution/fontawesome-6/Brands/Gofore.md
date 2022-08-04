# Gofore


```text
fontawesome-6/Brands/Gofore
```

```text
include('fontawesome-6/Brands/Gofore')
```



| Illustration | Gofore |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Gofore.png) | ![illustration for Gofore](../../fontawesome-6/Brands/Gofore.Local.png) |




## Gofore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gofore
include('fontawesome-6/Brands/Gofore')

' renders the element
Gofore('Gofore', 'Gofore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gofore
include('fontawesome-6/Brands/Gofore')

' renders the element
Gofore('Gofore', 'Gofore', 'an optional tech label', 'an optional description')
@enduml
```

