# Hanukiah


```text
fontawesome-5/Solid/Hanukiah
```

```text
include('fontawesome-5/Solid/Hanukiah')
```



| Illustration | Hanukiah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hanukiah.png) | ![illustration for Hanukiah](../../fontawesome-5/Solid/Hanukiah.Local.png) |




## Hanukiah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hanukiah
include('fontawesome-5/Solid/Hanukiah')

' renders the element
Hanukiah('Hanukiah', 'Hanukiah', 'an optional tech label')
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

' loads the Item which embeds the element Hanukiah
include('fontawesome-5/Solid/Hanukiah')

' renders the element
Hanukiah('Hanukiah', 'Hanukiah', 'an optional tech label')
@enduml
```

