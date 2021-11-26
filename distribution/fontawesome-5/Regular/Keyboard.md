# Keyboard


```text
fontawesome-5/Regular/Keyboard
```

```text
include('fontawesome-5/Regular/Keyboard')
```



| Illustration | Keyboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Keyboard.png) | ![illustration for Keyboard](../../fontawesome-5/Regular/Keyboard.Local.png) |




## Keyboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Keyboard
include('fontawesome-5/Regular/Keyboard')

' renders the element
Keyboard('Keyboard', 'Keyboard', 'an optional tech label')
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

' loads the Item which embeds the element Keyboard
include('fontawesome-5/Regular/Keyboard')

' renders the element
Keyboard('Keyboard', 'Keyboard', 'an optional tech label')
@enduml
```

