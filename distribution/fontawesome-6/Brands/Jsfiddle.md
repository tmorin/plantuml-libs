# Jsfiddle


```text
fontawesome-6/Brands/Jsfiddle
```

```text
include('fontawesome-6/Brands/Jsfiddle')
```



| Illustration | Jsfiddle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Jsfiddle.png) | ![illustration for Jsfiddle](../../fontawesome-6/Brands/Jsfiddle.Local.png) |




## Jsfiddle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Jsfiddle
include('fontawesome-6/Brands/Jsfiddle')

' renders the element
Jsfiddle('Jsfiddle', 'Jsfiddle', 'an optional tech label')
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

' loads the Item which embeds the element Jsfiddle
include('fontawesome-6/Brands/Jsfiddle')

' renders the element
Jsfiddle('Jsfiddle', 'Jsfiddle', 'an optional tech label')
@enduml
```

