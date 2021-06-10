# ShieldAlt


```text
fontawesome-5/Solid/ShieldAlt
```

```text
include('fontawesome-5/Solid/ShieldAlt')
```



| Illustration | ShieldAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShieldAlt.png) | ![illustration for ShieldAlt](../../fontawesome-5/Solid/ShieldAlt.Local.png) |




## ShieldAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShieldAlt
include('fontawesome-5/Solid/ShieldAlt')

' renders the element
ShieldAlt('ShieldAlt', 'Shield Alt', 'an optional tech label')
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

' loads the Item which embeds the element ShieldAlt
include('fontawesome-5/Solid/ShieldAlt')

' renders the element
ShieldAlt('ShieldAlt', 'Shield Alt', 'an optional tech label')
@enduml
```

