# SkipPrevious


```text
material-4/Av/SkipPrevious
```

```text
include('material-4/Av/SkipPrevious')
```



| Illustration | SkipPrevious |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/SkipPrevious.png) | ![illustration for SkipPrevious](../../material-4/Av/SkipPrevious.Local.png) |




## SkipPrevious

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SkipPrevious
include('material-4/Av/SkipPrevious')

' renders the element
SkipPrevious('SkipPrevious', 'Skip Previous', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SkipPrevious
include('material-4/Av/SkipPrevious')

' renders the element
SkipPrevious('SkipPrevious', 'Skip Previous', 'an optional tech label', 'an optional description')
@enduml
```

