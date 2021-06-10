# Lyft


```text
fontawesome-5/Brands/Lyft
```

```text
include('fontawesome-5/Brands/Lyft')
```



| Illustration | Lyft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Lyft.png) | ![illustration for Lyft](../../fontawesome-5/Brands/Lyft.Local.png) |




## Lyft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Lyft
include('fontawesome-5/Brands/Lyft')

' renders the element
Lyft('Lyft', 'Lyft', 'an optional tech label')
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

' loads the Item which embeds the element Lyft
include('fontawesome-5/Brands/Lyft')

' renders the element
Lyft('Lyft', 'Lyft', 'an optional tech label')
@enduml
```

