# Trademark


```text
fontawesome-5/Solid/Trademark
```

```text
include('fontawesome-5/Solid/Trademark')
```



| Illustration | Trademark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Trademark.png) | ![illustration for Trademark](../../fontawesome-5/Solid/Trademark.Local.png) |




## Trademark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Trademark
include('fontawesome-5/Solid/Trademark')

' renders the element
Trademark('Trademark', 'Trademark', 'an optional tech label')
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

' loads the Item which embeds the element Trademark
include('fontawesome-5/Solid/Trademark')

' renders the element
Trademark('Trademark', 'Trademark', 'an optional tech label')
@enduml
```

