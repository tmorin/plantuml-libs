# RepeatOneOn


```text
material-4/Av/RepeatOneOn
```

```text
include('material-4/Av/RepeatOneOn')
```



| Illustration | RepeatOneOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/RepeatOneOn.png) | ![illustration for RepeatOneOn](../../material-4/Av/RepeatOneOn.Local.png) |




## RepeatOneOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RepeatOneOn
include('material-4/Av/RepeatOneOn')

' renders the element
RepeatOneOn('RepeatOneOn', 'Repeat One On', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element RepeatOneOn
include('material-4/Av/RepeatOneOn')

' renders the element
RepeatOneOn('RepeatOneOn', 'Repeat One On', 'an optional tech label', 'an optional description')
@enduml
```

