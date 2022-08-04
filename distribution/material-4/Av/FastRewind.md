# FastRewind


```text
material-4/Av/FastRewind
```

```text
include('material-4/Av/FastRewind')
```



| Illustration | FastRewind |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/FastRewind.png) | ![illustration for FastRewind](../../material-4/Av/FastRewind.Local.png) |




## FastRewind

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FastRewind
include('material-4/Av/FastRewind')

' renders the element
FastRewind('FastRewind', 'Fast Rewind', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FastRewind
include('material-4/Av/FastRewind')

' renders the element
FastRewind('FastRewind', 'Fast Rewind', 'an optional tech label', 'an optional description')
@enduml
```

