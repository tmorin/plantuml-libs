# Stroopwafel


```text
fontawesome-6/Solid/Stroopwafel
```

```text
include('fontawesome-6/Solid/Stroopwafel')
```



| Illustration | Stroopwafel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Stroopwafel.png) | ![illustration for Stroopwafel](../../fontawesome-6/Solid/Stroopwafel.Local.png) |




## Stroopwafel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stroopwafel
include('fontawesome-6/Solid/Stroopwafel')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stroopwafel
include('fontawesome-6/Solid/Stroopwafel')

' renders the element
Stroopwafel('Stroopwafel', 'Stroopwafel', 'an optional tech label')
@enduml
```

