# Equals


```text
fontawesome-5/Solid/Equals
```

```text
include('fontawesome-5/Solid/Equals')
```



| Illustration | Equals |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Equals.png) | ![illustration for Equals](../../fontawesome-5/Solid/Equals.Local.png) |




## Equals

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Equals
include('fontawesome-5/Solid/Equals')

' renders the element
Equals('Equals', 'Equals', 'an optional tech label')
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

' loads the Item which embeds the element Equals
include('fontawesome-5/Solid/Equals')

' renders the element
Equals('Equals', 'Equals', 'an optional tech label')
@enduml
```

