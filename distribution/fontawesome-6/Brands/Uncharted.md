# Uncharted


```text
fontawesome-6/Brands/Uncharted
```

```text
include('fontawesome-6/Brands/Uncharted')
```



| Illustration | Uncharted |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Uncharted.png) | ![illustration for Uncharted](../../fontawesome-6/Brands/Uncharted.Local.png) |




## Uncharted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Uncharted
include('fontawesome-6/Brands/Uncharted')

' renders the element
Uncharted('Uncharted', 'Uncharted', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uncharted
include('fontawesome-6/Brands/Uncharted')

' renders the element
Uncharted('Uncharted', 'Uncharted', 'an optional tech label', 'an optional description')
@enduml
```

