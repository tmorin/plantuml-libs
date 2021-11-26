# Superscript


```text
fontawesome-5/Solid/Superscript
```

```text
include('fontawesome-5/Solid/Superscript')
```



| Illustration | Superscript |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Superscript.png) | ![illustration for Superscript](../../fontawesome-5/Solid/Superscript.Local.png) |




## Superscript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Superscript
include('fontawesome-5/Solid/Superscript')

' renders the element
Superscript('Superscript', 'Superscript', 'an optional tech label')
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

' loads the Item which embeds the element Superscript
include('fontawesome-5/Solid/Superscript')

' renders the element
Superscript('Superscript', 'Superscript', 'an optional tech label')
@enduml
```

