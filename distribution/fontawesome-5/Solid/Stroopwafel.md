# Stroopwafel


```text
fontawesome-5/Solid/Stroopwafel
```

```text
include('fontawesome-5/Solid/Stroopwafel')
```



| Illustration | Stroopwafel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Stroopwafel.png) | ![illustration for Stroopwafel](../../fontawesome-5/Solid/Stroopwafel.Local.png) |




## Stroopwafel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Stroopwafel
include('fontawesome-5/Solid/Stroopwafel')

' renders the element
Stroopwafel('Stroopwafel', 'Stroopwafel', 'an optional tech label')
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

' loads the Item which embeds the element Stroopwafel
include('fontawesome-5/Solid/Stroopwafel')

' renders the element
Stroopwafel('Stroopwafel', 'Stroopwafel', 'an optional tech label')
@enduml
```

