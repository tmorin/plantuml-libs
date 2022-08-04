# Equals


```text
fontawesome-6/Solid/Equals
```

```text
include('fontawesome-6/Solid/Equals')
```



| Illustration | Equals |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Equals.png) | ![illustration for Equals](../../fontawesome-6/Solid/Equals.Local.png) |




## Equals

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Equals
include('fontawesome-6/Solid/Equals')

' renders the element
Equals('Equals', 'Equals', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Equals
include('fontawesome-6/Solid/Equals')

' renders the element
Equals('Equals', 'Equals', 'an optional tech label', 'an optional description')
@enduml
```

