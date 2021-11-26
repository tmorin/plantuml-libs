# Guilded


```text
fontawesome-5/Brands/Guilded
```

```text
include('fontawesome-5/Brands/Guilded')
```



| Illustration | Guilded |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Guilded.png) | ![illustration for Guilded](../../fontawesome-5/Brands/Guilded.Local.png) |




## Guilded

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Guilded
include('fontawesome-5/Brands/Guilded')

' renders the element
Guilded('Guilded', 'Guilded', 'an optional tech label')
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

' loads the Item which embeds the element Guilded
include('fontawesome-5/Brands/Guilded')

' renders the element
Guilded('Guilded', 'Guilded', 'an optional tech label')
@enduml
```

