# Forward30


```text
material-4/Av/Forward30
```

```text
include('material-4/Av/Forward30')
```



| Illustration | Forward30 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Forward30.png) | ![illustration for Forward30](../../material-4/Av/Forward30.Local.png) |




## Forward30

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Forward30
include('material-4/Av/Forward30')

' renders the element
Forward30('Forward30', 'Forward30', 'an optional tech label')
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

' loads the Item which embeds the element Forward30
include('material-4/Av/Forward30')

' renders the element
Forward30('Forward30', 'Forward30', 'an optional tech label')
@enduml
```

