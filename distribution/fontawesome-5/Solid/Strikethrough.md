# Strikethrough


```text
fontawesome-5/Solid/Strikethrough
```

```text
include('fontawesome-5/Solid/Strikethrough')
```



| Illustration | Strikethrough |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Strikethrough.png) | ![illustration for Strikethrough](../../fontawesome-5/Solid/Strikethrough.Local.png) |




## Strikethrough

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Strikethrough
include('fontawesome-5/Solid/Strikethrough')

' renders the element
Strikethrough('Strikethrough', 'Strikethrough', 'an optional tech label')
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

' loads the Item which embeds the element Strikethrough
include('fontawesome-5/Solid/Strikethrough')

' renders the element
Strikethrough('Strikethrough', 'Strikethrough', 'an optional tech label')
@enduml
```

