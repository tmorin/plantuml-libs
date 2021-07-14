# Repeat


```text
material-4/Av/Repeat
```

```text
include('material-4/Av/Repeat')
```



| Illustration | Repeat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Repeat.png) | ![illustration for Repeat](../../material-4/Av/Repeat.Local.png) |




## Repeat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Repeat
include('material-4/Av/Repeat')

' renders the element
Repeat('Repeat', 'Repeat', 'an optional tech label')
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

' loads the Item which embeds the element Repeat
include('material-4/Av/Repeat')

' renders the element
Repeat('Repeat', 'Repeat', 'an optional tech label')
@enduml
```

