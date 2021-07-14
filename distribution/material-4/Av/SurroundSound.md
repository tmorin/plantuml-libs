# SurroundSound


```text
material-4/Av/SurroundSound
```

```text
include('material-4/Av/SurroundSound')
```



| Illustration | SurroundSound |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/SurroundSound.png) | ![illustration for SurroundSound](../../material-4/Av/SurroundSound.Local.png) |




## SurroundSound

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SurroundSound
include('material-4/Av/SurroundSound')

' renders the element
SurroundSound('SurroundSound', 'Surround Sound', 'an optional tech label')
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

' loads the Item which embeds the element SurroundSound
include('material-4/Av/SurroundSound')

' renders the element
SurroundSound('SurroundSound', 'Surround Sound', 'an optional tech label')
@enduml
```

