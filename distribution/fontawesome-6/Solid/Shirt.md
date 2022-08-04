# Shirt


```text
fontawesome-6/Solid/Shirt
```

```text
include('fontawesome-6/Solid/Shirt')
```



| Illustration | Shirt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Shirt.png) | ![illustration for Shirt](../../fontawesome-6/Solid/Shirt.Local.png) |




## Shirt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shirt
include('fontawesome-6/Solid/Shirt')

' renders the element
Shirt('Shirt', 'Shirt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shirt
include('fontawesome-6/Solid/Shirt')

' renders the element
Shirt('Shirt', 'Shirt', 'an optional tech label', 'an optional description')
@enduml
```

