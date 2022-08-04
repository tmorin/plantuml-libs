# Laptop


```text
fontawesome-6/Solid/Laptop
```

```text
include('fontawesome-6/Solid/Laptop')
```



| Illustration | Laptop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Laptop.png) | ![illustration for Laptop](../../fontawesome-6/Solid/Laptop.Local.png) |




## Laptop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Laptop
include('fontawesome-6/Solid/Laptop')

' renders the element
Laptop('Laptop', 'Laptop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Laptop
include('fontawesome-6/Solid/Laptop')

' renders the element
Laptop('Laptop', 'Laptop', 'an optional tech label', 'an optional description')
@enduml
```

