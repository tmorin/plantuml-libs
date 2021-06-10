# Weebly


```text
fontawesome-5/Brands/Weebly
```

```text
include('fontawesome-5/Brands/Weebly')
```



| Illustration | Weebly |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Weebly.png) | ![illustration for Weebly](../../fontawesome-5/Brands/Weebly.Local.png) |




## Weebly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Weebly
include('fontawesome-5/Brands/Weebly')

' renders the element
Weebly('Weebly', 'Weebly', 'an optional tech label')
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

' loads the Item which embeds the element Weebly
include('fontawesome-5/Brands/Weebly')

' renders the element
Weebly('Weebly', 'Weebly', 'an optional tech label')
@enduml
```

