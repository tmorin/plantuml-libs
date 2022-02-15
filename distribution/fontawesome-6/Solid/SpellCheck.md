# SpellCheck


```text
fontawesome-6/Solid/SpellCheck
```

```text
include('fontawesome-6/Solid/SpellCheck')
```



| Illustration | SpellCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SpellCheck.png) | ![illustration for SpellCheck](../../fontawesome-6/Solid/SpellCheck.Local.png) |




## SpellCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SpellCheck
include('fontawesome-6/Solid/SpellCheck')

' renders the element
SpellCheck('SpellCheck', 'Spell Check', 'an optional tech label')
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

' loads the Item which embeds the element SpellCheck
include('fontawesome-6/Solid/SpellCheck')

' renders the element
SpellCheck('SpellCheck', 'Spell Check', 'an optional tech label')
@enduml
```

