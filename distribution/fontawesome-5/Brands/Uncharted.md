# Uncharted


```text
fontawesome-5/Brands/Uncharted
```

```text
include('fontawesome-5/Brands/Uncharted')
```



| Illustration | Uncharted |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Uncharted.png) | ![illustration for Uncharted](../../fontawesome-5/Brands/Uncharted.Local.png) |




## Uncharted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Uncharted
include('fontawesome-5/Brands/Uncharted')

' renders the element
Uncharted('Uncharted', 'Uncharted', 'an optional tech label')
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

' loads the Item which embeds the element Uncharted
include('fontawesome-5/Brands/Uncharted')

' renders the element
Uncharted('Uncharted', 'Uncharted', 'an optional tech label')
@enduml
```

