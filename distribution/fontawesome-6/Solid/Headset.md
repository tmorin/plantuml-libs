# Headset


```text
fontawesome-6/Solid/Headset
```

```text
include('fontawesome-6/Solid/Headset')
```



| Illustration | Headset |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Headset.png) | ![illustration for Headset](../../fontawesome-6/Solid/Headset.Local.png) |




## Headset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Headset
include('fontawesome-6/Solid/Headset')

' renders the element
Headset('Headset', 'Headset', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Headset
include('fontawesome-6/Solid/Headset')

' renders the element
Headset('Headset', 'Headset', 'an optional tech label', 'an optional description')
@enduml
```

