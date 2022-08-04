# Forward5


```text
material-4/Av/Forward5
```

```text
include('material-4/Av/Forward5')
```



| Illustration | Forward5 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Forward5.png) | ![illustration for Forward5](../../material-4/Av/Forward5.Local.png) |




## Forward5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Forward5
include('material-4/Av/Forward5')

' renders the element
Forward5('Forward5', 'Forward5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Forward5
include('material-4/Av/Forward5')

' renders the element
Forward5('Forward5', 'Forward5', 'an optional tech label', 'an optional description')
@enduml
```

