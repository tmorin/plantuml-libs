# RepeatOne


```text
material-4/Av/RepeatOne
```

```text
include('material-4/Av/RepeatOne')
```



| Illustration | RepeatOne |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/RepeatOne.png) | ![illustration for RepeatOne](../../material-4/Av/RepeatOne.Local.png) |




## RepeatOne

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RepeatOne
include('material-4/Av/RepeatOne')

' renders the element
RepeatOne('RepeatOne', 'Repeat One', 'an optional tech label')
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

' loads the Item which embeds the element RepeatOne
include('material-4/Av/RepeatOne')

' renders the element
RepeatOne('RepeatOne', 'Repeat One', 'an optional tech label')
@enduml
```

