# Gofore


```text
fontawesome-5/Brands/Gofore
```

```text
include('fontawesome-5/Brands/Gofore')
```



| Illustration | Gofore |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Gofore.png) | ![illustration for Gofore](../../fontawesome-5/Brands/Gofore.Local.png) |




## Gofore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gofore
include('fontawesome-5/Brands/Gofore')

' renders the element
Gofore('Gofore', 'Gofore', 'an optional tech label')
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

' loads the Item which embeds the element Gofore
include('fontawesome-5/Brands/Gofore')

' renders the element
Gofore('Gofore', 'Gofore', 'an optional tech label')
@enduml
```

