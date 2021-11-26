# Forward10


```text
material-4/Av/Forward10
```

```text
include('material-4/Av/Forward10')
```



| Illustration | Forward10 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Forward10.png) | ![illustration for Forward10](../../material-4/Av/Forward10.Local.png) |




## Forward10

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Forward10
include('material-4/Av/Forward10')

' renders the element
Forward10('Forward10', 'Forward10', 'an optional tech label')
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

' loads the Item which embeds the element Forward10
include('material-4/Av/Forward10')

' renders the element
Forward10('Forward10', 'Forward10', 'an optional tech label')
@enduml
```

