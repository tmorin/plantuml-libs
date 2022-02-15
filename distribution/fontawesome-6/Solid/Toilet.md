# Toilet


```text
fontawesome-6/Solid/Toilet
```

```text
include('fontawesome-6/Solid/Toilet')
```



| Illustration | Toilet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Toilet.png) | ![illustration for Toilet](../../fontawesome-6/Solid/Toilet.Local.png) |




## Toilet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Toilet
include('fontawesome-6/Solid/Toilet')

' renders the element
Toilet('Toilet', 'Toilet', 'an optional tech label')
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

' loads the Item which embeds the element Toilet
include('fontawesome-6/Solid/Toilet')

' renders the element
Toilet('Toilet', 'Toilet', 'an optional tech label')
@enduml
```

